import { createStore, applyMiddleware } from 'redux'
import rootReduser from './redusers'
// import { authMiddleware, getCardMiddleware } from './Middlewares.js'
import createSagaMiddleware from 'redux-saga'
import { fork, all } from 'redux-saga/effects'
import { authSaga } from './sagas/authSaga.js'
import { regSaga } from './sagas/registrationSaga'
import { paymentSaga } from './sagas/paymentSaga'
import { addressSaga } from './sagas/addressListSaga'
import { routeSaga } from './sagas/getRouteSaga'

const SagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReduser, applyMiddleware(SagaMiddleware))

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(regSaga), 
    fork(paymentSaga), 
    fork(addressSaga),
    fork(routeSaga)
  ])
}

SagaMiddleware.run(rootSaga)
