let root = document.getElementById('root');
let API_URL = `http://fakestoreapi.com/products`;


async function getData(URL){
    try {
        let rawData = await fetch(URL)
        let finalData = await rawData.json()
        return finalData
    }
    catch (error){
        console.log(error)
    }
  
}

async function init(){
    try {
        let productData = await getData(API_URL)
        console.log(productData);
    }
    catch (error){
        console.log(error);
    }
}

init()