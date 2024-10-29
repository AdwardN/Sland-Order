import {takeEvery, put} from 'redux-saga/effects';
import r from 'reactotron-react-native';

import {ACTION, onFailure, onSuccess} from '../redux/createAccount';
import vlsAPI from '../../../services/VLSAPI';
import {ApiResponseStatusCode} from '../../../helpers/Constants';
import {_saveToken} from '../../../helpers/LocalStorage';

function* regAccount(action) {
  try {
    var response = yield vlsAPI.register(
      action.TEN_KH,
      action.DIEN_THOAI,
      action.DIA_CHI,
      action.EMAIL,
      action.PASSWORDCUST,
    );

    console.log(response);
    console.log(response.descriptionCode);
    console.log(response && response.its_rec_kh != '');
    if (response && response.its_rec_kh != '') {
      yield put(onSuccess(response.descriptionCode));
    } else {
      yield put(onFailure(response.descriptionCode));
    }
  } catch (error) {
    yield put(onFailure(JSON.stringify(error)));
  }
}

export default function* saga() {
  yield takeEvery(ACTION, regAccount);
}
