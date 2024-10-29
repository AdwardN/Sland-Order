import {takeEvery, put} from 'redux-saga/effects';
import r from 'reactotron-react-native';

import {Colors} from '../../../themes';
import {ACTION, onFailure, onSuccess} from '../redux/getPayment';
import paymentAPI from '../../../services/PaymentAPI';
import {ApiResponseStatusCode} from '../../../helpers/Constants';

function* getPayment(action) {
  try {
    var response = yield paymentAPI.getPayment();
    if (response.status_code == ApiResponseStatusCode.SUCCESS) {
      yield put(onSuccess(response.response));
    } else {
      r.log(response.status);

      yield put(onFailure(response.status));
    }
  } catch (error) {
    r.log(JSON.stringify(error));
    yield put(onFailure(JSON.stringify(error)));
  }
}

function* sleep(time) {
  yield new Promise(resolve => setTimeout(resolve, time));
}

export default function* saga() {
  yield takeEvery(ACTION, getPayment);
}
