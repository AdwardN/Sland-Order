import moment from 'moment';

const ACTION = 'GET_LIST_ORDER';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';
const ACTION_REFRESH = ACTION + '_ACTION_REFRESH';

//-------------- Actions
const getListOrder = (
  itS_REC_KH,
  keyword,
  status,
  dateFrom,
  dateTo,
  pageNumber,
  isRefresh,
) => {
  return {
    type: ACTION,
    itS_REC_KH,
    pageNumber,
    isRefresh,
    keyword,
    status,
    dateFrom,
    dateTo,
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

const refreshListOrder = () => ({
  type: ACTION_REFRESH,
});

//-------------- Actions
const initialState = {
  orders: [],
  error: '',
  isLoadMore: true,
  isLoading: true,
  refreshFlag: 0,
  loadEnd: false,
};

import R from 'reactotron-react-native';
import {ORDERS_PAGE_SIZE} from '../../../helpers/Constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return action.isRefresh
        ? {
            ...state,
            isLoading: true,
            orders: [],
            isLoadMore: true,
            loadEnd: false,
          }
        : {
            ...state,
            isLoading: true,
            loadEnd: false,
          };

    case ACTION_SUCCESS:
      var orders = state.orders;

      if (orders.length == 0) {
        orders.push({
          title: moment(action.payload.orders[0].ngaY_CT).format('YYYY-MM'),
          data: [],
        });
      }

      action.payload.orders.map(order => {
        var lastOrderGroup = orders[orders.length - 1];
        if (moment(order.ngaY_CT).format('YYYY-MM') == lastOrderGroup.title) {
          orders[orders.length - 1] = {
            ...lastOrderGroup,
            data: lastOrderGroup.data.concat(order),
          };
        } else {
          orders.push({
            title: moment(order.ngaY_CT).format('YYYY-MM'),
            data: [order],
          });
        }
      });

      return {
        ...state,
        orders: orders,
        length: state.length + action.payload.orders.length,
        isLoadMore: action.payload.total < ORDERS_PAGE_SIZE ? false : true,
        isLoading: false,
        loadEnd: true,
      };

    case ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        loadEnd: true,
      };

    case ACTION_REFRESH:
      return {
        ...state,
        orders: [],
        refreshFlag: state.refreshFlag + 1,
      };

    default:
      return state;
  }
};

export {ACTION, getListOrder, refreshListOrder, onFailure, onSuccess};
