import {StyleSheet} from 'react-native';
import {Styles, Colors} from '../../../themes';

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
    ...Styles.center,
    backgroundColor: Colors.appWhite,
  },
  logo: {
    width: 80,
    height: 80,
  },
});

export default styles;
