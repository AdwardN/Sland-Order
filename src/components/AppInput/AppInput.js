import React from 'react';
import {TextInput, Platform} from 'react-native';
import PropTypes from 'prop-types';

import {Colors, Fonts, Metrics} from '../../themes';

export default class AppInput extends React.Component {
  clear = () => {
    this.input.clear();
  };

  blur = () => {
    this.input.blur();
  };

  render() {
    const {
      style,
      color = Colors.appTextBlack,
      font = Fonts.type.regular,
      size = Platform.OS == 'ios' ? Fonts.size.regular : Fonts.size.small,
    } = this.props;

    return (
      <TextInput
        ref={input => (this.input = input)}
        clearButtonMode="while-editing"
        placeholderTextColor={Colors.appLightGrayColor}
        allowFontScaling={false}
        onTextChange
        {...this.props}
        style={[
          style,
          {
            paddingLeft: Metrics.margin.regular,
            fontSize: size,
            color: color,
            fontFamily: font,
          },
        ]}
      />
    );
  }
}

TextInput.propTypes = {
  style: PropTypes.array,
  font: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
