'use strict';
const numberOfFilms = +prompt("How many films have you already watched?", ""); //унарный плюс

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("What is the last movie you have watched ?", ""),
      b = prompt("From 1 to 5 how you would rate it?", ""),
      c = prompt("What is the last movie you have watched ?", ""),
      d = prompt("From 1 to 5 how you would rate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);