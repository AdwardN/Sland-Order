import {StyleSheet} from 'react-native';
import {Metrics, Colors, Styles} from '../../../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: Metrics.btnHeight,
    borderRadius: Metrics.borderRadius.regular,
    borderBottomWidth: 0.8,
    backgroundColor: Colors.appWhite,
    marginBottom: Metrics.margin.regular,
    borderBottomColor: Colors.overlay2,
  },
  button: {
    width: '90%',
    height: Metrics.btnHeight,
    backgroundColor: Colors.appColorOrange,
    borderRadius: Metrics.borderRadius.small,
    ...Styles.center,
    marginTop: Metrics.margin.large,
  },
  buttonforget: {
    alignItems: 'center',
    marginTop: Metrics.margin.huge,
  },
});

export default styles;
