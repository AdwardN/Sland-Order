import React, {Component} from 'react';
import {View, SectionList} from 'react-native';
import R from 'reactotron-react-native';

import styles from './styles';
import ItemOrder from '../ItemOrder';
import {AppText, EmptyData} from '../../../../../components';
import {Colors} from '../../../../../themes';
import moment from 'moment';
import strings from '../../../../i18n';

export default class ListData extends Component {
  _renderItem = ({item}) => (
    <ItemOrder data={item} onPressItem={this._onPressItem} />
  );

  _onPressItem = data => {
    this.props.onPressItem(data);
  };

  _onLoadMore = () => {
    this.props.onLoadMore();
  };

  _onRefresh = () => {
    this.props.onRefresh();
  };

  render() {
    const {data, isLoading, loadEnd} = this.props;
    return (
      // <FlatList
      //   style={styles.container}
      //   data={data}
      //   renderItem={this._renderItem}
      //   keyExtractor={this._keyExtractor}
      // />
      <View style={styles.container}>
        <SectionList
          refreshing={isLoading}
          showsVerticalScrollIndicator={false}
          sections={data}
          renderItem={this._renderItem}
          renderSectionHeader={({section: {title}}) => {
            const date = moment(title);
            return (
              <AppText
                style={styles.stickyHeader}
                text={
                  strings.common.date.month +
                  ' ' +
                  date.format('M') +
                  ' ' +
                  strings.common.date.year +
                  ' ' +
                  date.format('YYYY')
                }
                bold
                color={Colors.overlay6}
              />
            );
          }}
          keyExtractor={(item, index) => index}
          onEndReached={this._onLoadMore}
          onEndReachedThreshold={0.4}
          onRefresh={this._onRefresh}
        />

        <EmptyData
          visible={loadEnd && data.length == 0}
          title={'Chưa có đơn hàng'}
          icon={'ios-list-box'}
        />
      </View>
    );
  }
}
