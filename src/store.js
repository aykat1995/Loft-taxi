import { createStore, applyMiddleware } from 'redux'
import rootReduser from './redusers'
// import { authMiddleware } from './authMiddleware.js'

// export const store = createStore(rootReduser, applyMiddleware(authMiddleware))
export const store = createStore(rootReduser)

