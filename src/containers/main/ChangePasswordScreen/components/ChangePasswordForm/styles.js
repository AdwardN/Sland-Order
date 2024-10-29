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
    borderColor: Colors.appYellow,
    backgroundColor: Colors.appYellow,
    borderRadius: Metrics.borderRadius.small,
    ...Styles.center,
    marginTop: Metrics.margin.large,
    color: Colors.appWhite,
  },
  error: {
    width: '100%',
    height: 30,
    marginTop: Metrics.margin.large,
  },
});

export default styles;
