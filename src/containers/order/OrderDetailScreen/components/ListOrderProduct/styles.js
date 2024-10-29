import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {},
  itemTitleStyle: {
    lineHeight: 50,
  },
  userContainer: {
    paddingHorizontal: Metrics.margin.large,
    paddingVertical: Metrics.margin.huge,
  },
  dateContainer: {
    flexDirection: 'row',
    marginTop: Metrics.margin.small,
  },
  date: {
    flex: 1,
  },
  status: {
    lineHeight: 40,
    borderWidth: 1,
    borderColor: Colors.appBlue,
    marginHorizontal: Metrics.margin.large,
    textAlign: 'center',
    backgroundColor: '#F3FFFF',
  },
});

export default styles;
