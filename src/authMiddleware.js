import { authenticate, logIn } from './actions.js'
import { serverLogin } from './api.js'

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === authenticate.toString()) {
      const { email, password } = action.payload;
      const data = await serverLogin(email, password)
      console.log(data)
      if (data) {
        store.dispatch(logIn(data.token))
      } else {
        alert('Неверные данные')
      }
    } else {
      next(action)
    }
    };