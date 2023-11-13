let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

let generos = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`

let generosid = document.querySelector("#generosid");

let generosid2= document.querySelector("#generosid2");

let generosid3 = document.querySelector("#generosid3");



// 1ER FETCH
    fetch(generos)

    .then(function (res) {

        return res.json();

    })

    .then(function (data) {

        
        console.log(data);

        miData = data.genres
        contenido = " "



        for (let i = 0; i < 7 ; i++ ) {

        console.log(miData[i].name);

        contenido += 
         `<a href="./detallesgeneros.html"><li class="itemgeneros">${miData[i].name}</li></a>`


        generosid.innerHTML = contenido

    }



    })


    .catch(function (error) {
        
        console.log(error);

    })



// 2DO FETCH


    fetch(generos)

    .then(function (res) {

        return res.json();

    })

    .then(function (data) {

        
        console.log(data);

        miData = data.genres
        contenido = " "



        for (let i = 7; i < 13 ; i++ ) {

        console.log(miData[i].name);

        contenido += 
         `<a href="./detallesgeneros.html"><li class="itemgeneros">${miData[i].name}</li></a>`


        generosid2.innerHTML = contenido

    }



    })


    .catch(function (error) {
        
        console.log(error);

    })





// 3ER FETCH



fetch(generos)

.then(function (res) {

    return res.json();

})

.then(function (data) {

    
    console.log(data);

    miData = data.genres
    contenido = " "



    for (let i = 13; i < 19 ; i++ ) {

    console.log(miData[i].name);

    contenido += 
     `<a href="./detallesgeneros.html"><li class="itemgeneros">${miData[i].name}</li></a>`


    generosid3.innerHTML = contenido

}



})


.catch(function (error) {
    
    console.log(error);

})
