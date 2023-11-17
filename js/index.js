let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";
let urlPelisPopulares=`https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`;
let urlSeriesPopulares= `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`;
let urlPeliculasMejorCalificadas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`



let PeliculasMasVistas = document.querySelector('#PeliculasMasVistas');
let SeriesMasVistas = document.querySelector('#SeriesMasVistas');
let PeliculasMejorCalificadas = document.querySelector('#PeliculasMejorCalificadas')


//Primer Fetch
fetch(urlPelisPopulares)

.then(function(res){

return res.json();

})

.then(function(data){
let MiData = data.results;
let contenido = "";


for (let i=0; i< 5; i ++ ){

    console.log(MiData[i]);

contenido += `<div class="caja2"><a href="./detallepelicula.html?id=${MiData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${MiData[i].poster_path} 
" class="pulp">
<h3 class="titulopeli">${MiData[i].title + " " + MiData[i].release_date}</h3>
</a></div>`
}


PeliculasMasVistas.innerHTML = contenido;

} )



.catch(function(error){

console.log(error);


})



//Segundo fetch


fetch(urlSeriesPopulares)

.then(function(res){

return res.json();

})

.then(function(data){

let MiData = data.results;
let contenido = "";
console.log(MiData);

for (let i=0; i< 5; i ++ ){



contenido += `<div class="caja"><a href="./detalleserie.html?id=${MiData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${MiData[i].poster_path} 
" class="pulp">
<h3 class="titulopeli">${MiData[i].name + " " + MiData[i].first_air_date}</h3>
</a></div>`
}


SeriesMasVistas.innerHTML = contenido;

} )



.catch(function(error){

console.log(error);


})


// 3 fetch

fetch(urlPeliculasMejorCalificadas)

.then(function(res){

return res.json();

})

.then(function(data){

let MiData = data.results;
let contenido = "";


for (let i=0; i< 5; i ++ ){



contenido += `<div class="caja"><a href="./detallepelicula.html?id=${MiData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${MiData[i].poster_path} 
" class="pulp">
<h3 class="titulopeli">${MiData[i].title + " " + MiData[i].release_date}</h3>
</a></div>`
}


PeliculasMejorCalificadas.innerHTML = contenido;

} )



.catch(function(error){

console.log(error);


})

// loader 

setTimeout(function() {
    document.getElementById("loader").style.display = "none"; // Oculta el loader
    document.getElementById("contenido").style.display = "block"; // Muestra el contenido
  }, 3000);