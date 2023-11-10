let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

let urlparams = new URLSearchParams(location.search);

let qsIdPelicula= urlparams.get('id');





let DetallePelicula= `https://api.themoviedb.org/3/movie/${qsIdPelicula}?api_key=${acaVaLaAPIKey}`



fetch(DetallePelicula)

.then(function(res){

return res.json();

})

.then(function(data){

console.log(data);

let imagen = document.querySelector('#imagen');

imagen.src = "https://image.tmdb.org/t/p/w500/" + data.poster_path

let titulo = document.querySelector('#Titulo');

titulo.innerHTML = data.title


let sinopsis = document.querySelector('#sinopsis');
sinopsis.innerHTML = data.overview


contenido = " "

contenido = `<img id="imagen" class="detallestarwars" src="https://image.tmdb.org/t/p/w500/" + ${data.poster_path}" alt="">
    
    
</div>


<div class="textosdetalle">


    <h2 id="Titulo" class="titulopeliculadetalle">Metegol

    </h2>
    <h4 class="sinopsis">Sinopsis:</h4>
    <h4 id='sinopsis' class="sinopsis">

        Amadeo es un chico tímido pero virtuoso que deberá enfrentarse al más temible rival sobre el campo de
        fútbol: el Crack. En su duelo, el protagonista contará con la inestimable ayuda de unos jugadores de
        futbolín liderados por el Capi, su carismático extremo derecho. Amadeo y los jugadores se embarcarán en
        una gran aventura con el fútbol como telón de fondo.
    </h4>



    <h3 class="fechaestreno"> Fecha de estreno: 31/7/1980 </h3>

    <h3 class="valoracion">Valoración: 8,1/10

        Duracion: 2h 4m

    </h3>


    <h3 class="genero">Genero: <a href="./generos.html" class="cienciaficcion">Familiar</a>

    </h3>

    <ul>

        <a href="./favoritos.html">
            <li class="favoritos">Añadir a Favoritos ♡ </li>
        </a>

</div>
</section>
`


document.querySelector()



} )




.catch(function(error){

console.log(error);


})
