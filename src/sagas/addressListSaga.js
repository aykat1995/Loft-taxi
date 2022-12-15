import { getAddressList, addressListReady } from '../actions.js'
import { serverAddress } from '../api.js'
import { takeEvery, call, put } from 'redux-saga/effects'

export function* addressListSaga() {
  const data = yield call(serverAddress)
  console.log('addresses: ' + JSON.stringify(data))
  if (data.addresses) {
    yield put(addressListReady(data.addresses))
  } else {
    alert('Ошибка: ' + data.error)
  }
}

export function* addressSaga() {
  yield takeEvery(getAddressList.toString(), addressListSaga)
}