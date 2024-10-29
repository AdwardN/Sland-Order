import {StyleSheet} from 'react-native';
import {Metrics, Colors, Styles} from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  containertitle: {
    flex: 1,
    marginBottom: Metrics.margin.small,
    justifyContent: 'center',
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
    width: '98%',
    color: '#aaaaaa',
  },
  containericon: {
    marginLeft: Metrics.margin.small,
    ...Styles.center,
  },
  option: {
    marginRight: Metrics.margin.small,
    width: 20,
    height: 20,
  },
});

export default styles;
