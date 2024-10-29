import React, {Component} from 'react';
import {View} from 'react-native';
import {AppText} from '../../../../components';
import {Fonts, Metrics, Colors} from '../../../../themes';

export default class styles extends Component {
  render() {
    return (
      <View>
        <AppText
          text="Tài khoản"
          bold
          size={Fonts.size.h5}
          style={{
            paddingTop: Metrics.margin.regular,
            paddingLeft: Metrics.margin.regular,
          }}
        />
      </View>
    );
  }
}
