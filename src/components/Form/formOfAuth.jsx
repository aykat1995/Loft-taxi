import React from 'react'
import './form.css'

export default function FormOfAuth({setLogin, setForm}) {
  return (
    <div className="auth__form form__wrapper">
      <form action="#" className="form auth-form">
        <h3 className="form__title auth-form__title">Войти</h3>

        <label htmlFor="email" className="form__span">Email</label>
        <input id="email" name="email" type="email" className="input form__input" placeholder="mail@mail.ru"/>

        <label htmlFor="password" className="form__span">Пароль</label>
        <input id="password" name="password" type="password" className="input form__input" placeholder="*********"/>

        <span className="subtitle subtitle-forgot">Забыли пароль?</span>
        <button onClick={() => setLogin(true)} type="submit" className="form__btn btn">Войти</button>

        <span className="subtitle">Новый пользователь? <a onClick={() => setForm('reg')} href='#' className='subtitle-link'>Регистрация</a></span>
      </form>
    </div>
  )
}