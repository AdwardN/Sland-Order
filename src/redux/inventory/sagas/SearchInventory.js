import {takeEvery, put} from 'redux-saga/effects';
import r from 'reactotron-react-native';

import {Colors} from '../../../themes';
import {ACTION, onFailure, onSuccess} from '../redux/SearchInventory';
import inventoryAPI from '../../../services/InventoryAPI';
import {showIndicator, hideIndicator} from '../../app';
import {ApiResponseStatusCode} from '../../../helpers/Constants';

function* getInventory(action) {
  try {
    yield put(showIndicator(Colors.overlay5));
    yield sleep(1000);
    var response = yield inventoryAPI.getDetailInventory(
      action.ITS_REC_KHO,
      action.ITS_REC_VT,
      action.date,
    );
    yield put(hideIndicator());
    if (response.status_code == ApiResponseStatusCode.SUCCESS) {
      yield put(onSuccess(response.response));
    } else {
      r.log(response.status);

      yield put(onFailure(response.status));
    }
  } catch (error) {
    yield put(hideIndicator());
    r.log(JSON.stringify(error));
    yield put(onFailure(JSON.stringify(error)));
  }
}

function* sleep(time) {
  yield new Promise(resolve => setTimeout(resolve, time));
}

export default function* saga() {
  yield takeEvery(ACTION, getInventory);
}
