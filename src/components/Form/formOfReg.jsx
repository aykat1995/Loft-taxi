import React from 'react'
import './form.css'
import PropTypes from 'prop-types'

FormOfReg.propTypes = {
  setForm: PropTypes.func
}

export default function FormOfReg({setForm}) {
  return (
    <div className="auth__form form__wrapper">
      <form action="#" className="form auth-form">
        <h3 className="form__title auth-form__title">Регистрация</h3>

        <label htmlFor="email" className="form__span">Email*</label>
        <input id="email" name="email" type="email" className="input form__input" placeholder="mail@mail.ru"/>

        <label htmlFor="name" className="form__span">Как вас зовут?*</label>
        <input id="name" name="name" type="text" className="input form__input" placeholder="Петр Александрович"/>

        <label htmlFor="password" className="form__span">Придумайте пароль*</label>
        <input id="password" name="password" type="password" className="input form__input" placeholder="*********"/>

        <button type="submit" className="form__btn btn">Зарегистрироваться</button>

        <span className="subtitle">Уже зарегестрированны?<a onClick={() => setForm('auth')} href='#' className='subtitle-link'>Войти</a></span>
      </form>
    </div>
  )
}