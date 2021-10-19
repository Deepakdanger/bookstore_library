import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_BOOK:
        return { ...state, newBook: action.payload };
      case REMOVE_BOOK:
        return state.filter(book => book.bookId !== action.payload.bookId);
      default:
        return state;
    }
  };
  export default bookReducer;