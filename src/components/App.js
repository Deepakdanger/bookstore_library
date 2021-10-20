import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';


function App() {
  return (
    <div className="app">
      <BooksForm />
      <BooksList />
    </div>
  );
}

export default App;
