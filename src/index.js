import 'core-js/stable'; // polyfill only stable `core-js` features - ES and web standards:
import "regenerator-runtime/runtime";
/*   */
import "./style.scss";
import { app } from "./js/app.js"; 

Promise.resolve(2020).then(x => console.log(x)); // test

app();

// avatar from github api
async function getAvatar(){
  const response = await fetch('https://api.github.com/users/klauza');

  const data = await response.json();
 
  return data
}

getAvatar().then(result => {
  const avatar = result.avatar_url;
  // console.log(avatar); 
  document.getElementById('image').setAttribute('src', avatar);
});

