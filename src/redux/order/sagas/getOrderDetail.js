import {takeEvery, put} from 'redux-saga/effects';
import r from 'reactotron-react-native';

import {ACTION, onFailure, onSuccess} from '../redux/getOrderDetail';
import OrderAPI from '../../../services/OrderAPI';
import {ApiResponseStatusCode} from '../../../helpers/Constants';
import {_saveToken} from '../../../helpers/LocalStorage';

function* getOrderDetail(action) {
  try {
    var response = yield OrderAPI.getOrderDetail(action.id);
    console.log(response);

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
  yield takeEvery(ACTION, getOrderDetail);
}
