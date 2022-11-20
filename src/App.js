import React, { useState} from 'react';
import './App.css';

import AuthPage from './pages/login/authPage.jsx';
import Main from './pages/main/mainPage.jsx'

function App() {
  const [login, setLogin] = useState(false)

  return (
    <div className="App">
      {login ? <Main /> : <AuthPage setLogin={setLogin}/>}
    </div>
  )
}

export default App;
