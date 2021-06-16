// @Zheng
// @followed standard

import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import {
  movieDataSuccess,
  movieDataError
} from '../actions/StarWarsMovieAction';

const initialState = fromJS({
  flash: null,
  getMovieData: null
});

const StarWarsMovieReducer = handleActions(
  {
    [movieDataSuccess](state, { payload }) {
      return state
      .set('flash', { status: 'success' })
      .set('getMovieData', payload);
    },
    [movieDataError](state, { payload }) {
      return state
      .set('flash', { status: 'error', msg: payload });
    }
  },
  initialState,
);

export default StarWarsMovieReducer;