const ACTION = 'FORGOT_PASSWORD';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';

const forgotPassword = email => ({
  type: ACTION,
  email,
});

const onSuccess = payload => ({
  type: ACTION_SUCCESS,
  payload,
});

const onFailure = payload => ({
  type: ACTION_ERROR,
  payload,
});

const initialState = {
  status: false,
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
        ...state,
        status: action.payload,
      };

    case ACTION_ERROR:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export {ACTION, forgotPassword, onFailure, onSuccess};
