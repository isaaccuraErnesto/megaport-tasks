import React from 'react';

const SearchBox = ({ sortedProducts, setSearchResults }) => {
  const searchProducts = (e) => {
    e.preventDefault();
    if (e.target.value !== '') {
      const matchingProducts = sortedProducts.filter((product) => {
        return Object.values(product)
          .join(' ')
          .toLocaleLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setSearchResults(matchingProducts);
    } else {
      setSearchResults(sortedProducts);
    }
  };

  return (
    <div id='search-box-container'>
      <input
        type='text'
        id='search-box'
        name='search-box'
        placeholder='Search'
        onChange={searchProducts}
      />
    </div>
  );
};

export default SearchBox;
