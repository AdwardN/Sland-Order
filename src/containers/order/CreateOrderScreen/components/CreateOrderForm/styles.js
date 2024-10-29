import {StyleSheet} from 'react-native';
import {Styles, Colors, Metrics} from '../../../../../themes';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.appWhite,
    ...Styles.modalShadow,
    padding: Metrics.margin.large,
    borderTopLeftRadius: Metrics.margin.regular,
    borderTopRightRadius: Metrics.margin.regular,
  },
  input: {
    height: 50,
    borderRadius: Metrics.borderRadius.regular,
    borderWidth: 0.5,
    borderColor: Colors.overlay2,
    marginBottom: Metrics.margin.regular,
    backgroundColor: '#F3F3F3',
  },
});

export default styles;
