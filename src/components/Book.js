import React from 'react';
import ReactDOM from 'react-dom';

function Books({ books }) {
    const { bookId, title, category } = books;
  return (
    <div className="displaybook">
      <div className="displaybook_id">
      {bookId}
      </div>
      <div className="displaybook_name">
      {title}
      </div>
      <div className="displaybook_category">
      {category}
      </div>
    </div>
  );
}

export default Books;
