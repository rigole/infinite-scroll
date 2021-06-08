const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photoArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;


// unsplash API parameters
const apiKey = 'y2EVDVf4pH34kHsagP5allFVk0D_1kx5EX_71LEwmWE';
const count = 30;
const urlAPI =  `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//check if all images were loaded
function imageLoaded() {
    console.log('image loaded');
    imagesLoaded++;
    if (imagesLoaded === totalImages){
        ready= true;
        console.log('ready =', ready);
    }
}


// Helper to set Attribute and create elements

//Get photos from unsplash API
function displayPhotos() {
    totalImages = photoArray.length;
    console.log('total images', totalImages);
    photoArray.forEach((photo)=> {
      // create <a> element link to unspleash
        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target', '_blank');

      // create <img> for photo
      const img = document.createElement('img');
      img.setAttribute('src', photo.urls.regular);
      img.setAttribute('alt', photo.alt_description);
      img.setAttribute('title', photo.alt_description);
      img.addEventListener('load', imageLoaded);


      //put <a> inside <img> and then put both inside the div image container
        item.appendChild(img);
        imageContainer.appendChild(item);

    });

    //img.addEventListener('lo', imageLoaded);

}

// Create Elements for Link,Photos, Add to DOM
async function getPhotos() {
    try{
        const response = await fetch(urlAPI);
        photoArray = await response.json();
        console.log(photoArray);
       displayPhotos();
    }catch (e) {
        
    }
}
// Check if scrolling near bottom, LOad More photos
/*window.addEventListener('scroll', =>{
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){

    }
});*/
getPhotos();