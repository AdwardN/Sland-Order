import axios from './AxiosConfig';
import FormData from 'form-data';
import {ORDERS_PAGE_SIZE} from '../helpers/Constants';
import R from 'reactotron-react-native';

const GET_ORDERS = '/AM91/GetList';
const SEARCH = '/search/ITSVT';
const ORDER = '/AM91/Create';
const UPDATE = '/AM91/Update';

const GET_ORDER_DETAIL = '/AM91/GetListDetailById';
const REMOVE_ORDER = '/AM91/Delete';

const order = async (
  ITS_REC_KH,
  ITS_REC_KHO,
  ITS_REC_HTTT,
  ONG_BA,
  DIEN_THOAI_LH,
  DIA_CHI,
  products,
  itS_REC,
) => {
  const data = {
    ITS_REC_KH: ITS_REC_KH,
    ITS_REC_KHO: ITS_REC_KHO,
    ITS_REC_HTTT: ITS_REC_HTTT,
    ONG_BA: ONG_BA,
    DIEN_THOAI_LH: DIEN_THOAI_LH,
    DIA_CHI: DIA_CHI,
    AD91s: products,
    itS_REC,
  };
  return axios.post(itS_REC ? UPDATE : ORDER, data);
};

const getOrders = async (
  ITS_REC_KH,
  keyword,
  status,
  dateFrom,
  dateTo,
  pageNumber,
) => {
  return axios.get(GET_ORDERS, {
    params: {
      ITS_REC_KH,
      keyword,
      status,
      dateFrom,
      dateTo,
      pageNumber,
      pageSize: ORDERS_PAGE_SIZE,
    },
  });
};

const searchColor = async (keyword, THE_TICH, pageNumber) => {
  return axios.get(SEARCH, {
    params: {
      keyword,
      THE_TICH,
      pageNumber,
      pageSize: 100,
      type: 1,
    },
  });
};

const searchProducts = async (keyword, THE_TICH, pageNumber, ITS_REC_KH) => {
  return axios.get(SEARCH, {
    params: {
      keyword,
      THE_TICH,
      pageNumber,
      pageSize: 100,
      type: 0,
      ITS_REC_KH,
    },
  });
};

const getOrderDetail = async ITS_REC => {
  return axios.get(GET_ORDER_DETAIL, {
    params: {
      ITS_REC,
    },
  });
};

const remove = async ITS_REC => {
  return axios.delete(REMOVE_ORDER, {
    params: {
      ITS_REC,
    },
  });
};

export default {
  getOrders,
  searchProducts,
  searchColor,
  order,
  getOrderDetail,
  remove,
};
