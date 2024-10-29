import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    height: Metrics.screenHeight / 3,
    borderRadius: Metrics.borderRadius.small,
  },
  buttonimage: {
    marginHorizontal: Metrics.margin.small,
    marginVertical: Metrics.margin.small,
    width: Metrics.screenWidth / 2.15,
    borderRadius: Metrics.borderRadius.small,
  },
  buttonimagefull: {
    width: (Metrics.screenWidth / 2.15 + Metrics.margin.small) * 2,
    marginHorizontal: Metrics.margin.small,
    marginVertical: Metrics.margin.tiny,
    borderRadius: Metrics.borderRadius.small,
  },
});

export default styles;
