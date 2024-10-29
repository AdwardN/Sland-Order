import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../../../../themes';
import {Platform} from 'react-native';

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  containerItem: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: Metrics.margin.regular,
  },
  containerItemInfo: {
    flexDirection: 'column',
    paddingHorizontal: Metrics.margin.regular,
    paddingVertical: Metrics.margin.small,
  },
  input: {
    width: '104%',
    height: Platform.OS == 'ios' ? 30 : 35,
    marginLeft: -Metrics.margin.regular,
  },
  payment: {
    width: '60%',
    height: 30,
    justifyContent: 'center',
  },
  title: {
    width: Metrics.screenWidth / 2.5,
  },
});

export default styles;
