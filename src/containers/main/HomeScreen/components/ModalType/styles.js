import {StyleSheet} from 'react-native';
import {Metrics, Colors, Styles} from '../../../../../themes';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: Colors.appBackgroundGrayColor,
    height: Metrics.screenHeight,
    flex: 1,
  },
  buttonClose: {
    position: 'absolute',
    right: 0,
    marginRight: Metrics.margin.regular,
  },
  buttonOK: {
    justifyContent: 'center',
    paddingVertical: Metrics.margin.regular,
    height: 45,
    flex: 1,
    backgroundColor: Colors.appColorOrange,
  },
  buttonCancel: {
    justifyContent: 'center',
    paddingVertical: Metrics.margin.regular,
    height: 45,
    flex: 1,
    backgroundColor: Colors.appWhite,
  },
  header: {
    flexDirection: 'row',
    height: Metrics.navHeight,
    alignItems: 'center',
    backgroundColor: 'white',
    ...Styles.shadow,
    marginBottom: Metrics.margin.small,
  },
  modal: {
    flex: 1,
    margin: 0,
  },
  containerButton: {
    flexDirection: 'row',
    // shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 8,
    shadowOpacity: 0.3,
    backgroundColor: Colors.appWhite,
  },
  filter: {
    flex: 1,
    paddingVertical: Metrics.margin.regular,
    textAlign: 'center',
  },
  containerDate: {
    flexDirection: 'row',
    ...Styles.center,
  },
  date: {
    height: Metrics.btnHeight,
    justifyContent: 'center',
    width: '30%',
  },
  topIcon: {
    width: 20,
    height: 2,
    backgroundColor: Colors.overlay2,
    marginHorizontal: Metrics.margin.regular,
  },
  buttonItem: {
    paddingHorizontal: Metrics.margin.large,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  list: {
    flex: 1,
  },
});

export default styles;
