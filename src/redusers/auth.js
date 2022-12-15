import { logIn, logOut, cardLoaded, addressListReady, routeReady, registration } from "../actions";

const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "";

const isLoggedIn = localStorage.getItem("isLoggedIn") ? JSON.parse(localStorage.getItem("isLoggedIn")) : false;

const initialState = {
  isLoggedIn: isLoggedIn,
  token: token,
  card: {},
  addresses: [],
  route: {},
  registrated: false
};


export default function(state = initialState, action){
  switch (action.type) {
    case logIn.toString(): {
      localStorage.setItem('isLoggedIn', JSON.stringify(true))
      localStorage.setItem('token', JSON.stringify(action.payload))
      return { ...state, isLoggedIn: true, token: action.payload}
    }
    case logOut.toString(): {
      localStorage.setItem('isLoggedIn', JSON.stringify(false))
      localStorage.setItem('token', JSON.stringify(''))
      return { ...state, isLoggedIn: false, token: '' }
    }
    case cardLoaded.toString(): {
      localStorage.setItem('card', JSON.stringify(action.payload))
      return { ...state, card: action.payload }
    }
    case addressListReady.toString(): {
      localStorage.setItem('addresses', JSON.stringify(action.payload))
      return { ...state, addresses: action.payload }
    }
    case routeReady.toString(): {
      localStorage.setItem('route', JSON.stringify(action.payload))
      return { ...state, route: action.payload }
    }
    case registration.toString(): {
      return { ...state, registrated: true }
    }
    default:
      return state;
  }
}
