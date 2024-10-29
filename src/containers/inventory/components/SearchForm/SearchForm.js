import React, {Component} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import r from 'reactotron-react-native';

import styles from './styles';
import {AppText, Divider} from '../../../../components';

export default class SearchForm extends Component {
  render() {
    const {data} = this.props;

    return (
      <FlatList
        keyboardShouldPersistTaps="always"
        style={styles.container}
        data={data}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.buttonItem}
            onPress={() => this.props.detail(item.itS_REC_VT)}>
            <AppText text={item.teN_VT} />
          </TouchableOpacity>
        )}
      />
    );
  }
}
