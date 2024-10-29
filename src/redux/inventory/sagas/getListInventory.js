import {takeEvery, put} from 'redux-saga/effects';
import r from 'reactotron-react-native';

import {Colors} from '../../../themes';
import {ACTION, onFailure, onSuccess} from '../redux/getListInventory';
import inventoryAPI from '../../../services/InventoryAPI';
import {showIndicator, hideIndicator} from '../../app';
import {ApiResponseStatusCode} from '../../../helpers/Constants';
import {_saveToken} from '../../../helpers/LocalStorage';

function* getListOrder(action) {
  try {
    yield put(showIndicator(Colors.overlay5));
    yield sleep(1000);
    var response = yield inventoryAPI.getInventory(
      action.ITS_REC_KHO,
      action.date,
      action.pageNumber,
    );

    yield put(hideIndicator());
    if (response.status_code == ApiResponseStatusCode.SUCCESS) {
      yield put(
        onSuccess({
          inventories: response.response,
          total: response.total,
        }),
      );
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
  yield takeEvery(ACTION, getListOrder);
}
