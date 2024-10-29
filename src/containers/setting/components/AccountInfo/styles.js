import {StyleSheet} from 'react-native';
import {Metrics} from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  avatar: {
    width: 60,
    height: 60,
    margin: Metrics.margin.large,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: Metrics.margin.small,
  },
  // name: {
  //   marginBottom: Metrics.margin.small,
  // },
  divider: {
    position: 'absolute',
    bottom: 0,
  },
});

export default styles;
