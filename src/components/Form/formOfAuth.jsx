import React, { useContext } from 'react'
import { AuthContext } from '../../AuthContext.jsx'
import './form.css'
import Input from '@mui/material/Input'
import PropTypes from 'prop-types'

FormOfAuth.propTypes = {
  setForm: PropTypes.func
}

export default function FormOfAuth(props) {

  const {logIn, isLoggedIn} = useContext(AuthContext)

  const authenticate = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    console.log(isLoggedIn)
    logIn(email.value, password.value).catch(error => {alert('Неправильные учетные данные')})
    console.log(isLoggedIn)
  }

    return (
      <>
        <div className="auth__form form__wrapper">
        <form onSubmit={authenticate} className="form auth-form">
          <h3 className="form__title auth-form__title">Войти</h3>

          <label htmlFor="email" className="form__span">Email</label>
          <Input id="email" name="email" type="email" className="form__input" placeholder="mail@mail.ru"/>

          <label htmlFor="password" className="form__span">Пароль</label>
          <Input id="password" name="password" type="password" className="form__input" placeholder="*********"/>

          <span className="subtitle subtitle-forgot">Забыли пароль?</span>
          <button type="submit" className="form__btn btn">Войти</button>

          <span className="subtitle">Новый пользователь? <a onClick={() => props.setForm('reg')} href='#' className='subtitle-link'>Регистрация</a></span>
        </form>
      </div>
    </>
    )   
} 
