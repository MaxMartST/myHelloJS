'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let sizeTitle = 50;

for (let i = 0; i < 2; i++){
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = +prompt("На сколько оцените его?", "0");

    if (a != null && a != '' && b != null && b != '' && a.length > 50 && !isNaN(b)) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("Invalid argument!");
        i--;
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