const ACTION = 'GET_ORDER_DETAIL';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';

//-------------- Actions
const getOrderDetail = id => {
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
  order: undefined,
};

import R from 'reactotron-react-native';

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
        order: undefined,
      };

    case ACTION_SUCCESS:
      return {
        ...state,
        order: action.payload,
      };

    case ACTION_ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export {ACTION, getOrderDetail, onFailure, onSuccess};
