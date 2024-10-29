import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import {IconBack, AppText} from '../../../components';
import {Colors} from '../../../themes';

export default class SupportScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Thông tin công ty',
    headerLeft: (
      <IconBack
        size={25}
        color={Colors.appTextBlack}
        onPress={() => {
          navigation.goBack();
        }}
      />
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        <AppText
          style={styles.text}
          text={'Công Ty CP Xây Dựng Và Đầu Tư Phát Triển Sland'}
          bold
        />
        <Text style={styles.text}>
          <AppText text={'Địa chỉ: '} bold />
          <AppText text={'Số 49, Ngõ 1295 Giải Phóng, Q. Hoàng Mai,Hà Nội'} />
        </Text>
        <Text style={styles.text}>
          <AppText text={'Điện thoại: '} bold />
          <AppText text={'(024) 73031335'} />
        </Text>
        <Text style={styles.text}>
          <AppText text={'Email: '} bold />
          <AppText text={'slandjsc.com@gmail.com'} />
        </Text>
      </View>
    );
  }
}
