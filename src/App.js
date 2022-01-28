import React, { useState } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Table from './components/Table/Table';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div id='main-container'>
      <Header />
      <SearchBox />
      <Table />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
