import axios from './AxiosConfig';
import FormData from 'form-data';

const LOGIN_WITH_EMAIL = '/User/Login';
const FORGOT_PASSWORD = '/User/ForgotPassword';
const CHANGE_PASSWORD = '/User/ChangePassword';

const loginWithEmail = async (username, password) => {
  const data = new FormData();
  data.append('UserName', username);
  data.append('Password', password);

  var result = axios.post(LOGIN_WITH_EMAIL, data);

  console.log(result);
  return result;
};

const forgotPassword = async username => {
  const data = new FormData();
  data.append('EMAIL', username);

  return axios.post(FORGOT_PASSWORD, data);
};

const changePassword = async (OldPassword, NewPassword, Id) => {
  const data = new FormData();
  data.append('OldPassword', OldPassword);
  data.append('Password', NewPassword);
  data.append('UserName', Id);

  var result = axios.post(CHANGE_PASSWORD, data);
  console.log(result);
  return result;
};

export default {
  loginWithEmail,
  forgotPassword,
  changePassword,
};
