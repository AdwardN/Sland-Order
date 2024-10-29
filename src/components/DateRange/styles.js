import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.appWhite,
    alignItems: 'center',
    borderRadius: Metrics.borderRadius.small,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 50,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: Metrics.margin.large,
  },
});

export default styles;
