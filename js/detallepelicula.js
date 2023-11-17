let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

let urlparams = new URLSearchParams(location.search);

let qsIdPelicula = urlparams.get('id');

let qsRecomendadas = document.querySelector('#recomendador')

let DetallePelicula = `https://api.themoviedb.org/3/movie/${qsIdPelicula}?api_key=${acaVaLaAPIKey}`
let recomendadas = `https://api.themoviedb.org/3/movie/${qsIdPelicula}/recommendations?api_key=${acaVaLaAPIKey}`;

let trailer = `https://api.themoviedb.org/3/movie/${qsIdPelicula}/videos?api_key=${acaVaLaAPIKey}`
let sectiontrailer = document.querySelector('#trailerr')
fetch(DetallePelicula)

    .then(function (res) {

        return res.json();

    })

    .then(function (data) {


        let imagen = document.querySelector('#imagen');
        imagen.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path

        let titulo = document.querySelector('#Titulo');
        titulo.innerHTML = data.title

        let sinopsis = document.querySelector('#sinopsis');
        sinopsis.innerHTML = data.overview

        fechaestreno = document.querySelector('#fechaestrenoid');
        fechaestreno.innerHTML = 'Fecha de estreno:' + ' ' + data.release_date

        valoracion = document.querySelector('#valoracion');
        valoracion.innerHTML = 'Valoración: ' + data.vote_average + ' / 10'

        genero = document.querySelector('#generoid');
        let contenido = "";

        for (let index = 0; index < data.genres.length; index++) {

         contenido += `<a class="cienciaficcion" href="./detallesgeneros.html?id=${data.genres[index].id}">${data.genres[index].name}</a>` 

        }
        genero.innerHTML = contenido;

    })




    .catch(function (error) {

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
            
            
            
            contenido += `<div class="caja"><a href="./detallepelicula.html?id=${MiData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${MiData[i].poster_path} 
            " class="pulp">
            <h3 class="titulopeli">${MiData[i].title + " " + MiData[i].release_date}</h3>
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



        fetch(trailer)

    .then(function (res) {

        return res.json();

    })

    .then(function (data) {
        console.log(data);

        let MiData = data.results;
        let contenido = "";
        for (let i = 0; i < MiData.length; i++) {
            
        contenido = `<h2 id="trailerr">Trailer: https://www.youtube.com/watch?v=${MiData[i].key} </h2>`
        }
        
            
       
            
        sectiontrailer.innerHTML = contenido;
            
            } )


    .catch(function (error) {

        console.log(error);


    })
