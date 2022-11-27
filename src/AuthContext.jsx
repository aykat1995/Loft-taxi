import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logIn = ( email, password ) => new Promise((resolve, reject) => {
    if (email === 'valid@email.com' && password === 'password') {
      resolve('success');
      setLoggedIn(true);
    } else {
      console.log('Error')
      return reject('fail');
    }    
  })

  const logOut = () => {
    setLoggedIn(false);
  };

  const providerVariables = {
    logIn, 
    logOut, 
    isLoggedIn
  }

  return (
    <AuthContext.Provider value={ providerVariables } >
      {children}
    </AuthContext.Provider>
  )
}

export const WithAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {
            (value) => {
              return <WrappedComponent {...value} {...this.props} />
            }
          }
        </AuthContext.Consumer>
      )
    }
  }
}