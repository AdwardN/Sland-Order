const ACTION = 'GET_PAYMENT';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';
const ACTION_CLEAR = ACTION + 'CLEAR';

const getPayment = () => ({
  type: ACTION,
});

const clearPayment = () => ({
  type: ACTION_CLEAR,
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
  payments: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
      };
    case ACTION_CLEAR:
      return {
        ...state,
        payments: [],
      };
    case ACTION_SUCCESS:
      return {
        ...state,
        payments: action.payload,
      };
    case ACTION_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export {ACTION, getPayment, onSuccess, onFailure, clearPayment};
