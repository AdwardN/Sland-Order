const ACTION = 'LOGIN_WITH_EMAIL';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';
const ACTION_LOGOUT = 'ACTION_LOGOUT';

const loginWithEmail = (email, password, phone) => ({
  type: ACTION,
  email,
  password,
  phone,
});

const onSuccess = user => ({
  type: ACTION_SUCCESS,
  user,
});

const onFailure = user => ({
  type: ACTION_ERROR,
  user,
});

const logout = () => ({
  type: ACTION_LOGOUT,
});

const initialState = {
  user: undefined,
  error: '',
  errorStack: 0,
  successStack: 0,
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
        user: action.user,
        successStack: state.successStack + 1,
      };

    case ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
        errorStack: state.errorStack + 1,
      };

    case ACTION_LOGOUT:
      return {
        ...state,
        user: undefined,
      };

    default:
      return state;
  }
};

export {ACTION, loginWithEmail, onFailure, onSuccess, logout};
