import { postCard, cardLoaded } from '../actions.js'
import { serverPostCard } from '../api.js'
import { takeEvery, call, put } from 'redux-saga/effects'

export function* postPaymentSaga(action) {
  const { cardNumber, cardDate, cardName, cvc, token } = action.payload
  console.log('payload of card: ' + JSON.stringify(action.payload))
  const data = yield call(serverPostCard, cardNumber, cardDate, cardName, cvc, token)
  yield put(cardLoaded(action.payload))
  // if (data.success) {
  //   yield put(cardLoaded(action.payload))
  // } else {
  //   alert('error: ' + data.error)
  // }
}

export function* paymentSaga() {
  yield takeEvery(postCard.toString(), postPaymentSaga)
}