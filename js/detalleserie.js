let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

let urlparams = new URLSearchParams(location.search);

let qsIdSerie= urlparams.get('id');





let DetalleSerie= `https://api.themoviedb.org/3/tv/${qsIdSerie}?api_key=${acaVaLaAPIKey}`


fetch(DetalleSerie)

.then(function(res){

return res.json();

})

.then(function(data){

console.log(data);

let imagen = document.querySelector('#imagenserie');

imagen.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path

let titulo = document.querySelector('#Titulo');

titulo.innerHTML = data.name


let sinopsis = document.querySelector('#sinopsis');
sinopsis.innerHTML = data.overview


fechaestreno = document.querySelector('#fechaestrenoid');
fechaestreno.innerHTML = 'Fecha de estreno:' + ' ' + data.first_air_date

valoracion = document.querySelector('#valoracion');
valoracion.innerHTML = 'Valoración: ' + data.vote_average + ' / 10'

    
for (let index = 0; index < data.genres.length; index++) {
    
    

    genero = document.querySelector('#generoid');
    genero.innerHTML += ' ' + data.genres[index].name
    
    }
    
} )




.catch(function(error){

console.log(error);


})
