import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../themes';

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.overlay5,
    paddingHorizontal: Metrics.margin.regular,
  },
  body: {
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.overlay5,
  },
});

export default styles;
