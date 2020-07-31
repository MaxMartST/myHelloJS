'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        do {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "0");
        } 
        while(this.count == '' || this.count == null || isNaN(this.count));
    },
    writeYourGenres: function() {

        while(true) {
            let genres = prompt(`Введите любимые жанры через пробел`).toLowerCase();
            
            if (genres === '' || genres == null) {
                console.log('Некорректные данные!'); 
            } else {
                this.genres = genres.split(' ');
                this.genres.sort();
                break;
            }
        }

        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++){
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                  b = +prompt("На сколько оцените его?", "0");
        
            if (a != null && a != '' && b != null && b != '' && a.length <= 50 && !isNaN(b)) {
                this.movies[a] = b;
                console.log("done");
            } else {
                console.log("некорректный агрумент!");
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов!");
        } else if (this.count >= 10 && this.count <= 30) {
            console.log("Вы классический зритель!");
        } else if (this.count > 30) {
            console.log("Вы киноман!!");
        } else {
            console.log("Произошла ошибка!");
        }
    },
    showeMyDB: function showeMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};