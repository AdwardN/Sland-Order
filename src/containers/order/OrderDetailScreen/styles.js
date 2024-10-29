import {StyleSheet} from 'react-native';
import {Metrics} from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: Metrics.margin.regular,
  },
  button: {
    marginHorizontal: Metrics.margin.large,
  },
  buttonUpdate: {
    paddingRight: Metrics.margin.regular,
  },
});

export default styles;
