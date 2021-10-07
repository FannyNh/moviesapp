import { combineReducers } from 'redux';
import moviesReducer from './movies.Reducer';
import movieReducer from './movie.Reducer';
import castReducer from './cast.Reducer';

export default combineReducers({
    moviesReducer,
    movieReducer,
    castReducer
  });