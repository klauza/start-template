import "./style.scss";
import { app } from "./js/app.js"; 

app();

async function getUsers(){
  const response = await fetch('https://api.github.com/users/klauza');

  const data = await response.json();
 
  return data
}
getUsers().then(result => {
  const avatar = result.avatar_url;
  console.log(avatar); 
  document.getElementById('image').setAttribute('src', avatar);
});

