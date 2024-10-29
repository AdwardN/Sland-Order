import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import {AppText} from '..';
import {Colors, Metrics} from '../../themes';

class Button extends Component {
  static defaultProps = {
    onPress: () => {},
  };

  _onPress = () => {
    this.props.onPress();
  };

  render() {
    const {style, height, title, color, titleColor} = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: color ? color : Colors.appColorOrange,
            height: height ? height : Metrics.btnHeight,
          },
          style,
        ]}
        onPress={this._onPress}>
        <AppText
          text={title.toUpperCase()}
          bold
          color={titleColor ? titleColor : 'white'}
        />
      </TouchableOpacity>
    );
  }
}

export default Button;
