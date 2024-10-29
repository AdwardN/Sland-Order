import {takeEvery, put} from 'redux-saga/effects';
import r from 'reactotron-react-native';

import {Colors} from '../../../themes';
import {ACTION, onFailure, onSuccess} from '../redux/changePassword';
import userAPI from '../../../services/UserAPI';
import {showIndicator, hideIndicator} from '../../app';
import {ApiResponseStatusCode} from '../../../helpers/Constants';

function* changePassword(action) {
  try {
    yield put(showIndicator(Colors.overlay5));
    yield sleep(1000);
    var response = yield userAPI.changePassword(
      action.OldPassword,
      action.NewPassword,
      action.Id,
    );
    yield put(hideIndicator());
    if (response.status_code == ApiResponseStatusCode.SUCCESS) {
      yield put(onSuccess(response.response));
    } else {
      yield put(onFailure(response.status));
    }
  } catch (error) {
    yield put(hideIndicator());
    yield put(onFailure(JSON.stringify(error)));
  }
}

function* sleep(time) {
  yield new Promise(resolve => setTimeout(resolve, time));
}

export default function* saga() {
  yield takeEvery(ACTION, changePassword);
}
