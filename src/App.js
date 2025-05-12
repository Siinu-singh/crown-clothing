import React from 'react';
import './App.css';
import HomePage from './components/pages/homePage';
import './components/pages/homePage.scss';
import { Routes, Route } from 'react-router'; 
import Shop from './components/pages/shop/shop.jsx';
import Header from './components/header/header.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
