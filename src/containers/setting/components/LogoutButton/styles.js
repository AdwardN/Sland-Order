import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeeef',
    alignItems: 'center',
    paddingVertical: Metrics.margin.huge,
  },
  itemMenuContainer: {
    height: 40,
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.overlay5,
    borderRadius: Metrics.borderRadius.small,
  },
});

export default styles;
