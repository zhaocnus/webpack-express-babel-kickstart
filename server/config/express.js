/**
 * Express configuration
 */
import express from 'express';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import path from 'path';
import config from './environment';

// Modules that might be needed in the future
// import cookieParser from 'cookie-parser';
// import methodOverride from 'method-override';
export default function(app) {
  let env = app.get('env');

  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // app.use(methodOverride());
  // app.use(cookieParser());

  app.set('appPath', path.join(config.root, 'client'));

  if ('production' === env) {
    app.use(favicon(path.join(config.root, 'client', 'favicon.ico')));
    app.use(express.static(app.get('appPath')));
    app.use(morgan('dev'));
  }

  if ('development' === env) {
    const webpack = require('webpack');
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('../../webpack.dev.js');

    // use webpack middleware to serve webpack bundles in dev mode
    let compiler = webpack(webpackConfig);
    let middleware = webpackMiddleware(compiler, {
      publicPath: '/',
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
  }

  if ('development' === env || 'test' === env) {
    app.use(express.static(app.get('appPath')));
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
}
