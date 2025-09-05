import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import movieReducer from './movieReducer';

export const reducers = combineReducers({
  movies: movieReducer,
  favorites: favoritesReducer,
});
 