import React from 'react'
import './form.css'
import PropTypes from 'prop-types'
import Input from '@mui/material/Input'

import { connect } from 'react-redux'
import { authenticate, registration } from '../../actions.js'

FormOfReg.propTypes = {
  setForm: PropTypes.func
}

export default function FormOfReg(props) {

  const registrate = (event) => {
    event.preventDefault();

    const {email, name, surname, password} = event.target;
    props.registration(email.value, password.value, name.value, surname.value )
  }

  return (
    <div className="auth__form form__wrapper">
      <form onSubmit={registrate} className="form auth-form">
        <h3 className="form__title auth-form__title">Регистрация</h3>

        <label htmlFor="email" className="form__span">Email*</label>
        <Input id="email" name="email" type="email" className="form__input" placeholder="mail@mail.ru"/>

        <label htmlFor="name" className="form__span">Ваше имя*</label>
        <Input id="name" name="name" type="text" className="form__input" placeholder="Петр"/>

        <label htmlFor="surname" className="form__span">Ваша фамилия*</label>
        <Input id="surname" name="surname" type="text" className="form__input" placeholder="Петров"/>

        <label htmlFor="password" className="form__span">Придумайте пароль*</label>
        <Input id="password" name="password" type="password" className="form__input" placeholder="*********"/>

        <button type="submit" className="form__btn btn">Зарегистрироваться</button>

        <span className="subtitle">Уже зарегестрированны?<a onClick={() => props.setForm('auth')} href='#' className='subtitle-link'>Войти</a></span>
      </form>
    </div>
  )
}

export const FormRegWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate, registration }  
  )(FormOfReg)