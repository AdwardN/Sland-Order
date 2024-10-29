import {StyleSheet} from 'react-native';
import {Metrics, Colors, Styles} from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  infoContainer: {
    paddingHorizontal: Metrics.margin.regular,
    paddingVertical: Metrics.margin.huge,
    flex: 1,
  },
  itemText: {
    paddingVertical: Metrics.margin.small,
  },
  itemNumber: {
    backgroundColor: '#C2E8FF',
    height: 35,
    paddingHorizontal: Metrics.margin.regular,
    borderRadius: Metrics.borderRadius.regular,
    marginVertical: Metrics.margin.tiny,
    borderWidth: 1,
    borderColor: Colors.appLightGrayColor,
    ...Styles.center,
  },
  itemInput: {
    backgroundColor: Colors.appWhite,
    height: 35,
    borderRadius: Metrics.borderRadius.regular,
    paddingRight: Metrics.margin.regular,
    marginVertical: Metrics.margin.tiny,
    borderWidth: 1,
    borderColor: Colors.appLightGrayColor,
    ...Styles.center,
  },
  statusContainer: {
    ...Styles.center,
    paddingHorizontal: Metrics.margin.regular,
    marginVertical: Metrics.margin.regular,
  },
  itemStatus: {
    right: Metrics.margin.regular,
  },
  divider: {
    position: 'absolute',
    bottom: 0,
  },
  input: {
    color: Colors.appRed,
  },
});

export default styles;
