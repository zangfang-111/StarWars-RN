import get from '../utils/request';
import { call, put, takeEvery } from 'redux-saga/effects';
import { 
  movieDataSuccess,
  movieDataError,
  MOVIE_DATA, 
} from '../actions/StarWarsMovieAction';

export function* movieData({ payload }) {
  try {
    const data = yield call(get, 'https://swapi.co/api/films/?format=json', payload );
    yield put(movieDataSuccess(data));
  } catch (error) {
    yield put(movieDataError(error.message));
  }
}

export default function* saga() {
  yield takeEvery(MOVIE_DATA , movieData);
}
