import r from 'reactotron-react-native';
import moment from 'moment';

const ACTION = 'GET_LIST_INVENTORY';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';
const ACTION_UPDATE = 'UPDATE_ITEM_INVENTORY';
const ACTION_RESET = 'RESET_ITEM_INVENTORY';
const ACTION_REFRESH = ACTION + '_ACTION_REFRESH';

const getListInventory = (
  ITS_REC_KHO,
  pageNumber,
  isRefresh = false,
  date = moment().format('YYYY-MM-DD'),
) => ({
  type: ACTION,
  ITS_REC_KHO,
  date,
  pageNumber,
  isRefresh,
});

const onSuccess = payload => ({
  type: ACTION_SUCCESS,
  payload,
});

const onFailure = error => ({
  type: ACTION_ERROR,
  error,
});

const updateInventory = item => ({
  type: ACTION_UPDATE,
  item,
});

const resetInventory = () => ({
  type: ACTION_RESET,
});

const refreshInventories = () => ({
  type: ACTION_REFRESH,
});

const initialState = {
  total: 0,
  inventories: [],
  error: '',
  refreshFlag: 0,
  loadEnd: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      if (action.isRefresh)
        return {
          ...state,
          inventories: [],
        };
      return {
        ...state,
        loadEnd: false,
      };
    case ACTION_SUCCESS:
      return {
        refreshFlag: 0,
        inventories: state.inventories.concat(
          action.payload.inventories.map(e => {
            return {
              ...e,
              toN_INSERT: 0,
            };
          }),
        ),
        total: action.payload.total,
        loadEnd: true,
      };
    case ACTION_ERROR:
      return {
        ...state,
        error: action.error,
        loadEnd: true,
      };
    case ACTION_UPDATE: {
      return {
        ...state,
        inventories: state.inventories.map(e => {
          if (
            e.itS_REC_VT == action.item.itS_REC_VT &&
            e.itS_REC_VT_MAU == action.item.itS_REC_VT_MAU
          )
            e = action.item;
          return {
            ...e,
          };
        }),
        total: state.total,
      };
    }

    case ACTION_RESET: {
      return {
        ...state,
        inventories: state.inventories.map(e => {
          return {
            ...e,
            toN_INSERT: 0,
          };
        }),
        total: state.total,
      };
    }

    case ACTION_REFRESH:
      return {
        ...state,
        refreshFlag: state.refreshFlag + 1,
      };

    default:
      return state;
  }
};

export {
  ACTION,
  onSuccess,
  onFailure,
  getListInventory,
  updateInventory,
  refreshInventories,
  resetInventory,
};
