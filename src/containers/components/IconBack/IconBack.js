import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'
import { AppText, Divider } from '../../../components'

export default class IconBack extends Component {
  _onPress = () => {
    this.props.onPress()
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        hitSlop={{ top: 20, bottom: 20, left: 10, right: 10 }}
        onPress={this._onPress}
      >
        <Ionicons
          size={this.props.size}
          style={this.props.style}
          Å
          name='ios-arrow-back'
          style={styles.icon}
        />
      </TouchableOpacity>
    )
  }
}
