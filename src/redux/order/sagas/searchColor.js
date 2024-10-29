import {takeEvery, put} from 'redux-saga/effects';
import r from 'reactotron-react-native';

import {ACTION, onFailure, onSuccess} from '../redux/searchColor';
import OrderAPI from '../../../services/OrderAPI';
import {ApiResponseStatusCode} from '../../../helpers/Constants';
import {_saveToken} from '../../../helpers/LocalStorage';

function* searchColor(action) {
  try {
    var response = yield OrderAPI.searchColor(
      action.keyword,
      action.capacity,
      action.pageNumber,
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
  yield takeEvery(ACTION, searchColor);
}
