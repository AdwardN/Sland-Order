import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import r from 'reactotron-react-native';
import moment from 'moment';

import styles from './styles';
import {AppText, Divider, EmptyData} from '../../../components';
import Header from '../components/Header';
import ItemInventory from '../components/ItemInventory';
import string from '../../i18n/vn';
import {Colors, Fonts} from '../../../themes';

export default class RenderInventoryScreen extends Component {
  render() {
    const {inventories, showInput, isSearch, loadEnd, keyword} = this.props;
    return (
      <View
        style={[
          styles.container,
          isSearch && !showInput ? {opacity: 0.5} : null,
        ]}>
        <View style={styles.containerTitle}>
          <AppText
            text={string.inventory_screen.list_title}
            bold
            size={Fonts.size.h6}
            style={styles.title}
          />
          <AppText
            text={moment().format('DD/MM/YYYY')}
            color={Colors.appGrayColor}
          />
        </View>
        <Divider />
        <FlatList
          {...this.props}
          data={inventories}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ItemInventory
              updateText={this.props.updateText}
              data={item}
              showInput={showInput}
              activeView={this.props.activeView}
            />
          )}
        />
        <EmptyData
          visible={loadEnd && inventories.length == 0}
          title={'Không có vật tư tồn kho'}
          icon={'ios-list-box'}
        />
      </View>
    );
  }
}
