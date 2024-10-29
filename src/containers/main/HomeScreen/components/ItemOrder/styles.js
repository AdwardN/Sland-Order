import {StyleSheet} from 'react-native';
import {Metrics, Colors, Styles} from '../../../../../themes';

const styles = StyleSheet.create({
  container: {
    paddingVertical: Metrics.margin.huge,
    flexDirection: 'row',
  },
  infoContainer: {
    paddingHorizontal: Metrics.margin.large,
  },
  itemText: {
    paddingVertical: Metrics.margin.small,
  },
  itemNumber: {
    backgroundColor: '#C2E8FF',
    height: 35,
    paddingHorizontal: Metrics.margin.regular,
    borderRadius: Metrics.borderRadius.regular,
    marginVertical: Metrics.margin.regular,
    borderWidth: 1,
    borderColor: Colors.appLightGrayColor,
    ...Styles.center,
    marginBottom: Metrics.margin.large,
  },
  statusContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: Metrics.margin.regular,
  },
  divider: {
    position: 'absolute',
  },
});

export default styles;
