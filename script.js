// unsplash API parameters

const apiKey = 'Y_gvnN-EBXyNfj0SfCiFevAwImT0ehAvgvX06GHsDW0';
const count = 10;
const urlAPI =  `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos from unsplash API

async function getPhotos() {
    try{
        const response = await fetch(urlAPI);
        const data = await response.json();
        console.log(data);
        
    }catch (e) {
        
    }
}

getPhotos();