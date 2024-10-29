import {takeEvery, put} from 'redux-saga/effects';
import r from 'reactotron-react-native';

import {Colors} from '../../../themes';
import {ACTION, onFailure, onSuccess} from '../redux/loginWithEmail';
import userAPI from '../../../services/UserAPI';
import {showIndicator, hideIndicator} from '../../app';
import {ApiResponseStatusCode} from '../../../helpers/Constants';
import {_saveToken} from '../../../helpers/LocalStorage';

function* loginWithEmail(action) {
  try {
    yield put(showIndicator(Colors.overlay5));
    yield sleep(1000);
    var response = yield userAPI.loginWithEmail(action.email, action.password);
    console.log(response);

    yield put(hideIndicator());
    if (response.status_code == ApiResponseStatusCode.SUCCESS) {
      yield _saveToken(response.response.token);
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
  yield takeEvery(ACTION, loginWithEmail);
}
