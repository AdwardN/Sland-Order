import React, {Component} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import moment from 'moment';
import r from 'reactotron-react-native';

import styles from './styles';
import {Collapse, AppText, Divider, DateRange} from '../../../../../components';
import strings from '../../../../i18n';

import {Fonts, Colors, Metrics} from '../../../../../themes';
import {OrderStatus} from '../../../../../helpers/Constants';

export default class ModalType extends Component {
  state = {
    datePickerVisible: false,
    dateForm: moment('2019-01-01'),
    dateTo: moment(),
    minDate: moment().format('YYYY-MM-DD'),
    statusId: -1,
    statusOrder: [
      {
        name: strings.orders_screen.order_status.all,
        id: OrderStatus.ALL,
        isActive: true,
      },
      {
        name: strings.orders_screen.order_status.order,
        id: OrderStatus.ORDER,
        isActive: false,
      },
      {
        name: strings.orders_screen.order_status.processing,
        id: OrderStatus.PROCESS,
        isActive: false,
      },
      {
        name: strings.orders_screen.order_status.delivering,
        id: OrderStatus.DELIVERY,
        isActive: false,
      },
      {
        name: strings.orders_screen.order_status.complete,
        id: OrderStatus.COMPLETE,
        isActive: false,
      },
      {
        name: strings.orders_screen.order_status.stop,
        id: OrderStatus.STOP,
        isActive: false,
      },
      {
        name: strings.orders_screen.order_status.cancel,
        id: OrderStatus.CANCEL,
        isActive: false,
      },
    ],
  };

  _onPopUpDate = item => {
    if (!item) {
      var date = '0001-01-01';
    } else {
      date = this.state.dateForm.format('YYYY-MM-DD');
    }
    this.setState({datePickerVisible: true, type: item, minDate: date});
  };

  _onSelected = id => {
    this.setState({
      statusId: id,
      statusOrder: this.state.statusOrder.map(e => {
        return {
          ...e,
          isActive: e.id == id ? true : false,
        };
      }),
    });
  };

  _onFilter = status => {
    if (status) {
      this.props.filter(
        this.state.statusId,
        this.state.dateForm.format('YYYY-MM-DD'),
        this.state.dateTo.format('YYYY-MM-DD'),
        this.state.dateForm.format('YYYY-MM-DD') ==
          this.state.dateTo.format('YYYY-MM-DD') &&
          this.state.dateForm.format('YYYY-MM-DD') ==
            moment().format('YYYY-MM-DD')
          ? false
          : true,
      );
    } else {
      this.setState({
        statusId: 10,
        statusOrder: this.state.statusOrder.map(e => {
          return {
            ...e,
            isActive: e.id == 10 ? true : false,
          };
        }),
        dateForm: moment('2019-01-01'),
        dateTo: moment(),
        minDate: moment().format('YYYY-MM-DD'),
      });
    }
  };

  _onChangeDate = day => {
    if (!this.state.type)
      this.setState({
        datePickerVisible: false,
        dateForm: moment(day.dateString),
        dateTo: moment(day.dateString),
      });
    else {
      this.setState({datePickerVisible: false, dateTo: moment(day.dateString)});
    }
  };

  render() {
    const {visible} = this.props;

    return (
      <Modal
        isVisible={visible}
        style={styles.modal}
        presentationStyle={'overFullScreen'}>
        <View style={styles.container}>
          <View style={styles.header}>
            <AppText
              text={'Bộ lọc'}
              style={styles.filter}
              centerx
              bold
              size={Fonts.size.large}
            />
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => this.props.close(false)}
              hitSlop={{top: 20, bottom: 20, left: 10, right: 10}}>
              <Icons size={35} name="ios-close" />
            </TouchableOpacity>
          </View>
          <Collapse
            renderHeader={<AppText text={'Theo ngày'} bold />}
            renderBody={
              <View style={styles.containerDate}>
                <TouchableOpacity
                  onPress={() => this._onPopUpDate(0)}
                  style={styles.date}
                  hitSlop={{top: 20, bottom: 20, left: 10, right: 10}}>
                  <AppText
                    text={this.state.dateForm.format('DD-MM-YYYY')}
                    center
                  />
                </TouchableOpacity>
                <View style={styles.topIcon} />
                <TouchableOpacity
                  onPress={() => this._onPopUpDate(1)}
                  style={styles.date}
                  hitSlop={{top: 20, bottom: 20, left: 10, right: 10}}>
                  <AppText
                    text={this.state.dateTo.format('DD-MM-YYYY')}
                    center
                  />
                </TouchableOpacity>
              </View>
            }
          />
          <Collapse
            renderHeader={<AppText text={'Theo trạng thái'} bold />}
            renderBody={
              <FlatList
                style={styles.list}
                data={this.state.statusOrder}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    style={[
                      styles.buttonItem,
                      item.isActive ? {backgroundColor: '#F3F3F3'} : null,
                    ]}
                    onPress={() => this._onSelected(item.id)}>
                    <AppText
                      text={item.name}
                      style={{flex: 1, marginLeft: Metrics.margin.large}}
                    />
                    {item.isActive ? (
                      <Icons
                        size={25}
                        name="ios-checkmark"
                        style={{alignItems: 'flex-end'}}
                        color={Colors.appColorGreen}
                      />
                    ) : null}
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <Divider />}
              />
            }
            height={50 * this.state.statusOrder.length}
          />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={() => this._onFilter(false)}>
            <AppText
              text={'Xóa hết'.toUpperCase()}
              bold
              center
              color={Colors.appColorGreen}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOK}
            onPress={() => this._onFilter(true)}>
            <AppText
              text={'Áp dụng'.toUpperCase()}
              bold
              center
              color={Colors.appWhite}
            />
          </TouchableOpacity>
        </View>
        <DateRange
          visible={this.state.datePickerVisible}
          onDateChange={this._onChangeDate}
          minDate={this.state.minDate}
          onBackdropPress={() => {
            this.setState({
              datePickerVisible: false,
            });
          }}
        />
      </Modal>
    );
  }
}
