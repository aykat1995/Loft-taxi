import { authenticate, logIn } from './actions.js'
import { serverLogin } from './api.js'
import { AUTHENTICATE } from './actions.js'
import Main from './pages/main/mainPage.jsx'

export const authMiddleware = (store) => (next) => async (action) => {
  if(action.type === AUTHENTICATE) {
    console.log(JSON.stringify(action.payload))
    const {email, password} = action.payload
    const success = await serverLogin(email, password)
    alert(success)
    if(success) {
      store.dispatch(logIn())
    } else {
      next(action)
    }
  }
}