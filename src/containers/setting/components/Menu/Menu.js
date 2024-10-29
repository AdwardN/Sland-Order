import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from './styles';
import FastImage from 'react-native-fast-image';
import {AppText, Divider} from '../../../../components';
import {Fonts, Images, Colors} from '../../../../themes';

export default class Menu extends Component {
  render() {
    const {style} = this.props;
    return (
      <View style={[styles.container, style]}>
        <AppText text="Cài đặt" style={styles.header} bold />
        <TouchableOpacity style={styles.element}>
          <AppText text={'thông báo'.toUpperCase()} />
        </TouchableOpacity>
        <AppText
          text="Thông tin ứng dụng & hổ trợ"
          style={styles.header}
          bold
        />
        <TouchableOpacity onPress={this.props.support} style={styles.element}>
          <AppText text={'hổ trợ'.toUpperCase()} />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          disabled={true}
          style={[styles.element, {opacity: 0.5}]}>
          <AppText text={'điều khoản sử dụng'.toUpperCase()} />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          disabled={true}
          style={[styles.element, {opacity: 0.5}]}>
          <AppText text={'chính sách pháp lý'.toUpperCase()} />
        </TouchableOpacity>
        <Divider />
      </View>
    );
  }
}
