import React from 'react';
import './App.css';
import HomePage from './components/pages/homePage';
import './components/pages/homePage.scss';
import { Routes, Route } from 'react-router-dom'; // Changed import
import Shop from './components/pages/shop/shop.jsx';
import Header from './components/header/header.jsx';
import SignInSignUp from './components/pages/sign-in-sign-up/sign-in-sign-up.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.util.js';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
      console.log('currentUser');
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render(){ 

    return (
    <div className="App">
      <Header  currentUser={this.state.currentUser}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignInSignUp />} />
      </Routes>
    </div>
  ); 
  }
   

} 
 


export default App;
