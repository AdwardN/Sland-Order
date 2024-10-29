import {StyleSheet} from 'react-native';
import {Metrics, Styles} from '../../../themes';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.margin.large,
    ...Styles.center,
  },
  text: {
    paddingVertical: Metrics.margin.large,
  },
});

export default styles;
