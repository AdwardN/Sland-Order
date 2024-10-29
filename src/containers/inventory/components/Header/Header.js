import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import {AppInput, AppText, Divider} from '../../../../components';
import strings from '../../../i18n';
import {Colors, Images} from '../../../../themes';

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
    this.input.blur();
  };

  inputBlur = () => {
    this.input.blur();
  };

  _onSearch = text => {
    this.setState({
      keyword: text,
    });
    this.props.search(text);
  };

  _onPressBack = () => {
    this.props.onPressBack();
  };

  _onFocus = status => {
    if (!status) {
      this.setState({keyword: ''});
      this.input.blur();
    }
    this.props.focus(status);
  };

  render() {
    const {isSearch, disableInsert} = this.props;
    const {keyword} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.containersearch}>
          <Ionicons
            name="ios-search"
            size={22}
            color={'#aaaaaa'}
            autoCapitalize={false}
          />
          <AppInput
            style={styles.input}
            placeholder={'Sản phẩm'}
            value={this.state.keyword}
            onChangeText={this._onSearch}
            onFocus={() => this._onFocus(true)}
            ref={c => (this.input = c)}
          />
        </View>
        {!isSearch ? (
          <TouchableOpacity
            onPress={this.props.insertForm}
            style={[styles.containericon, {opacity: disableInsert ? 0.5 : 1}]}>
            <Ionicons
              name="ios-add-circle"
              size={25}
              color={'#000'}
              autoCapitalize={false}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => this._onFocus(false)}
            style={styles.containericon}>
            <AppText text={'Hủy'} color={Colors.overlay4} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
