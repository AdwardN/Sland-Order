import {takeEvery, put} from 'redux-saga/effects';
import R from 'reactotron-react-native';

import {ACTION, onFailure, onSuccess} from '../redux/searchProd';
import OrderAPI from '../../../services/OrderAPI';
import {ApiResponseStatusCode} from '../../../helpers/Constants';
import {_saveToken} from '../../../helpers/LocalStorage';

function* searchProd(action) {
  try {
    var response = yield OrderAPI.searchProducts(
      action.keyword,
      action.capacity,
      action.pageNumber,
      action.ITS_REC_KH,
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
  yield takeEvery(ACTION, searchProd);
}
