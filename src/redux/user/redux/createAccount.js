const ACTION = 'REGISTER';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';
const ACTION_ADD = ACTION + '_ACTION_ADD';
const ACTION_REMOVE = ACTION + 'ACTION_REMOVE';
const ACTION_CLEAR = ACTION + 'ACTION_CLEAR';

//-------------- Actions
//-------------- Actions
const initialState = {
  createAccountSuccessStack: 0,
  createAccountFailureStack: 0,
  error: '',
  msg: '',
};
const regAccount = (TEN_KH, DIEN_THOAI, DIA_CHI, EMAIL, PASSWORDCUST) => {
  return {
    type: ACTION,
    TEN_KH,
    DIEN_THOAI,
    DIA_CHI,
    EMAIL,
    PASSWORDCUST,
  };
};

const onSuccess = payload => ({
  type: ACTION_SUCCESS,
  payload,
});

const onFailure = payload => ({
  type: ACTION_ERROR,
  payload,
});

import R from 'reactotron-react-native';

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    case ACTION_SUCCESS:
      return {
        ...state,
        createAccountSuccessStack: state.createAccountSuccessStack + 1,
        msg: action.payload,
      };

    case ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
        createAccountFailureStack: state.createAccountFailureStack + 1,
      };
    default:
      return state;
  }
};

export {ACTION, regAccount, onFailure, onSuccess};
