import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from '../actions/favoritesActions.js';

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAVORITE:
      if (state.favorites.find((item) => item.id === action.payload.id)) {
        return state;
      } else {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
