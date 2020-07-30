'use strict';

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//start();
//rememberMyFilms();
//detectPersonalLevel();
writeYourGenres();
showeMyDB(personalMovieDB.privat);

function start() {
    do {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");
    } 
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = +prompt("На сколько оцените его?", "0");
    
        if (a != null && a != '' && b != null && b != '' && a.length <= 50 && !isNaN(b)) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("Invalid argument!");
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель!");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман!!");
    } else {
        console.log("Произошла ошибка!");
    }
}

function showeMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}