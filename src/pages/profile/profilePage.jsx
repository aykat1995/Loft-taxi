import './profile.css'
import React, {useState, useEffect} from "react"
import Input from '@mui/material/Input'
import { connect } from 'react-redux'
import { postCard } from '../../actions.js'

function ProfilePage(props) {

  const [cardNumber, setCardNumber] = useState('');
  const [date, setDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [name, setName] = useState('');

  const {cardData} = props
  useEffect(() => {
    setName(cardData.cardName);
    setCardNumber(cardData.cardNumber);
    setDate(cardData.cardDate);
    setCVC(cardData.cvc);
  }, [cardData])

  //{cardNumber: "0000 0000 0000 0000", expiryDate: "", cardName: "", cvc: "", token: AUTH_TOKEN}

  function sendCardData (e) {
    e.preventDefault()

    const { cardNumber, cardDate, cardName, cvc } = e.target;

    props.postCard(cardNumber.value, cardDate.value, cardName.value, cvc.value, props.token)
  } 

  return (<>
    <div className="profile__wrapper">
      <form onSubmit={sendCardData}>
        <h2 className="profile__title">Профиль</h2>
        <p className="profile__text">Введите платежные данные</p>
        <div className="profile-form__wrapper">
          <div className="form__group">
            <div className='input__item'>
              <label htmlFor="name" className="form__span">Имя владельца</label>
              <Input id="name" name="cardName" type="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='input__item'>
              <label htmlFor="card" className="form__span">Номер карты</label>
              <Input id="card" name="cardNumber" type="card" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
            </div>
            <div className="card-row">
              <div className='input__item'>
                <label htmlFor="date" className="form__span">MM/YY</label>
                <Input id="date" name="cardDate" type="text" value={date} onChange={(e) => setDate(e.target.value)}/>
              </div>
              <div className='input__item'>
                <label htmlFor="cvc" className="form__span">CVC</label>
                <Input id="cvc" name="cvc" type="text" value={cvc} onChange={(e) => setCVC(e.target.value)}/>
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
        <button type="submit" onClick={props.showRouteForm} className="btn profile__btn">Сохранить</button>
      </form>

      {/* <div className="modal">
        <div className="modal__wrapper">
          <h3 className="modal__title">Профиль</h3>
          <p className="modal__text">Платёжные данные обновлены. Теперь вы можете заказывать такси.</p>
          <button className="modal__btn">Перейти на карту</button>
        </div>
      </div> */}
    </div >
  </>);
}

export const ProfileWithAuth = connect(
  (state) => ({ token: state.auth.token, cardData: state.auth.card}),
  { postCard }
)(ProfilePage)