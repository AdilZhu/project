"use strict"
const numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "");


const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false





};

const a = prompt('Один из просмотренных фильмов', ''),
      b = prompt('Оцените фильм', ''),
      c = prompt('Один из просмотренных фильмов', ''),
      d = prompt('Оцените фильм', '');



personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);