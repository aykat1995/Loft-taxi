import React from 'react'
import './profile.css'
import { logOut } from '../../actions.js'
import MapPage from '../map/mapPage.jsx'
import { Route } from 'react-router-dom'

import {connect} from 'react-redux'

export const ProfilePage = () => {
  return (
    <>
    <div className="profile__wrapper">
      {   <MapPage /> && (
            <div className="window-modal" onClick={() => <Route path='/map'/>}>
              <div className="window-modal__content" onClick={(e) => {e.stopPropagation()}}>
                <h1>Профиль</h1>
              </div>            
            </div> 
            )
      }                   
    </div>
    </>
  )
}

export const ProfileWithAuth = connect(
  null,
  { logOut }
)(ProfilePage)