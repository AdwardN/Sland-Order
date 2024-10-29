import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import {Colors, Fonts} from '../../themes';

export default class TextView extends React.Component {
  render() {
    const {
      text,
      style,
      color = Colors.appTextBlack,
      font = Fonts.type.regular,
      size = Fonts.size.regular,
      bold = false,
      italic = false,
      center = false,
      right = false,
    } = this.props;

    return (
      <Text
        {...this.props}
        style={[
          {
            fontSize: size,
            color: color,
            fontFamily: font,
            fontWeight: bold ? '600' : '400',
            fontStyle: italic ? 'italic' : 'normal',
            textAlign: center ? 'center' : right ? 'right' : 'left',
          },
          style,
        ]}
        allowFontScaling={false}>
        {text}
      </Text>
    );
  }
}

TextView.propTypes = {
  style: PropTypes.object,
  font: PropTypes.string,
  text: PropTypes.any,
  size: PropTypes.number,
  color: PropTypes.string,
};
