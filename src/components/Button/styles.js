import { StyleSheet } from 'react-native'
import { Metrics, Styles } from '../../themes'

const styles = StyleSheet.create({
  container: {
    borderRadius: Metrics.borderRadius.regular,
    ...Styles.center
  }
})

export default styles
