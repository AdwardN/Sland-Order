import axios from 'axios';
import _ from 'lodash';
import BuildConfig, {Environments} from '../config/BuildConfig';
import {_getToken} from '../helpers/LocalStorage';
import {store} from '../redux/ConfigureStore';
import {logout} from '../redux/user/redux/loginWithEmail';
import {ApiResponseStatusCode} from '../helpers/Constants';

const api = axios.create({
  baseURL:
    BuildConfig == Environments.PRODUCTION
      ? 'http://118.70.80.91:8443/api'
      : 'http://118.70.80.91:8443/api',
});

api.interceptors.request.use(async config => {
  const token = await _getToken();
  config.headers.Authorization = 'Bearer ' + token;
  return config;
});

api.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      if (error.response.status == ApiResponseStatusCode.AUTHORIZED) {
        return store.dispatch(logout());
      } else {
        const message =
          _.get(error, 'response.data.error.common') ||
          _.get(error, 'response.data.message') ||
          _.get(error, 'response.data.errors.common');
        return Promise.reject({message, code: error.response.status});
      }
    } else if (error.request) {
      return Promise.reject({common: 'No response was received'});
    }
    return Promise.reject({common: error.message});
  },
);

export default api;
