'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let count = 0,
    sizeTitle = 50;

while(count != personalMovieDB.count) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = +prompt("На сколько оцените его?", "0");

    if ((a.length > sizeTitle) || (a.length === 0) || (isNaN(b))) {
        alert("Invalid argument!");
    } 
    else {
        personalMovieDB.movies[a] = b;
        count++;
    }
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель!");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман!!");
} else {
    alert("Произошла ошибка!");
}

console.log(personalMovieDB);