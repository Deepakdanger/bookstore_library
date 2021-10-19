import React from 'react';
import Select from 'react-select';

function BooksForm() {
  const options = [
    { value: 'action', label: 'Action' },
    { value: 'biography', label: 'Biography' },
    { value: 'history', label: 'History' },
    { value: 'horror', label: 'Horror' },
    { value: 'kids', label: 'Kids' },
    { value: 'learning', label: 'Learning' },
    { value: 'sci-fi', label: 'Sci-Fi' }
  ];
  return (
    <div className="booklist">
      <form>
        <input type="text" id="title" name="title" placeholder="Title of the book" />
        <Select options={options} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BooksForm;
