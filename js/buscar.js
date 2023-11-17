let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let formulario = queryStringObj.get("q");


 let datoBuscado = document.querySelector(".resultadosbusqueda");
datoBuscado.innerHTML += ` ${formulario}`


let url = ` https://api.themoviedb.org/3/search/movie?api_key=7a176cc95147be6e695be2faf0e8ff9c&query=${formulario}`;



fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        let peliculasData = data.results;
        let peliculas = document.querySelector(".contenedor")
        console.log(data)
if (peliculasData.length === 0) {
    alert('INGRESE UN TERMINO VALIDO')
}
else {
        for (let i = 0; i < 5; i++) {
            peliculas.innerHTML +=

            `
            <div class="contenedor">
            <h2 class="titulopadre"></h2>

    
        
            
            <div class="caja2"><a href="./detallepelicula.html?id=${peliculasData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${peliculasData[i].poster_path} 
            " class="pulp">
            <h3 class="titulopeli">${peliculasData[i].title}</h3>
            </a></div></div>`


        }
    
    }
    })
