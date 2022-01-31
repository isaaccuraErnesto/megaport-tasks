import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Table from './components/Table/Table';
import Form from './components/Form';
import Footer from './components/Footer';
import TableData from './components/Table/TableData';

function App() {
  const [sortParams, setSortParams] = useState({ key: 'id', direction: 'asc' });
  const [productList, setProductList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const propertyNames = Object.keys(TableData[0]);

  const capitalisedPropertyNames = [];

  propertyNames.forEach((word) => {
    capitalisedPropertyNames.push(word.charAt(0).toUpperCase() + word.slice(1));
  });

  useMemo(() => {
    const products = [...TableData];

    if (sortParams !== null) {
      products.sort((a, b) => {
        if (a[sortParams.key] < b[sortParams.key]) {
          return sortParams.direction === 'asc' ? -1 : 1;
        }
        if (a[sortParams.key] > b[sortParams.key]) {
          return sortParams.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    setProductList(products);
  }, [sortParams]);

  return (
    <div id='main-container'>
      <Header />
      <SearchBox
        sortedProducts={productList}
        setSearchResults={setSearchResults}
      />
      <Table
        sortedProducts={productList}
        searchResults={searchResults}
        sortParams={sortParams}
        setSortParams={setSortParams}
        propertyNames={propertyNames}
        capitalisedPropertyNames={capitalisedPropertyNames}
      />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
