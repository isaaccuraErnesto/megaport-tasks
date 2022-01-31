import React from 'react';

const Table = ({
  sortedProducts,
  searchResults,
  sortParams,
  setSortParams,
  propertyNames,
  capitalisedPropertyNames,
}) => {
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
        <caption id='table-caption'>Inventory</caption>
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
          {(searchResults.length < 1 ? sortedProducts : searchResults).map(
            (product, index) => (
              <tr key={index}>
                {propertyNames.map((key, index) => {
                  return <td key={index}>{product[key]}</td>;
                })}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
