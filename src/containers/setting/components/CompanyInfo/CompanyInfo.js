import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import FastImage from 'react-native-fast-image';
import {Images, Fonts, Colors} from '../../../../themes';
import {AppText} from '../../../../components';

export default class CompanyInfo extends Component {
  render() {
    const {version} = this.props;
    return (
      <View style={styles.container}>
        <AppText
          style={styles.company}
          text={'Công ty Cổ Phần Xây Dựng & Đầu Tư Phát Triển'}
          size={Fonts.size.small}
          bold
          color={Colors.overlay6}
        />
        <AppText
          text={'SLAND'.toUpperCase()}
          bold
          size={Fonts.size.small}
          bold
          color={Colors.overlay6}
        />
        <AppText
          style={styles.version}
          text={'Phiên bản ' + version + '.1'}
          size={Fonts.size.small}
          color={Colors.overlay6}
        />
      </View>
    );
  }
}
