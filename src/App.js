import React, { useEffect} from 'react';
import './App.css';

import { AuthPage } from './pages/login/authPage.jsx';
import { WithAuth } from './AuthContext.jsx';
import { MainWithAuth } from './pages/main/mainPage.jsx'

function App(props) {

  return (
    <div className="App">      
      { props.isLoggedIn? <MainWithAuth /> : <AuthPage /> }
    </div>
  )
}

export default WithAuth(App);
