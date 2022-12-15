import React from 'react'
import './App.css'

import Unauthorized from './pages/login/Unauthorized.jsx'
import Authorized from './pages/main/Authorized.jsx'

import {connect} from 'react-redux'
import { Route } from 'react-router-dom'

export function App(props) {

  return (
    <div className="App"> 
      { props.isLoggedIn ? <Authorized/> : <Route exact path='/' component={Unauthorized}/> }
    </div>
  )
}

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App)
