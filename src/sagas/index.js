import { spawn, all } from 'redux-saga/effects';
import StarWarsMovieSaga from './StarWarsMovieSaga';

export default function* root() {
  yield spawn(StarWarsMovieSaga)
}
