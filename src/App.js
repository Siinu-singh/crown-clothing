import React from 'react';
import './App.css';
import HomePage from './components/pages/homePage';
import './components/pages/homePage.scss';
import { Routes, Route } from 'react-router-dom'; // Changed import
import Shop from './components/pages/shop/shop.jsx';
import Header from './components/header/header.jsx';
import SignInSignUp from './components/pages/sign-in-sign-up/sign-in-sign-up.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignInSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
