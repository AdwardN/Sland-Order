import {StyleSheet} from 'react-native';
import {Metrics, Colors, Styles} from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reset: {
    marginRight: Metrics.margin.regular,
  },
  btnInsert: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: Colors.appColorOrange,
    width: '90%',
    paddingVertical: Metrics.margin.huge,
    borderRadius: Metrics.borderRadius.regular,
  },
  containerList: {
    flex: 1,
  },
  containerBottom: {
    ...Styles.center,
    paddingVertical: Metrics.margin.regular,
  },
});

export default styles;
