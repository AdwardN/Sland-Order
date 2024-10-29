import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../themes';

const styles = StyleSheet.create({
  container: {
    width: '75%',
  },
  contentContainer: {
    borderTopLeftRadius: Metrics.borderRadius.large,
    borderTopRightRadius: Metrics.borderRadius.large,
    backgroundColor: Colors.appWhite,
    alignItems: 'center',
    paddingHorizontal: Metrics.margin.huge,
    paddingVertical: Metrics.margin.huge,
  },
  buttonContainer: {
    marginTop: 0.5,
    height: 45,
    borderBottomLeftRadius: Metrics.borderRadius.large,
    borderBottomRightRadius: Metrics.borderRadius.large,
    backgroundColor: Colors.appWhite,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.margin.huge,
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.overlay5,
  },
  title: {
    marginBottom: 5,
  },
});

export default styles;
