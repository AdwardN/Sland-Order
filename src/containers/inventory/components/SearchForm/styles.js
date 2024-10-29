import {StyleSheet} from 'react-native';
import {Metrics, Colors, Styles} from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 45,
    backgroundColor: Colors.appWhite,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight - 175,
  },
  buttonItem: {
    flex: 1,
    height: 50,
    paddingHorizontal: Metrics.margin.large,
    justifyContent: 'center',
  },
});

export default styles;
