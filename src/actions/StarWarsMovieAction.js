import { createAction } from 'redux-actions';

export const MOVIE_DATA         = 'MOVIE_DATA';
export const MOVIE_DATA_SUCCESS = 'MOVIE_DATA_SUCCESS';
export const MOVIE_DATA_ERROR   = 'MOVIE_DATA_ERROR';

export const movieData          = createAction(MOVIE_DATA);
export const movieDataSuccess   = createAction(MOVIE_DATA_SUCCESS);
export const movieDataError     = createAction(MOVIE_DATA_ERROR);