import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from './styles';
import AppText from '../AppText';
import {Fonts, Colors} from '../../themes';

export default class UpdateModal extends Component {
  onPress = () => {
    this.props.onPress();
  };

  render() {
    const {visible} = this.props;

    return visible ? (
      <View
        style={styles.modalContainer}
        animationType="fade"
        visible={visible}
        transparent="true">
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <AppText
              style={styles.title}
              text="Có bản Update"
              size={Fonts.size.large}
              bold
              color={Colors.appTextBlack}
            />
            <AppText
              text="Bạn cần update ứng dụng để tiếp tục sử dụng ứng dụng"
              center
              checkUpdate
              color={Colors.appTextBlack}
              center
            />
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.9}
            onPress={this.onPress}>
            <AppText
              text="Đi đến Store"
              size={Fonts.size.large}
              bold
              color={Colors.appBlue}
            />
          </TouchableOpacity>
        </View>
      </View>
    ) : null;
  }
}
