import { app } from "./js/app.js"; 
import { Photos } from "./js/photos.js"; 
import "./style.scss";

app();


// test, free to delete
const photos = new Photos();

async function main() {
  console.log(await photos.getPhotos());
}

main();
