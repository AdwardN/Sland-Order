const ACTION = 'ORDER';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';
const ACTION_ADD = ACTION + '_ACTION_ADD';
const ACTION_REMOVE = ACTION + 'ACTION_REMOVE';
const ACTION_CLEAR = ACTION + 'ACTION_CLEAR';

//-------------- Actions

const order = (
  ITS_REC_KH,
  ITS_REC_KHO,
  ITS_REC_HTTT,
  ONG_BA,
  DIEN_THOAI_LH,
  DIA_CHI,
  products,
  itS_REC,
) => {
  return {
    type: ACTION,
    ITS_REC_KH,
    ITS_REC_HTTT,
    ONG_BA,
    DIEN_THOAI_LH,
    DIA_CHI,
    ITS_REC_KHO,
    products,
    itS_REC,
  };
};

const addProduct = product => {
  return {
    type: ACTION_ADD,
    product,
  };
};

const clearProduct = () => {
  return {
    type: ACTION_CLEAR,
  };
};

const removeProduct = itS_REC_VT => {
  return {
    type: ACTION_REMOVE,
    itS_REC_VT,
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
  orderProducts: [],
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

    case ACTION_ADD:
      return {
        ...state,
        orderProducts: state.orderProducts.concat(action.product),
      };

    case ACTION_REMOVE:
      var orderProducts = state.orderProducts.filter(p => {
        return p.itS_REC_VT != action.itS_REC_VT;
      });

      return {
        ...state,
        orderProducts: orderProducts,
      };

    case ACTION_CLEAR:
      return {
        ...state,
        orderProducts: [],
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

export {
  ACTION,
  order,
  addProduct,
  removeProduct,
  clearProduct,
  onFailure,
  onSuccess,
};
