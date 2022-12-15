import { authenticate, logIn } from '../actions.js'
import { serverLogin } from '../api.js'
import { takeEvery, call, put } from 'redux-saga/effects'

export function* authenticateSaga(action) {
  const { email, password } = action.payload
  const data = yield call(serverLogin, email, password)
  console.log(data)
  if (data.success) {
    yield put(logIn(data.token))
  } else {
    alert('error: ' + data.error)
  }
}

export function* authSaga() {
  yield takeEvery(authenticate.toString(), authenticateSaga)
}