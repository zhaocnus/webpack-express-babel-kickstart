# Webpack + Express + Babel fullstack kickstart

A simple fullstack starter using **webpack**, **express**, and **babel**.

  * See [here](https://github.com/christianalfoni/webpack-express-boilerplate) for a kickstarter with angular 1 and mongoose


### Reference/Inspiration
  * [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate)
  * [generator-angular-fullstack](https://github.com/angular-fullstack/generator-angular-fullstack)

### Install nodemon globally
```
npm i -g nodemon
```

### Start in dev mode
```
npm i
npm start  # start express server with webpack middleware
```

### Create distribution build
```
npm run build
```

* Creates client-side bundle to `dist/client` using **webpack**
* Transpiles sever-side code to `dist/server` using **babel-cli**

### Serve prod code using **nodemon**.
```
npm run prod:serve  # run this after `npm run build`
```


### Deploy and serve prod code on live server using **pm2**
```
git pull origin master
npm run build
pm2 startOrRestart pm2-prod.json
```