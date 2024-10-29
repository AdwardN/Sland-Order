import {StyleSheet} from 'react-native';
import {Metrics} from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#eaeeef',
    paddingHorizontal: Metrics.margin.huge,
    paddingVertical: Metrics.margin.large,
  },
  element: {
    paddingHorizontal: Metrics.margin.huge,
    paddingVertical: Metrics.margin.large,
  },
  company: {
    alignItems: 'center',
    paddingVertical: Metrics.margin.huge,
    paddingBottom: 80,
  },
});

export default styles;
