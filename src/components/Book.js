import React from 'react';
import ReactDOM from 'react-dom';

function Books({ books }) {
  return (
    <div className="displaybook">
      {books}
    </div>
  );
}

export default Books;
