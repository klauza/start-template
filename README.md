## About
This is a starting template for new projects. There are several environments configured, like file system, webpack, bootstrap, jquery. It has all polyfills and is ES2019 ready.

<br/>

---

## Dependencies
- ### **main:**
| Name  | version |
| ------------- | ------------- |
| **core-js** | 3.1.4  |
| **webpack** | 4.0.2  |
| **webpack-cli** | 3.3.5  |
| **bootstrap** | 4.3.1  |
| **jquery** | 3.4.1  |

- ### **others:** 
@babel/core: (*7.4.5*) -- @babel/preset-env: *7.4.5* -- babel-loader: *8.0.6* -- clean-webpack-plugin: *3.0.0* -- css-loader: *3.0.0* -- file-loader: *4.0.0* -- html-loader: *0.5.5* -- html-webpack-plugin: *3.2.0* -- mini-css-extract-plugin: *0.7.0* -- node-sass: *4.12.0* -- optimize-css-assets-webpack-plugin: *5.0.3* -- popper.js: *1.15.0* -- sass-loader: *7.1.0* -- style-loader: *0.23.1* -- regenerator-runtime: *0.13.2* -- webpack-dev-server: *3.7.2* -- copy-webpack-plugin: *5.0.3*

**jquery** is in devDependiencies for bootstrap workflow, but also included inline in html file from cdn for global usage

<br/>

---

## Installation
#### Initial setup
- install NodeJS [from here](https://nodejs.org/en/)

#### In main project dir, run:

- `npm install` - gets all the necessary packages for this project

- `npm start` - starts  **local server**, **browser sync**, **sass compiler**

<br/>

---

## Deployment
- `npm run build` - builds the application and puts minified files into **/dist** folder.

<br/>

---

## License
MIT license