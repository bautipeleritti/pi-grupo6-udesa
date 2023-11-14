//GENEROS DE LAS PELICULAS INFO
let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

let generos = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`

let generosid = document.querySelector("#generosid");

let generosid2= document.querySelector("#generosid2");

let generosid3 = document.querySelector("#generosid3");

//GENEROS DE LAS SERIES INFO
let generosseries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`

let genseries = document.querySelector("#genseries")
let genseries2 = document.querySelector("#genseries2")
let genseries3 = document.querySelector("#genseries3")


// 1ER FETCH PELICULAS
    fetch(generos)

    .then(function (res) {

        return res.json();

    })

    .then(function (data) {

        
        //console.log(data);

        miData = data.genres
        contenido = " "



        for (let i = 0; i < 7 ; i++ ) {

       // console.log(miData[i].name);

        contenido += 
         `<a href="./detallesgeneros.html"><li class="itemgeneros">${miData[i].name}</li></a>`


        generosid.innerHTML = contenido

    }



    })


    .catch(function (error) {
        
        console.log(error);

    })



// 2DO FETCH PELICULAS


    fetch(generos)

    .then(function (res) {

        return res.json();

    })

    .then(function (data) {

        
        //console.log(data);

        miData = data.genres
        contenido = " "



        for (let i = 7; i < 13 ; i++ ) {

        //console.log(miData[i].name);

        contenido += 
         `<a href="./detallesgeneros.html"><li class="itemgeneros">${miData[i].name}</li></a>`


        generosid2.innerHTML = contenido

    }



    })


    .catch(function (error) {
        
        console.log(error);

    })





// 3ER FETCH PELICULAS

fetch(generos)

.then(function (res) {

    return res.json();

})

.then(function (data) {

    
    //console.log(data);

    miData = data.genres
    contenido = " "



    for (let i = 13; i < 19 ; i++ ) {

    //console.log(miData[i].name);

    contenido += 
     `<a href="./detallesgeneros.html"><li class="itemgeneros">${miData[i].name}</li></a>`


    generosid3.innerHTML = contenido

}



})


.catch(function (error) {
    
    console.log(error);

})


// PRIMER FETCH SERIES
fetch(generosseries)

.then(function (res) {

    return res.json();

})

.then(function (data) {

    
    console.log(data);

    miData = data.genres
    contenido = " ";



    for (let i = 0; i < 6 ; i++ ) {

    console.log(miData[i].name);

    contenido += 
     `<a href="./detallesgeneros.html"><li class="itemgeneros">${miData[i].name}</li></a>`


    genseries.innerHTML = contenido

}



})


.catch(function (error) {
    
    console.log(error);

})


//SEGUNDO FETCH SERIES
fetch(generosseries)

.then(function (res) {

    return res.json();

})

.then(function (data) {

    
    console.log(data);

    miData = data.genres
    contenido = " ";



    for (let i = 6; i < 12 ; i++ ) {

    console.log(miData[i].name);

    contenido += 
     `<a href="./detallesgeneros.html"><li class="itemgeneros">${miData[i].name}</li></a>`


    genseries2.innerHTML = contenido

}



})


.catch(function (error) {
    
    console.log(error);

})


//TERCER FETCH SERIES
fetch(generosseries)

.then(function (res) {

    return res.json();

})

.then(function (data) {

    
    console.log(data);

    miData = data.genres
    contenido = " ";



    for (let i = 12; i < 17 ; i++ ) {

    console.log(miData[i].name);

    contenido += 
     `<a href="./detallesgeneros.html"><li class="itemgeneros">${miData[i].name}</li></a>`


    genseries3.innerHTML = contenido

}



})


.catch(function (error) {
    
    console.log(error);

})