import {StyleSheet} from 'react-native';
import {Metrics, Colors, Styles} from '../../../../../themes';

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'column',
    marginBottom: Metrics.margin.huge,
  },
  container: {
    flexDirection: 'row',
  },
  containersearch: {
    width: '85%',
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    paddingHorizontal: Metrics.margin.regular,
    paddingLeft: Metrics.margin.large,
    marginRight: Metrics.margin.regular,
    borderRadius: Metrics.borderRadius.regular,
    marginHorizontal: Metrics.margin.regular,
    borderWidth: 1,
    borderColor: '#ededed',
    height: 40,
    alignItems: 'center',
  },
  input: {
    width: '85%',
    color: '#aaaaaa',
  },
  iconsearch: {
    paddingVertical: 4,
  },
  containerIcon: {
    marginLeft: Metrics.margin.small,
    ...Styles.center,
  },
  option: {
    marginVertical: Metrics.margin.small,
    width: 20,
    height: 20,
  },
});

export default styles;
