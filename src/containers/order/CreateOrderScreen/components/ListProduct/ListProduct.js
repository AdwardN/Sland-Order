import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

import styles from './styles';
import {AppText, Divider} from '../../../../../components';

export default class ListProduct extends Component {
  _renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => this._onPress(item)}>
      <AppText text={item.teN_VT} style={styles.itemTitleStyle} />
    </TouchableOpacity>
  );

  _onPress = product => {
    this.props.onPressProduct(product);
  };

  _keyExtractor = (item, index) => index;

  render() {
    const {data} = this.props;
    return data.length > 0 ? (
      <View style={styles.container}>
        <FlatList
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={() => <Divider />}
        />
      </View>
    ) : null;
  }
}
