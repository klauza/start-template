## About

Several environments are configured: dir tree, webpack, bootstrap and jquery. Contains polyfills and is ES2019 ready. [live website](https://klauza-template.netlify.app/)
<br/>

<img src="https://user-images.githubusercontent.com/43997053/115117416-541c8c80-9f96-11eb-929c-216ce18e12e8.PNG" width="500">

---

## Dependencies

- ### **main:**

  | Name            | version |
  | --------------- | ------- |
  | **core-js**     | 3.1.4   |
  | **webpack**     | 4.0.2   |
  | **webpack-cli** | 3.3.5   |
  | **bootstrap**   | 4.3.1   |
  | **jquery**      | 3.4.1   |

- ### **others:**
  @babel/core: (_7.4.5_) -- @babel/preset-env: _7.4.5_ -- babel-loader: _8.0.6_ -- clean-webpack-plugin: _3.0.0_ -- css-loader: _3.0.0_ -- file-loader: _4.0.0_ -- html-loader: _0.5.5_ -- html-webpack-plugin: _3.2.0_ -- mini-css-extract-plugin: _0.7.0_ -- node-sass: _4.12.0_ -- optimize-css-assets-webpack-plugin: _5.0.3_ -- popper.js: _1.15.0_ -- sass-loader: _7.1.0_ -- style-loader: _0.23.1_ -- regenerator-runtime: _0.13.2_ -- webpack-dev-server: _3.7.2_ -- copy-webpack-plugin: _5.0.3_

**jquery** is in devDependiencies for bootstrap workflow, but also included inline in html file from cdn for global usage

<br/>

---

## Installation

#### Initial setup

- need to install python 2.7
- install NodeJS [from here](https://nodejs.org/en/)

#### In main project dir, run:

- `npm install` - gets all the necessary packages for this project

- `npm start` - starts **local server**, **browser sync**, **sass compiler**

<br/>

---

## Deployment

- `npm run build` - builds the application and puts minified files into **/dist** folder.

<br/>

---

## License

MIT license
