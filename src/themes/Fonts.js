import { Platform } from 'react-native'
const isIOS = Platform.OS === 'ios'
const type = {
  // Regular font
  regular: isIOS ? 'Helveticaneue' : 'helveticaneue',
  bold: isIOS ? 'Helveticaneue-Bold' : 'helveticaneuebold'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 21,
  h6: 19,
  large: 16,
  regular: 14,
  small: 12,
  tiny: 10
}

const style = {
  regular: {
    fontFamily: type.regular,
    fontSize: size.regular
  },
  medium: {
    fontFamily: type.regular,
    fontSize: size.medium
  },
  title: {
    fontFamily: type.bold,
    fontSize: size.large
  }
}

export default {
  type,
  style,
  size
}
