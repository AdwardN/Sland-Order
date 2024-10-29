export const SCREEN_TRANSITION_TIME = Platform.OS == 'ios' ? 500 : 200;
export const ORDERS_PAGE_SIZE = 10;

export const APP_STORE_URL =
  'https://apps.apple.com/us/app/s%E1%BA%A3n-xu%E1%BA%A5t-s%C6%A1n/id1481059154?ls=1';

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.sland';

const ApiResponseStatusCode = {
  SUCCESS: 200,
  AUTHORIZED: 401,
};

const OrderStatus = {
  ORDER: 0,
  PROCESS: 1,
  DELIVERY: 2,
  COMPLETE: 3,
  STOP: 4,
  CANCEL: 5,
  ALL: 10,
};

export {ApiResponseStatusCode, OrderStatus};
