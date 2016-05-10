# Webpack + Express + Babel fullstack kickstart

A simple fullstack starter using **webpack**, **express**, and **babel**.

Good alternative for [angular-fullstack](https://github.com/angular-fullstack/generator-angular-fullstack) for new projects without installing Gulp. Although I love Gulp. I used this starter for fullstack projects using angular 1 or 2, and express.

This is not a full MEAN stack.

### Reference

* [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate)

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