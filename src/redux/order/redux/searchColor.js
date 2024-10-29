const ACTION = 'SEARCH_COLOR';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';
const ACTION_CLEAR = ACTION + '_CLEAR';

//-------------- Actions
const searchColor = (keyword, capacity, pageNumber, isRefresh) => {
  return {
    type: ACTION,
    keyword,
    capacity,
    pageNumber,
    isRefresh,
  };
};

const clearColors = () => {
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
  colors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return action.isRefresh
        ? {
            ...state,
            colors: [],
          }
        : {
            ...state,
          };

    case ACTION_CLEAR:
      return {
        ...state,
        colors: [],
      };

    case ACTION_SUCCESS:
      return {
        ...state,
        colors: action.payload,
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

export {ACTION, searchColor, clearColors, onFailure, onSuccess};
