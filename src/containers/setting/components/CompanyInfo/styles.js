import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: 150,
    backgroundColor: Colors.appWhite,
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
  },
  company: {
    marginTop: 30,
  },
  version: {
    marginVertical: Metrics.margin.regular,
  },
});

export default styles;
