import { createStore, combineReducers } from 'redux';
import bookReducer from './books';

const rootReducer = combineReducers({
  books: bookReducer,
});

const initialState = {
  books: [
    { bookId: Math.random().toString(), title: 'far from here', category: 'Kids' },
    { bookId: Math.random().toString(), title: 'Earth is small', category: 'Kids' },
  ],
};

const store = createStore(rootReducer, initialState);

export default store;
