import { combineReducers } from 'redux';
import alertReducer from './AlertReducer';
import booksReducer from './BooksReducer';
import cartReducer from './CartReducer';
import searchReducer from './SearchReducer';

export const rootReducer = combineReducers({
  booksReducer,
  cartReducer,
  alertReducer,
  searchReducer
});
