'use strict';
const numberOfFilms = +prompt("How many films have you already watched?", ""); 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {

    const a = prompt("What is the last movie you have watched ?", "");
    const b = prompt("From 1 to 5 how you would rate it?", "");

    if (a != null && a != "" && a.length < 50 && b != null && b != "" && b.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert("You have seen just a few movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("You are a classy films lover");
} else if (personalMovieDB.count >= 30) {
    alert("You are a real films lover");
} else {
    alert("Error");
}
console.log(personalMovieDB);
