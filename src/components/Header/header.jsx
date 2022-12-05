import React from 'react'
import './header.css'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

import { connect } from 'react-redux'
import { logOut } from '../../actions.js'

Header.propTypes = {
  navigateTo: PropTypes.func
}

export function Header (props) {

  const unauthenticate = () => {
    props.logOut()
  }

  return (
    <>
    <div className='header__wrapper'>
      <a href="#" className="header__logo">
        <img className="logo__img" src="logo.png" alt="Logo" />
        <img src="logo-text.png" alt="LoftTaxi" className="logo__text" />
      </a>
      <nav className="header__nav">
        <ul>
          <li>
            <button onClick={() => {props.navigateTo("map")}} className='header__nav-item'>Карта</button>
          </li>
          <li>
            <button onClick={() => {props.navigateTo("profile")}} className='header__nav-item'>Профиль</button>
          </li>
          <li>
            <Link to='/'>
              <button onClick={unauthenticate} className='header__nav-item'>Выйти</button>
            </Link>            
          </li>
        </ul>
      </nav>
    </div>
    </>
    
  )
}

export default connect(
  null,
  { logOut }
)(Header)