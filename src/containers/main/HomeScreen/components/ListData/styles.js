import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stickyHeader: {
    height: 50,
    lineHeight: 50,
    backgroundColor: '#96D6FF',
    paddingLeft: Metrics.margin.large,
  },
});

export default styles;
