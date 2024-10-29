import {StyleSheet} from 'react-native';
import {Metrics} from '../../../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 320,
  },
  itemContainer: {},
  itemTitleStyle: {
    lineHeight: 50,
  },
  userContainer: {
    paddingHorizontal: Metrics.margin.large,
    paddingVertical: 30,
  },
  dateContainer: {
    flexDirection: 'row',
    marginTop: Metrics.margin.small,
  },
  date: {
    flex: 1,
  },
});

export default styles;
