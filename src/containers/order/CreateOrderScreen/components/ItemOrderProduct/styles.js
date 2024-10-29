import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../../../../themes';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    position: 'absolute',
    bottom: 0,
  },
  nameContainer: {
    flex: 1,
    marginLeft: Metrics.margin.regular,
  },
  name: {
    marginBottom: Metrics.margin.small,
  },
  quantity: {
    lineHeight: 30,
    paddingHorizontal: 10,
    borderRadius: Metrics.borderRadius.regular,
    borderColor: Colors.overlay3,
    borderWidth: 1,
    marginRight: Metrics.margin.large,
    minWidth: 50,
    textAlign: 'center',
  },
  iconClose: {
    marginRight: Metrics.margin.large,
  },
});

export default styles;
