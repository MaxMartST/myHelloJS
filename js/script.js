'use strict';
//1
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");
//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//3
let count = 0,
    sizeTitle = 50;

while(count != personalMovieDB.count)
{
    const a = prompt("Один из последних просмотренных фильмов?", "");
    const b = +prompt("На сколько оцените его?", "0");

    if ((a.length > sizeTitle) || (a.length === 0) || (isNaN(b)))
    {
        alert("Invalid argument!");
    } 
    else
    {
        personalMovieDB.movies[a] = b;
        count++;
    }
}

// const a = prompt("Один из последних просмотренных фильмов?", "");
// const b = +prompt("На сколько оцените его?", "0");
// const c = prompt("Один из последних просмотренных фильмов?", "");
// const d = +prompt("На сколько оцените его?", "0");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);