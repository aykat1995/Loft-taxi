import {getRoute, routeReady} from '../actions.js'
import { serverRoute } from '../api.js'
import { takeEvery, call, put } from 'redux-saga/effects'

export function* getRouteSaga(action) {
  const { addressOne, addressTwo } = action.payload;
  console.log(addressOne, addressTwo)
  const data = yield call(serverRoute, addressOne, addressTwo)
  console.log('Route: ' + JSON.stringify(data))
  if (data) {
    yield put(routeReady(data))
  } else {
    alert('Ошибка: ' + data.error)
  }
}

export function* routeSaga() {
  yield takeEvery(getRoute.toString(), getRouteSaga)
}