"use strict";

class Multimedia {
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    setInicio() {
        return console.log("Este método es para realizar un cambio en la URL del video");
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;

    }

    playMultimedia() {
        const iframe = document.getElementById(this.id)
        iframe.setAttribute("src", this.url)
    }
    setInicio(time) {
        this._url += `?start=${time}`
    }
}

const reproductorMusica = new Reproductor("https://www.youtube.com/watch?v=0EXvnwGb8gU", "iframe-musica")
const reproductorPeliculas = new Reproductor("", "iframe-peliculas")
const reproductorSeries = new Reproductor("https://www.youtube.com/watch?v=xYNJqFej374", "iframe-series")

reproductorMusica.setInicio(120);
reproductorPeliculas.setInicio(60);
reproductorSeries.setInicio(180);


const headingOne = document.getElementById("headingOne");
headingOne.addEventListener("click", function (){
    return reproductorMusica.playMultimedia()
})

const headingTwo = document.getElementById("headingTwo");
headingTwo.addEventListener("click", function (){
    return reproductorPeliculas.playMultimedia()
})

const headingThree = document.getElementById("headingThree");
headingThree.addEventListener("click", function (){
    return reproductorSeries.playMultimedia()
})
