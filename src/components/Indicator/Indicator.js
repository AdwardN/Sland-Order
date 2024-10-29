import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {DotsLoader} from 'react-native-indicator';

import styles from './styles';
import {Colors} from '../../themes';

export default class Indicator extends Component {
  _onPressBackdrop = () => {
    this.props.onPressBackDrop();
  };

  render() {
    const {
      visible,
      backdropColor = 'transparent',
      color = Colors.appWhite,
      containerStyle,
      size = 10,
    } = this.props;

    return visible ? (
      <TouchableOpacity
        style={
          containerStyle
            ? containerStyle
            : [styles.container, {backgroundColor: backdropColor}]
        }
        onPress={this._onPressBackdrop}
        activeOpacity={1}>
        <View style={styles.indicatorContainer}>
          <DotsLoader color={color} size={size} />
        </View>
      </TouchableOpacity>
    ) : null;
  }
}

Indicator.defaultProps = {
  onPressBackDrop: () => {},
};
