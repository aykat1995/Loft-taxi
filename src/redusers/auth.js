import { LOG_IN, LOG_OUT } from '../actions.js'

const initialState = {
  isLoggedIn: false
}
export default function(state = initialState, action) {
  switch(action.type) {
    case LOG_IN: {
      if (action.payload.email === 'test@test.com' && action.payload.password === '123123') {
        return {isLoggedIn: true}
      } else {
        alert('Некорректные данные')
        return state
      }      
      //return {isLoggedIn: true}
    }
    case LOG_OUT: {
      return {isLoggedIn: false}
    }
    default:
      return state
  }
}