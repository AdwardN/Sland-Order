import {takeEvery, put} from 'redux-saga/effects';
import r from 'reactotron-react-native';

import {Colors} from '../../../themes';
import {ACTION, onFailure, onSuccess} from '../redux/getListOrder';
import OrderAPI from '../../../services/OrderAPI';
import {showIndicator, hideIndicator} from '../../app';
import {ApiResponseStatusCode} from '../../../helpers/Constants';
import {_saveToken} from '../../../helpers/LocalStorage';

function* getListOrder(action) {
  try {
    yield put(showIndicator(Colors.overlay5));
    yield sleep(1000);
    var response = yield OrderAPI.getOrders(
      action.itS_REC_KH,
      action.keyword,
      action.status,
      action.dateFrom,
      action.dateTo,
      action.pageNumber,
    );

    yield put(hideIndicator());
    if (response.status_code == ApiResponseStatusCode.SUCCESS) {
      yield put(
        onSuccess({
          orders: response.response,
          total: response.total,
        }),
      );
    } else {
      r.log(response.status);

      yield put(onFailure(response.status));
    }
  } catch (error) {
    // yield put(hideIndicator());
    r.log(JSON.stringify(error));
    yield put(onFailure(JSON.stringify(error)));
  }
}

function* sleep(time) {
  yield new Promise(resolve => setTimeout(resolve, time));
}

export default function* saga() {
  yield takeEvery(ACTION, getListOrder);
}
