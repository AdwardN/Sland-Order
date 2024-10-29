import axios from './AxiosVLSConfig';
import FormData from 'form-data';

const REGISTER = '/ITSKHMB/CreateITSKHMB';

const register = async info => {
  const data = {
    ITS_REC_KH: '',
    TEN_KH: info.TEN_KH,
    DIA_CHI: info.DIA_CHI,
    DIEN_THOAI: info.DIEN_THOAI,
    EMAIL: info.EMAIL,
    PASSWORDCUST: info.PASSWORDCUST,
  };
  console.log('======');
  console.log(data);

  var result = axios.post(REGISTER, data);

  console.log(result);
  return result;
};

export default {
  register,
};
