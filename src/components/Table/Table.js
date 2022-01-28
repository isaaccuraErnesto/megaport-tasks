import React, { useState, useMemo } from 'react';
import TableData from './TableData';

const Table = () => {
  const [sortParams, setSortParams] = useState({ key: 'id', direction: 'asc' });

  const propertyNames = Object.keys(TableData[0]);

  const capitalisedPropertyNames = [];

  propertyNames.forEach((word) => {
    capitalisedPropertyNames.push(word.charAt(0).toUpperCase() + word.slice(1));
  });

  const sortedProducts = useMemo(() => {
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

    return products;
  }, [sortParams]);

  const requestSortParams = (key) => {
    let direction = 'asc';
    if (
      sortParams &&
      sortParams.key === key &&
      sortParams.direction === 'asc'
    ) {
      direction = 'des';
    }
    setSortParams({ key, direction });
  };

  const assignClass = (name) => {
    if (!sortParams) {
      return;
    }
    return sortParams.key === name ? sortParams.direction : undefined;
  };

  return (
    <div id='table-container'>
      <table id='table'>
        <caption>Products</caption>
        <thead>
          <tr>
            {propertyNames.map((title, index) => {
              return (
                <th
                  key={index}
                  onClick={() => requestSortParams(title)}
                  className={assignClass(title)}
                >
                  {capitalisedPropertyNames[index]}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product, index) => (
            <tr key={index}>
              {propertyNames.map((key, index) => {
                return <td key={index}>{product[key]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
