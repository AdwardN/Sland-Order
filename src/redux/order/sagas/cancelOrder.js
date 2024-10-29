import {takeEvery, put} from 'redux-saga/effects';
import r from 'reactotron-react-native';

import {ACTION, onFailure, onSuccess} from '../redux/cancelOrder';
import OrderAPI from '../../../services/OrderAPI';
import {ApiResponseStatusCode} from '../../../helpers/Constants';
import {_saveToken} from '../../../helpers/LocalStorage';

function* cancelOrder(action) {
  try {
    var response = yield OrderAPI.remove(action.id);

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
  yield takeEvery(ACTION, cancelOrder);
}
