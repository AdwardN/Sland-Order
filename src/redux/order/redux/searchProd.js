const ACTION = 'SEARCH_PRODUCT';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';
const ACTION_CLEAR = ACTION + '_CLEAR';

//-------------- Actions
const searchProd = (keyword, capacity, pageNumber, isRefresh, ITS_REC_KH) => {
  return {
    type: ACTION,
    keyword,
    capacity,
    pageNumber,
    isRefresh,
    ITS_REC_KH,
  };
};

const clearProd = () => {
  return {
    type: ACTION_CLEAR,
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
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return action.isRefresh
        ? {
            ...state,
            products: [],
          }
        : {
            ...state,
          };

    case ACTION_CLEAR:
      return {
        ...state,
        products: [],
      };

    case ACTION_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };

    case ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export {ACTION, searchProd, clearProd, onFailure, onSuccess};
