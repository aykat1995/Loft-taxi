import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/header.jsx'
import MapPage from '../map/mapPage.jsx'
import { ProfileWithAuth } from '../profile/profilePage.jsx'
import './Authorized.css'
import { connect } from 'react-redux'
import Select from "../../ui/select"
import { logIn, logOut, getAddressList, getCard, getRoute } from "../../actions.js"

function Authorized(props) {

  const PAGES = {
    profile: (props) => <ProfileWithAuth {...props}/>
  }

  const [currentPage, setPage] = useState('map');
  const { addresses, getRoute } = props;
  const [list, setList] = useState([]);
  const [addressOne, setAddressOne] = useState(null);
  const [addressTwo, setAddressTwo] = useState(null);

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

  //Получаем список адресов из API

  useEffect(() => {   
    props.getAddressList();
  }, [])

  useEffect(() => {
    setList(addresses);
  }, [addresses])  

  //Получаем route

  function getRouteFromAPI() {
    getRoute(addressOne, addressTwo);
  }

   return <>
      <Header hideRouteForm={hideRouteForm} showRouteForm={showRouteForm} navigateTo={navigateTo}/>
      <main className='main'>
        <section className='main__content'>

        <MapPage />
          { 
          PAGES[currentPage] && (
            <div className="window-modal" onClick={() => {setPage('map'); showRouteForm()}}>
              <div className="window-modal__content" onClick={(e) => {e.stopPropagation()}}>
                {PAGES[currentPage]({navigate: navigateTo})}
              </div>            
            </div> 
            )
          }

                <div className="route-wrapper active">
                  <div className="route__form">
                    <div className="firstSelect select">
                      <Select list={list.filter((e) => e !== addressTwo)} onChange={e => {setAddressOne(e);console.log(e)}} lable={"Откуда"} />
                    </div>
                    <div className="secondSelect select">
                      <Select list={list.filter((e) => e !== addressOne)} onChange={e => {setAddressTwo(e);console.log(e)}} lable={"Куда"} />
                    </div>                     

                    <div className="cars__wrapper">
                      <div className="cars__items">
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
                      <button className="route__button" id="routeButton" variant="contained" onClick={() => getRouteFromAPI()}>Заказать</button>
                    </div>
                  </div>
                </div>  
        </section>
      </main>
    </>
}

export default connect(
  (state) => ({ token: state.auth.token, addresses: state.auth.addresses, cardInfo: state.auth.card }),
  { logIn, logOut, getAddressList, getCard, getRoute }
)(Authorized)
