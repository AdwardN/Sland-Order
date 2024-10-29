import { StyleSheet } from 'react-native'
import { Styles, Metrics } from '../../themes'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 50,
    left: 0,
    right: 0,
    ...Styles.center,
    marginHorizontal: Metrics.screenWidth / 10
  },
  content: {
    marginTop: Metrics.margin.small,
    textAlign: 'center'
  },
  title: {
    marginTop: Metrics.margin.regular,
    textAlign: 'center'
  }
})

export default styles
