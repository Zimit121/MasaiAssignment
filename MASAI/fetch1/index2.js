let searchMovieButton = document.getElementById('searchMovieButton');
let movieName = document.getElementById('movieName');
let key = "8fa87be9";

searchMovieButton.addEventListener('click',function(){
    let movie = movieName.value;
    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        showMovieData(data)
    })
    .catch(error => {
        console.log(error);
    })
});


let cont = document.querySelector("body");
function showMovieData(data){
    let title = document.createElement("h1");
    title.innerText = data.Title;

    let year = document.createElement("h2");
    year.innerText = data.Year;

    let img = document.createElement("img");
    img.src = data.Poster;

    let runTime = document.createElement("h2");
    runTime.innerText = data.Runtime;

    let director = document.createElement("h2");
    director.innerText = data.Director

    cont.append(title,year,runTime,director,img)
}