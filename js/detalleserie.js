let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

let urlparams = new URLSearchParams(location.search);

let qsIdSerie= urlparams.get('id');

let recomendadas = `https://api.themoviedb.org/3/tv/${qsIdSerie}/recommendations?api_key=${acaVaLaAPIKey}`;
let DetalleSerie= `https://api.themoviedb.org/3/tv/${qsIdSerie}?api_key=${acaVaLaAPIKey}`;
let qsRecomendadas = document.querySelector('#recomendador');

let trailerSeries = `https://api.themoviedb.org/3/tv/${qsIdSerie}/videos?api_key=${acaVaLaAPIKey}`;
let sectionTrailerSeries = document.querySelector('#trailerseriee')


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

genero = document.querySelector('#generoid');
let contenido = "";

    
for (let index = 0; index < data.genres.length; index++) {

    contenido += `<a class="cienciaficcion" href="./detallesgeneros.html?id=${data.genres[index].id}">${data.genres[index].name}</a>` 

   }
   genero.innerHTML = contenido;

} )




.catch(function(error){

console.log(error);


})


fetch(recomendadas)

    .then(function (res) {

        return res.json();

    })

    .then(function (data) {
        console.log(data);

        let MiData = data.results;
        let contenido = "";
          
            
        for (let i=0; i< 5; i ++ ){
            
            
            
            contenido += `<div class="caja"><a href="./detalleserie.html?id=${MiData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${MiData[i].poster_path} 
            " class="pulp">
            <h3 class="titulopeli">${MiData[i].name + " " + MiData[i].first_air_date}</h3>
            </a></div>`

            }
            
            
            qsRecomendadas.innerHTML = contenido;
            
            } )


    .catch(function (error) {

        console.log(error);


    })




   


    function ocultarMostrarDiv() {
        
    
        if (qsRecomendadas.style.display === "none" || qsRecomendadas.style.display === "") {
          qsRecomendadas.style.display = "flex";
        } else {
          qsRecomendadas.style.display = "none";
        }}



        //TRAILER SERIES

        fetch(trailerSeries)

        .then(function (res) {
    
            return res.json();
    
        })
    
        .then(function (data) {
    console.log(data);
            let MiData = data.results;
            let contenido = "";

            console.log(MiData);
            for (let i = 0; i < MiData.length; i++) {
                
            contenido = `<h2 id="trailerseriee">Trailer: https://www.youtube.com/watch?v=${MiData[i].key} </h2>`
            }
            
                
           
                
            sectionTrailerSeries.innerHTML = contenido;
                
                } )
    
    
        .catch(function (error) {
    
            console.log(error);
    
    
        })
    