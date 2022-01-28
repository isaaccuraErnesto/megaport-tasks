import React, { useState } from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Table from './components/Table/Table';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div id='main-container'>
      <Header />
      <Toolbar />
      <Table />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
