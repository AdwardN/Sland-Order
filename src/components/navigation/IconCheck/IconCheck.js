import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import styles from './styles';
import {Colors} from '../../../themes';

export default class IconCheck extends Component {
  static propTypes = {
    onPress: PropTypes.func,
  };

  static defaultProps = {
    onPress: () => {},
  };
  _onPress = () => {
    this.props.onPress();
  };

  render() {
    const {name, size, color} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        hitSlop={{top: 20, bottom: 20, left: 10, right: 10}}
        onPress={this._onPress}>
        <Ionicons
          size={size ? size : 45}
          name={name ? name : 'ios-checkmark'}
          color={color ? color : Colors.appColorGreen}
        />
      </TouchableOpacity>
    );
  }
}
