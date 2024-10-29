import {fork, all} from 'redux-saga/effects';

import loginWithEmail from './user/sagas/loginWithEmail';
import regAccount from './user/sagas/createAccount';
import getListOrder from './order/sagas/getListOrder';
import getListInventory from './inventory/sagas/getListInventory';
import searchColor from './order/sagas/searchColor';
import searchProd from './order/sagas/searchProd';
import order from './order/sagas/order';
import getOrderDetail from './order/sagas/getOrderDetail';
import cancelOrder from './order/sagas/cancelOrder';
import searchInventory from './inventory/sagas/SearchInventory';
import forgotPassword from './user/sagas/forgotPassword';
import changePassword from './user/sagas/changePassword';
import getPayment from './payment/sagas/getPayment';

export default function* rootSaga() {
  yield all([
    fork(loginWithEmail),
    fork(regAccount),
    fork(getListOrder),
    fork(getListInventory),
    fork(searchColor),
    fork(searchProd),
    fork(order),
    fork(getOrderDetail),
    fork(cancelOrder),
    fork(searchInventory),
    fork(forgotPassword),
    fork(changePassword),
    fork(getPayment),
  ]);
}
