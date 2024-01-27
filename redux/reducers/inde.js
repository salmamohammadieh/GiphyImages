import favoritesReducer from './favoritesReducer';
import authenticationReducer from './authenticationReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
