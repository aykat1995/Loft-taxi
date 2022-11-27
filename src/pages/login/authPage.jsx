import React, { useState } from 'react'
import './auth.css'
import FormOfAuth from '../../components/Form/formOfAuth.jsx'
import FormOfReg from '../../components/Form/formOfReg.jsx'
import { WithAuth } from '../../AuthContext.jsx'

export function AuthPagePrimary() {

  const [form, setForm] = useState('auth')

    return (
        <div className="auth__wrapp">
          <div className="auth__left">
            <img src="logo.png" alt="" className="logo__img" />
            <img src="logo-text.png" alt="LoftTaxi" className="logo__text" />
          </div>
          <div className="auth__right">
            {form === 'auth' ? <FormOfAuth setForm={setForm}/> : <FormOfReg setForm={setForm}/> }
          </div>
        </div>  
    )
}

export const AuthPage = WithAuth(AuthPagePrimary)
