const app = () => {

  Promise.resolve(2020).then(x => console.log(x)); // polyfill es5 test

  console.log($.now()); // jquery test


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

}


export default app;