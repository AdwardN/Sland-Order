import { StyleSheet } from 'react-native'
import { Metrics } from '../../themes'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: Metrics.margin.small,
    paddingHorizontal: Metrics.margin.small
  },
  desc: {
    marginBottom: Metrics.margin.large
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: Metrics.margin.large
  }
})

export default styles
