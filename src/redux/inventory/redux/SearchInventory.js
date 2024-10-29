import r from 'reactotron-react-native';
import moment from 'moment';

const ACTION = 'GET_INVENTORY';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';
const ACTION_CLEAR = ACTION + '_ACTION_CLEAR';

const getInventory = (
  ITS_REC_KHO,
  ITS_REC_VT,
  date = moment().format('YYYY-MM-DD'),
) => ({
  type: ACTION,
  ITS_REC_KHO,
  ITS_REC_VT,
  date,
});

const onSuccess = payload => ({
  type: ACTION_SUCCESS,
  payload,
});

const onFailure = error => ({
  type: ACTION_ERROR,
  error,
});

const clear = () => ({
  type: ACTION_CLEAR,
});

const initialState = {
  inventory: [],
  error: '',
};

export {ACTION, clear, onSuccess, onFailure, getInventory};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
        inventory: [],
        error: '',
      };

    case ACTION_CLEAR:
      return {
        ...state,
        inventory: [],
      };

    case ACTION_SUCCESS:
      return {
        ...state,
        inventory: action.payload.map(e => {
          return {
            ...e,
            toN_INSERT: e.toN00,
          };
        }),
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
