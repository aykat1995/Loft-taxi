import { logIn, logOut } from "../actions";

const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "";

const isLoggedIn = localStorage.getItem("isLoggedIn") ? JSON.parse(localStorage.getItem("isLoggedIn")) : false;

const initialState = {
  isLoggedIn: isLoggedIn,
  token: token,
  card: {},
  addresses: [],
  route: {}
};


export default function(state = initialState, action) {
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
    default:
      return state;
  }
}
