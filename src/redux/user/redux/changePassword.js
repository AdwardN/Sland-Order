import r from 'reactotron-react-native';

const ACTION = 'CHANGE_PASSWORD';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';
const ACTION_LOGOUT = 'ACTION_LOGOUT';

const changePassword = (OldPassword, NewPassword, Id) => ({
  type: ACTION,
  OldPassword,
  NewPassword,
  Id,
});

const onSuccess = payload => ({
  type: ACTION_SUCCESS,
  payload,
});

const onFailure = error => ({
  type: ACTION_ERROR,
  error,
});

const initialState = {
  status_code: 0,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };

    case ACTION_SUCCESS:
      return {
        status_code: action.payload,
      };

    case ACTION_ERROR:
      return {
        error: action.error,
      };

    default:
      return state;
  }
};

export {ACTION, changePassword, onFailure, onSuccess};
