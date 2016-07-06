/**
 * Main application routes
 */
import path from 'path';

export default function(app) {
  // Insert routes below
  // app.use('/api/thing', require('./api/thing').default);


  // All other routes should redirect to index.html
  // ============================================================
  let env = app.get('env');

  if (env === 'production') {
    app.route('/*')
      .get((req, res) => {
        res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
      });
  } else if (env === 'development') {
    require('./webpack-middleware').default(app);
  }
}
