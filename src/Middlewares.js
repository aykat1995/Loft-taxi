import { authenticate, logIn, getCard, cardLoaded } from './actions.js'
import { serverLogin, serverGetCard } from './api.js'

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === authenticate.toString()) {
      const { email, password } = action.payload;
      const data = await serverLogin(email, password)
      console.log(data)
      if (data.success) {
        store.dispatch(logIn(data.token))
      } else {
        alert('error: ' + data.error)
      }
    } else {
      next(action)
    }
  };

  export const getCardMiddleware = (store) => (next) => async (action) => {
    if (action.type === getCard.toString()) {
      const { token } = action.payload;
      const data = await serverGetCard(token)
      console.log('Card token: ' + data)
      if (data) {
        store.dispatch(cardLoaded(data))
      } else {
        alert('Ошибка')
      }
    } else {
      next(action)
    }
  };