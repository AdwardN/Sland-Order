import React, {Component} from 'react';
import {View} from 'react-native';

import styles from './styles';
import {AppText} from '../../../../../components';
import {Colors} from '../../../../../themes';
import strings from '../../../../i18n';

export default class Title extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppText
          style={styles.text}
          text={strings.login_screen.title}
          color={Colors.appColorGreen}
          bold
          center
        />
      </View>
    );
  }
}
