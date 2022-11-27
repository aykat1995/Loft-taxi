import React from 'react'
import { WithAuth } from '../../AuthContext.jsx'
import './profile.css'

export const ProfilePage = () => {
  return (
    <>
    <div className="profile__wrapper">
      <h1 className="profile__title">Профиль</h1>
    </div>
    </>
  )
}

export const ProfileWithAuth = WithAuth(ProfilePage)