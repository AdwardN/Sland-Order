import axios from './AxiosConfig';
import FormData from 'form-data';
import {ORDERS_PAGE_SIZE} from '../helpers/Constants';

const GET_INVENTORY = '/Inventory/GetInventory';
const GET_DETAIL_INVENTORY = '/Inventory/GetSupplieInventory';

const getInventory = async (ITS_REC_KHO, date, pageNumber) => {
  return axios.get(GET_INVENTORY, {
    params: {
      ITS_REC_KHO,
      date,
      pageNumber,
      pageSize: ORDERS_PAGE_SIZE,
    },
  });
};

const getDetailInventory = async (ITS_REC_KHO, ITS_REC_VT, date) => {
  return axios.get(GET_DETAIL_INVENTORY, {
    params: {
      ITS_REC_KHO,
      ITS_REC_VT,
      date,
    },
  });
};

export default {
  getInventory,
  getDetailInventory,
};
