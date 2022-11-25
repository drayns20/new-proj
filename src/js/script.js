"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
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




function rememberMyFilms () {
  for (let i = 0; i < 2; i++) {
    const a = prompt('One of the latest watch filmes?', ''),
          b = prompt('How you rate this film', '');

          if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
          } else {
            console.log('error');
            i--;
          }
  }
}
  rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
    console.log('watched not too much filmes');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('you are classic film fan');
  } else if (personalMovieDB.count >=30) {
    console.log('you are kojima san');
  } else {
    console.log('some shit happens');
  }
}
  detectPersonalLevel();


function showMyDB (hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB (personalMovieDB.privat);

function writeYourGenres () {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Your favorite genre under number ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();