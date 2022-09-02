'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
	start: function (){
		personalMovieDB.count = +prompt("How many films have you already watched?", "");
	
		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("How many films have you already watched?", "");
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
	
			const a = prompt("What is the last movie you have watched ?", "").trim();
			const b = prompt("How you would rate it?", "");
		
			if (a != null && a != "" && a.length < 50 && b != null && b != "" && b.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log("done");
			} else {
				console.log("error");
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			alert("You have seen just a few movies");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert("You are a classy films lover");
		} else if (personalMovieDB.count >= 30) {
			alert("You are a real films lover");
		} else {
			alert("Error");
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function (){
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function () {

		for (let i = 1; i < 2; i++) {
			let genres = prompt(`Input your favorite genre separated by coma`).toLowerCase();
			if (genres === "" || genres == null){
				prompt("Input is incorrect or input is empty");
				i--;
			} else {
				personalMovieDB.genres = genres.split(",").map(item => item.trim()).filter(item => item !== "").sort();
			}
		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Your favorite genre number ${i + 1} is ${item}`);
		});
	}
};





