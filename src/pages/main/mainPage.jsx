import React from 'react'
import Header from '../../components/Header/header.jsx'
import MapPage from '../map/mapPage.jsx'
import { ProfileWithAuth } from '../profile/profilePage.jsx'
import './mainPage.css'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from '../../PrivateRoute.jsx'

export default class Main extends React.Component {

  render() {
    return <>
      <Header />
      <main className='main'>
        <section className='main__content'>

          <Switch>
            <PrivateRoute path='/' exact component={MapPage} />
            <PrivateRoute path='/profile' component={ProfileWithAuth} />
          </Switch>
          
        </section>
      </main>
    </>
  }
}

