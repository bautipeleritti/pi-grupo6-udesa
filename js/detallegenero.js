let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";
let urlparams = new URLSearchParams(location.search);
let qsIdGenero = urlparams.get('id');





// Endpoints 
const discoverEndpoint = "https://api.themoviedb.org/3/discover/movie";
const discoverEndpointSeries = 'https://api.themoviedb.org/3/discover/tv';


// IDs
qsIddiv = document.querySelector('#detallesgeneros_id')

// Construye la URL de la solicitud para obtener películas recomendadas para el género seleccionado
const urlPeliculasRecomendadas = `${discoverEndpoint}?api_key=${acaVaLaAPIKey}&with_genres=${qsIdGenero}`;
const urlSeriesRecomendadas = `${discoverEndpointSeries}?api_key=${acaVaLaAPIKey}&with_genres=${qsIdGenero}`;



// Realiza la solicitud para obtener películas recomendadas
fetch(urlPeliculasRecomendadas)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        miData = data.results;
        contenido = ' ';


    
        for (let i = 0; i < 5; i++) {

            
        contenido +=   
        `<section class="sectionpadrepelis">
        <div class="contenedor">
            <h2 class="titulopadre"></h2>
        <div class="caja"><a href="./detallepelicula.html?id=${miData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" class="pulp">
         <h3 class="titulopeli">${miData[i].title}</h3>
         
         </div>


         </section>
         `




        }



qsIddiv.innerHTML = contenido;


    })
    .catch(function (error) {
        console.log(error);
    });



// Realiza la solicitud para obtener series recomendadas


fetch(urlSeriesRecomendadas)



.then(function (res) {
    return res.json();



})




.then(function (data) {
    console.log(data);
    miData = data.results;
    contenido = ' ';

    for (let i = 0; i < 5; i++) {

    contenido +=   
    `<section class="sectionpadrepelis">
    <div class="contenedor">
        <h2 class="titulopadre"></h2>
<div class="caja"><a href="./detallepelicula.html?id=${miData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" class="pulp">
     <h3 class="titulopeli">${miData[i].name}</h3>
     
     </div>


     </section>
     `




    }



qsIddiv.innerHTML = contenido;


})
.catch(function (error) {
    console.log(error);
});
