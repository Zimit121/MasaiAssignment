let root = document.getElementById('root');
let API_URL = `http://fakestoreapi.com/products/category/electronics`;


async function getData(URL){
    try {
        let rawData = await fetch(URL)
        let finalData = await rawData.json()
        return finalData;
    }
    catch (error){
        console.log(error)
    }
}

function DisplayData(productList) {

    productList.forEach(product => {
        let ProductCard = document.createElement("div");
        ProductCard.className = "product-card";

        let ProductImage = document.createElement("img");
        ProductImage.src = product.image;
        ProductImage.style.width = "500px";
        ProductImage.style.width = "80px"


        let ProductTitle = document.createElement("p");
        ProductTitle.textContent = product.title;

        let ProductPrice = document.createElement("p");
        ProductPrice.textContent = `Price : USD$ ${product.price}`

        let ProductCategory = document.createElement("p");
        ProductCategory.textContent = product.category

        // let ProductDescription = document.createElement("p");
        // ProductDescription.textContent = product.description;

        let ProductRating = document.createElement("p");
        ProductRating.textContent = `Rating : ${product.rating.rate}`;

        ProductCard.append(ProductImage, ProductTitle, ProductCategory, ProductPrice,
            ProductRating);
        root.append(ProductCard)
    });
}

async function init(){
    try {
        let productData = await getData(API_URL)
        DisplayData(productData);
    }
    catch (error){
        console.log(error);
    }
}

init()