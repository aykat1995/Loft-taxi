import React from 'react'
import { AuthContext } from '../../AuthContext.jsx'
import './header.css'
import PropTypes from 'prop-types'

Header.propTypes = {
  navigateTo: PropTypes.func
}

export default function Header (props) {

  const {logOut} = React.useContext(AuthContext)

  const unauthenticate = () => {
    console.log('выход')
    logOut()
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
            <button onClick={unauthenticate} className='header__nav-item'>Выйти</button>
          </li>
        </ul>
      </nav>
    </div>
    </>
    
  )
}