import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
  book: [
    { bookId: Math.random(), title: 'far from here', category: 'Kids' },
    { bookId: Math.random(), title: 'Earth is small', category: 'Kids' },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, newBook: action.payload };
    case REMOVE_BOOK:
      return state.filter((book) => book.bookId !== action.payload.bookId);
    default:
      return state;
  }
};
export default bookReducer;
