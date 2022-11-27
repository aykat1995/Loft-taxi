import React from 'react'
import { AuthProvider, AuthContext } from './AuthContext.jsx'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe('AuthContext', () => {
  describe('#logIn', () => {
    it('sets isLoggedIn to false', () => {
      let isLoggedIn;
      let logIn;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              logIn = value.logIn;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      )

      expect(isLoggedIn).toBe(false)
      act(() => {
        logIn('valid@email.com', 'password')
      })
      expect(isLoggedIn).toBe(true)
    })
  })
})