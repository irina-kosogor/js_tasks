'use strict';

let numberOfFilms; 

function start(){
    numberOfFilms = +prompt("How many films have you already watched?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you already watched?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        const a = prompt("What is the last movie you have watched ?", "");
        const b = prompt("How you would rate it?", "");
    
        if (a != null && a != "" && a.length < 50 && b != null && b != "" && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("You have seen just a few movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("You are a classy films lover");
    } else if (personalMovieDB.count >= 30) {
        alert("You are a real films lover");
    } else {
        alert("Error");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {

    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre by number ${i}`);
    }
}

writeYourGenres();



