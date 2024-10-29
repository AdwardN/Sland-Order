import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import {AppInput, AppText, Divider} from '../../../../../components';
import strings from '../../../../i18n';
import {Colors, Images} from '../../../../../themes';

export default class SearchInput extends Component {
  static defaultProps = {
    onPress: () => {},
  };

  state = {
    keyword: '',
  };

  clear = () => {
    this.setState({
      keyword: '',
    });
    this.props.onKeywordChange('');
  };

  _onKeywordChange = text => {
    this.setState({
      keyword: text,
    });
    this.props.onKeywordChange(text);
  };

  _onPressAdd = () => {
    this.props.onPressAdd();
  };

  render() {
    const {style, title} = this.props;
    const {keyword} = this.state;

    return (
      <View style={styles.layout}>
        <View style={styles.container}>
          <View style={styles.containersearch}>
            <Ionicons
              name="ios-search"
              size={22}
              color={'#aaaaaa'}
              style={styles.iconsearch}
              autoCapitalize={false}
            />
            <AppInput
              style={styles.input}
              placeholder={strings.search_component.title}
              value={keyword}
              onChangeText={this._onKeywordChange}
            />
            <TouchableOpacity onPress={() => this.props.show(true)}>
              <FastImage source={Images.icOptions} style={styles.option} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={this._onPressAdd}>
            <Ionicons
              name="ios-add-circle"
              size={25}
              color={'#000'}
              autoCapitalize={false}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
