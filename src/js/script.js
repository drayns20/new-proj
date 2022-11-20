"use strict";

const numberOfFilms = prompt('Скільки фільмів ви вже переглянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the latest watch filmes?', ''),
      b = prompt('How you rate this film', ''),
      c = prompt('One of the latest watch filmes?', ''),
      d = prompt('How you rate this film', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);