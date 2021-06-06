const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photoArray = [];
// unsplash API parameters
const apiKey = 'y2EVDVf4pH34kHsagP5allFVk0D_1kx5EX_71LEwmWE';
const count = 10;
const urlAPI =  `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos from unsplash API
function displayPhotos() {
    photoArray.forEach((photo)=>{
      // create <a> element link to unspleash
        const item = document.createElement('a');
        item.setAttribute('href',photo.link.html);
        item.setAttribute('target', '_blank');

      // create <img> for photo
      const img = document.createElement('img');
      img.setAttribute('src', photo.urls.regular);
      img.setAttribute('alt', photo.alt_description);
      img.setAttribute('title', photo.alt_description);
    });
}
// Create Elements for Link,Photos, Add to DOM
async function getPhotos() {
    try{
        const response = await fetch(urlAPI);
        photoArray = await response.json();
        //console.log(photoArray);
        displayPhotos();
    }catch (e) {
        
    }
}

getPhotos();