import React from 'react'
import './App.css'

import AuthPage from './pages/login/authPage.jsx'
import Main from './pages/main/mainPage.jsx'

import {connect} from 'react-redux'

export function App(props) {

  return (
    <div className="App"> 
      { props.isLoggedIn ? <Main/> : <AuthPage/> }
    </div>
  )
}

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App)
