import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/header.jsx'
import MapPage from '../map/mapPage.jsx'
import { ProfileWithAuth } from '../profile/profilePage.jsx'
import './Authorized.css'
import { connect } from 'react-redux'
import Select from "../../ui/select"
import { logIn, logOut, getAddressList, getCard, getRoute, changeRouteBoxView, routeReady} from "../../actions.js"
import boxView from '../../constants.js'

function Authorized(props) {

  const PAGES = {
    profile: (props) => <ProfileWithAuth {...props}/>
  }

  const [currentPage, setPage] = useState('map');
  const { addresses, getRoute, routeBoxView, routeReady, changeRouteBoxView, cardInfo, getAddressList } = props;
  const [list, setList] = useState([]);
  const [addressOne, setAddressOne] = useState(null);
  const [addressTwo, setAddressTwo] = useState(null);
  let selectedCar = document.getElementsByClassName('cars__item')[0];

  function navigateTo(page) {
    setPage(page)
  }

  function hideRouteForm() {
    let form = document.querySelector('.route-wrapper');
    form.classList.remove("active");
  }

  function showRouteForm() {
    let form = document.querySelector('.route-wrapper');
    form.classList.add("active");
  }

  function showNoCardInfo() {
    hideRouteForm()
    let div = document.querySelector('.route-box-no-card')
    div.classList.add('active')
  }
  function hideNoCardInfo() {
    let div = document.querySelector('.route-box-no-card')
    div.classList.remove('active')
  }

  //Получаем список адресов из API

  useEffect(() => {   
    getAddressList();
  }, [])

  useEffect(() => {
    setList(addresses);
  }, [addresses])  

  //Получаем route

  function getRouteFromAPI() {
    if (JSON.stringify(cardInfo) != '{}') getRoute(addressOne, addressTwo)
    else showNoCardInfo();
  }

  function newOrder() {
    routeReady(null)
    changeRouteBoxView(boxView.INITIAL);
    selectedCar = document.getElementsByClassName('cars__item')[0]
  };

  function activeCarItem(e) {
    let item = e.target.closest('div');
    if (!item) return;
    selectedCar.classList.remove('active')

    selectedCar = item;
    selectedCar.classList.add('active')
  }

   return <>
    <div className='block'>
      <Header hideRouteForm={hideRouteForm} showRouteForm={showRouteForm} navigateTo={navigateTo}/>
      <main className='main'>
        <section className='main__content'>

        <MapPage />
          { 
          PAGES[currentPage] && (
            <div className="window-modal" onClick={() => {setPage('map'); showRouteForm()}}>
              <div className="window-modal__content" onClick={(e) => {e.stopPropagation()}}>
                {PAGES[currentPage]({navigate: navigateTo, showRouteForm: showRouteForm})}
              </div>            
            </div> 
            )
          }

          {
            routeBoxView !== boxView.INITIAL ?          
              (
                <div data-testid="route-box-ordered" className='ordered__wrapper'>
                  <div className="title">
                    <div className="title__header">
                      <h3 className='ordered__title'>Заказ размещён</h3>
                    </div>
                  </div>
                  <div className="route-box__content">
                    <p className='ordered__text'>
                      Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                    </p>
                  </div>
                  <button className='btn ordered__btn' onClick={newOrder}>
                      Сделать новый заказ
                  </button>
                </div>
              )
            :
            (
              <div className="route-wrapper active">
                <div className="route__form">
                  <div className="firstSelect select">
                    <Select list={list.filter((e) => e !== addressTwo)} onChange={e => {setAddressOne(e);console.log(e)}} lable={"Откуда"} />
                  </div>
                  <div className="secondSelect select">
                    <Select list={list.filter((e) => e !== addressOne)} onChange={e => {setAddressTwo(e);console.log(e)}} lable={"Куда"} />
                  </div>                     

                  <div className="cars__wrapper">
                    <div className="cars__items" onClick={e => activeCarItem(e)}>
                      <div className="cars__item active">
                        <span className="cars__title">Стандарт</span>
                        <span className="cars__subtitle">Стоимость</span>
                        <span className="cars__price">150 Р</span>
                        <img src="cars-1.jpg" alt="" className="cars__img" />
                      </div>
                      <div className="cars__item">
                        <span className="cars__title">Премиум</span>
                        <span className="cars__subtitle">Стоимость</span>
                        <span className="cars__price">250 Р</span>
                        <img src="cars-2.jpg" alt="" className="cars__img" />
                      </div>
                      <div className="cars__item">
                        <span className="cars__title">Бизнес</span>
                        <span className="cars__subtitle">Стоимость</span>
                        <span className="cars__price">300 Р</span>
                        <img src="cars-3.jpg" alt="" className="cars__img" />
                      </div>
                    </div>
                    <button className="route__button btn" id="routeButton" variant="contained" onClick={() => getRouteFromAPI()}>Заказать</button>
                  </div>
                </div>
              </div>  
              )}

                <div className="route-box-no-card">
                  <div className="route-box-no-card-wrapp">
                    <div className="title">
                      <div className="title__header">
                        <h3 className='ordered__title'>Заполните платежные данные</h3>
                      </div>
                    </div>
                    <div className="route-box__content">
                      <p className='ordered__text'>
                        Укажите информацию о банковской карте, чтобы сделать заказ.
                      </p>
                    </div>
                    <div className="actions">
                      <button onClick={() => {setPage('profile'); hideNoCardInfo(); hideRouteForm()}} className='btn ordered__btn'                 >
                        Перейти в профиль
                      </button>
                    </div>
                  </div>                  
                </div>
        </section>
      </main>
    </div>
    </>
}

export default connect(
  (state) => ({ token: state.auth.token, addresses: state.auth.addresses, cardInfo: state.auth.card, routeBoxView: state.auth.routeBoxView }),
  { logIn, logOut, getAddressList, getCard, getRoute, changeRouteBoxView, routeReady }
)(Authorized)
