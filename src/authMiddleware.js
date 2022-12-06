import { authenticate, logIn } from './actions.js'
import { serverLogin } from './api.js'
import { AUTHENTICATE } from './actions.js'

export const authMiddleware = (store) => (next) => async (action) => {
  if(action.type === AUTHENTICATE) {
    console.log(JSON.stringify(action.payload))
    const {email, password} = action.payload
    const data = await serverLogin(email, password)
    console.log(data)
    if(data) {
      console.log('login')
      store.dispatch(logIn())
    } else {
      next(action)
    }
  }
}