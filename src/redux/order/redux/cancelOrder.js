const ACTION = 'CANCEL_ORDER';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';

//-------------- Actions
const cancelOrder = id => {
  return {
    type: ACTION,
    id,
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

//-------------- Actions
const initialState = {
  orderSuccessStack: 0,
  orderFailureStack: 0,
  error: '',
};

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
        orderSuccessStack: state.orderSuccessStack + 1,
      };

    case ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
        orderFailureStack: state.orderFailureStack + 1,
      };

    default:
      return state;
  }
};

export {ACTION, cancelOrder, onFailure, onSuccess};
