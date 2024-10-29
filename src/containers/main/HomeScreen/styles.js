import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerimage: {
    flexDirection: 'row',
    marginHorizontal: Metrics.margin.small,
  },
  title: {
    marginVertical: 25,
    paddingHorizontal: Metrics.margin.regular,
  },
});

export default styles;
