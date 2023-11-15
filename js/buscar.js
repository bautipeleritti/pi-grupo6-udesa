let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let formulario = queryStringObj.get("q");


 let datoBuscado = document.querySelector(".result-titulo");
datoBuscado.innerHTML += `Resultados para ${formulario}`


let url = ` https://api.themoviedb.org/3/search/multi?api_key=7a176cc95147be6e695be2faf0e8ff9c&query=${formulario}`;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        let peliculasData = data.results;
        let peliculas = document.querySelector(".atributoflex3")
        console.log(data)

        for (let i = 0; i < peliculasData.length; i++) {
            peliculas.innerHTML +=

                `<article>
            <a class= "letrablanca" href="./detallepelicula.html?id=${peliculasData[i].id}"><img src="https://image.tmdb.org/t/p/w342/${peliculasData[i].poster_path}" alt="peliculas imagen"></a>
            <h4><a class= "letrablanca" href="./detallepelicula.html?id=${peliculasData[i].id}">Pelicula:${peliculasData[i].title}</a></h4>
            </article>
            `
            console.log(peliculasData[i])

        }
    

    let urlseries = `https://api.themoviedb.org/3/search/tv?api_key=7a176cc95147be6e695be2faf0e8ff9c&query=${formulario}`

        fetch(urlseries)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let seriesData = data.results;
                let series = document.querySelector(".atributoflex2")
                console.log(data)

                for (let i = 0; i < seriesData.length; i++) {
                    series.innerHTML +=
                        `<article>
      <a class= "letrablanca" href="./detalleserie.html?id=$ {seriesData[i].id}"><img src="https://image.tmdb.org/t/p/w342/${seriesData[i].poster_path}" alt="series imagen"></a>
      <h4><a class= "letrablanca" href="./detalleserie.html?id=${seriesData[i].id}">Serie:${seriesData[i].name}</a></h4>
      </article>`
                    console.log(seriesData[i])
                }
            })




    })
