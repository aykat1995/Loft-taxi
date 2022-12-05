import './profile.css'
import React, {useState} from "react"
import Input from '@mui/material/Input'
import { connect } from 'react-redux'
import { logOut } from '../../actions.js'

function ProfilePage() {

  const [cardNumber, setCardNumber] = useState('');
  const [date, setDate] = useState('');

  return (<>
    <div className="profile__wrapper">
      <form>
        <h2 className="profile__title">Профиль</h2>
        <p className="profile__text">Введите платежные данные</p>
        <div className="profile-form__wrapper">
          <div className="form__group">
            <div className='input__item'>
              <label htmlFor="name" className="form__span">Имя владельца</label>
              <Input id="name" name="cardName" type="name" />
            </div>
            <div className='input__item'>
              <label htmlFor="card" className="form__span">Номер карты</label>
              <Input id="card" name="cardNumber" type="card" onChange={(e) => setCardNumber(e.target.value)}/>
            </div>
            <div className="card-row">
              <div className='input__item'>
                <label htmlFor="date" className="form__span">MM/YY</label>
                <Input id="date" name="cardDate" type="text" onChange={(e) => setDate(e.target.value)}/>
              </div>
              <div className='input__item'>
                <label htmlFor="cvc" className="form__span">CVC</label>
                <Input id="cvc" name="cvc" type="text" />
              </div>
            </div>
          </div>
          <div className="preview">
            <div className="preview__top">
              <img src="logo.png" alt="logo" className="preview__logo" />
              <p className="preview__date">{date}</p>
            </div>            
            <h3 className='preview__card'>{cardNumber}</h3>
            <div className="preview__bottom">
              <img src="preview-1.png" alt="" />
              <img src="preview-1.png" alt="" />
            </div>
          </div>
        </div>
        <button type="submit" className="btn profile__btn">Сохранить</button>
      </form>
    </div >
  </>);
}

export const ProfileWithAuth = connect(
  null,
  { logOut }
)(ProfilePage)