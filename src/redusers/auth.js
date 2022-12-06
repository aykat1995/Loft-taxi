import { LOG_IN, LOG_OUT } from '../actions.js'

const initialState = {
  isLoggedIn: false,
  userDatas: ''
}
export default function(state = initialState, action) {
  switch(action.type) {
    case LOG_IN: {
      localStorage.setItem('isLoggedIn', JSON.stringify(true))
      localStorage.setItem('User datas', JSON.stringify(action.payload))
      return {isLoggedIn: true, userDatas: action.payload}
    }
    case LOG_OUT: {
      return {isLoggedIn: false}
    }
    default:
      return state
  }
}