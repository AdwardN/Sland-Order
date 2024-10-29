import axios from './AxiosConfig';
import FormData from 'form-data';
import {ORDERS_PAGE_SIZE} from '../helpers/Constants';

const GET_PAYMENT = '/ITSHTTT/Read';

const getPayment = async () => {
  return axios.get(GET_PAYMENT);
};

export default {
  getPayment,
};
