import { logIn, registration } from '../actions.js'
import { serverRegistration } from '../api.js'
import { takeEvery, call, put } from 'redux-saga/effects'

export function* registrationSaga(action) {
  const { email, password, name, surname } = action.payload
  console.log(action.payload)
  const data = yield call(serverRegistration, email, password, name, surname)
  console.log('Registration datas: ' + JSON.stringify(data))
  if (data.success) {
    yield put(logIn(data.token))
  } else {
    alert('error: ' + data.error)
  }
}

export function* regSaga() {
  yield takeEvery(registration.toString(), registrationSaga)
}