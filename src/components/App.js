import React from 'react';
import { Provider } from 'react-redux';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import store from '../reducers/index';

function App() {
  return (
    <Provider store={store}>
      <BooksForm />
      <BooksList />
    </Provider>
  );
}

export default App;
