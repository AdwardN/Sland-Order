import {takeEvery, put} from 'redux-saga/effects';
import r from 'reactotron-react-native';

import {ACTION, onFailure, onSuccess} from '../redux/order';
import OrderAPI from '../../../services/OrderAPI';
import {ApiResponseStatusCode} from '../../../helpers/Constants';
import {_saveToken} from '../../../helpers/LocalStorage';

function* order(action) {
  try {
    var response = yield OrderAPI.order(
      action.ITS_REC_KH,
      action.ITS_REC_KHO,
      action.ITS_REC_HTTT,
      action.ONG_BA,
      action.DIEN_THOAI_LH,
      action.DIA_CHI,
      action.products,
      action.itS_REC,
    );

    if (response.status_code == ApiResponseStatusCode.SUCCESS) {
      yield put(onSuccess(response.response));
    } else {
      yield put(onFailure(response.status));
    }
  } catch (error) {
    yield put(onFailure(JSON.stringify(error)));
  }
}

export default function* saga() {
  yield takeEvery(ACTION, order);
}
