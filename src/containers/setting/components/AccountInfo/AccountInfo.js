import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import r from 'reactotron-react-native';

import styles from './styles';
import FastImage from 'react-native-fast-image';
import {AppText, Divider} from '../../../../components';
import {Fonts, Images, Colors, Metrics} from '../../../../themes';

export default class AccountInfo extends Component {
  render() {
    const {avatar, name, job} = this.props;

    return (
      <View style={styles.container}>
        <FastImage
          style={styles.avatar}
          source={avatar ? {uri: avatar} : Images.icAvatar}
        />
        <View style={styles.infoContainer}>
          <AppText text={name} size={Fonts.size.regular} bold />
          <AppText
            text={job}
            color={Colors.appGrayColor}
            size={Fonts.size.small}
            style={{marginVertical: Metrics.margin.small}}
          />
          <TouchableOpacity
            style={styles.element}
            onPress={this.props.changePassword}>
            <AppText
              text={'Đổi mật khẩu'.toUpperCase()}
              color={Colors.appBlue}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
