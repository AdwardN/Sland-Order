import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../../../../themes';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.appBackgroundGrayColor,

    borderRadius: Metrics.borderRadius.small,
  },
  title: {
    paddingVertical: Metrics.margin.regular,
  },
  item: {
    height: 50,
    justifyContent: 'center',
    padding: Metrics.margin.regular,
  },
});

export default styles;
