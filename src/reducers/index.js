import { createStore, combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});

const initialState = {
  books: [
    { bookId: Math.random().toString(), title: 'far from here', category: 'Kids' },
    { bookId: Math.random().toString(), title: 'Earth is small', category: 'Kids' },
  ],
  filter: 'All',
};

const store = createStore(rootReducer, initialState);

export default store;
