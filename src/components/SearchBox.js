import React from 'react';

const SearchBox = () => {
  return (
    <div id='search-box-container'>
      <input
        type='text'
        id='search-box'
        name='search-box'
        placeholder='Search'
      />
    </div>
  );
};

export default SearchBox;
