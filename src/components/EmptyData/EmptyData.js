import React, {Component} from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {AppText} from '../';
import {Fonts, Colors} from '../../themes';

export default class EmptyData extends Component {
  render() {
    const {icon, title, content, visible} = this.props;
    return visible ? (
      <View style={styles.container}>
        <Ionicons name={icon} size={50} color={Colors.overlay2} />

        <AppText style={styles.title} text={title} size={Fonts.size.regular} />

        <AppText
          style={styles.content}
          text={content}
          size={Fonts.size.small}
          color={Colors.appGrayColor}
        />
      </View>
    ) : null;
  }
}
