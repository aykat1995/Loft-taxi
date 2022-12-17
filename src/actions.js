import { createAction } from 'redux-actions'
import boxView from './constants';

export const logIn = createAction('LOG_IN');
export const logOut = createAction('LOG_OUT');
export const routeReady = createAction('ROUTE_READY');
export const cardLoaded = createAction('CARD_READY');
export const addressListReady = createAction('ADDRESS_LIST_READY');

export const authenticate = createAction('AUTHENTICATE', (email, password) => ({ email, password }));
export const registration = createAction('REGISTRATION', (email, password, name, surname) => ({ email, password, name, surname }));

export const getCard = createAction('GET_CARD', token => token);
export const getRoute = createAction('GET_ROUTE', (addressOne, addressTwo) => ({ addressOne, addressTwo }));
export const getAddressList = createAction('GET_ADDRESSLIST');

export const postCard = createAction('POST_CARD', (cardNumber, cardDate, cardName, cvc, token) => ({ cardNumber, cardDate, cardName, cvc, token }));

export const changeRouteBoxView = createAction("CHANGE_ROUTE_BOX_VIEW", (boxView) => boxView);

// export const changeRouteBoxView = createAction("CHANGE_ROUTE_BOX_VIEW");