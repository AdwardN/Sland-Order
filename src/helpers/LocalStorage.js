import {AsyncStorage} from 'react-native';
import r from 'reactotron-react-native';

const KEY_CURRENT_LOCATION = '@KEY_CURRENT_LOCATION';
const TOKEN = '@TOKEN';

// ---------------------------------------------------------------- SEARCH HISTORY
export const _saveCurrentLocation = async location => {
  try {
    await AsyncStorage.setItem(KEY_CURRENT_LOCATION, JSON.stringify(location));
  } catch (error) {}
};

// ---------------------------------------------------------------- NORIFICATION
export const _getCurrentLocation = async () => {
  try {
    const value = await AsyncStorage.getItem(KEY_CURRENT_LOCATION, '');
    if (value) {
      return JSON.parse(value);
    } else {
      return '';
    }
  } catch (error) {
    return '';
  }
};

export const _saveToken = async token => {
  try {
    await AsyncStorage.setItem(TOKEN, token);
  } catch (error) {}
};

export const _getToken = async () => {
  try {
    const value = await AsyncStorage.getItem(TOKEN, '');
    if (value) {
      return value;
    } else {
      return '';
    }
  } catch (error) {
    return '';
  }
};

export const _saveTimeLogout = async time => {
  try {
    const day = parseFloat(time) / 60 / 60 / 24;
    const d = new Date(new Date().setDate(new Date().getDate() + day));
    await AsyncStorage.setItem(
      TIME_LOGOUT,
      moment(d).format('YYYY-MM-DDTHH:mm:00'),
    );
  } catch (error) {}
};

export const _getTimeLogout = async () => {
  try {
    const value = await AsyncStorage.getItem(TIME_LOGOUT, '');
    if (value) {
      return value;
    } else {
      return '';
    }
  } catch (error) {
    return '';
  }
};
