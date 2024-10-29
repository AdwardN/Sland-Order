import {combineReducers} from 'redux';

import app from './app';
import navigationRedux from './navigation/navigationRedux';
import loginWithEmail from './user/redux/loginWithEmail';
import regAccount from './user/redux/createAccount';
import getListOrder from './order/redux/getListOrder';
import getListInventory from './inventory/redux/getListInventory';
import searchColor from './order/redux/searchColor';
import searchProd from './order/redux/searchProd';
import order from './order/redux/order';
import getOrderDetail from './order/redux/getOrderDetail';
import cancelOrder from './order/redux/cancelOrder';
import searchInventory from './inventory/redux/SearchInventory';
import forgotPassword from './user/redux/forgotPassword';
import changePassword from './user/redux/changePassword';
import getPayment from './payment/redux/getPayment';

const rootReducer = combineReducers({
  app,
  navigationRedux,
  loginWithEmail,
  regAccount,
  getListOrder,
  getListInventory,
  searchColor,
  searchProd,
  order,
  getOrderDetail,
  cancelOrder,
  searchInventory,
  forgotPassword,
  changePassword,
  getPayment,
});

export default rootReducer;
