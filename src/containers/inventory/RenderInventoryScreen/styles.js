import {StyleSheet} from 'react-native';
import {Metrics, Colors, Styles} from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    paddingHorizontal: Metrics.margin.regular,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.margin.huge,
    paddingVertical: Metrics.margin.huge,
  },
  title: {
    flex: 1,
  },
});

export default styles;
