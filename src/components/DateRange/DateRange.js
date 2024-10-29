import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';
import PropTypes from 'prop-types';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import r from 'reactotron-react-native';

import styles from './styles';
import {Metrics, Fonts, Colors} from '../../themes';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  monthNamesShort: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  dayNames: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  dayNamesShort: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  today: 'Hôm nay',
};
LocaleConfig.defaultLocale = 'fr';

export default class DateRange extends Component {
  static propTypes = {
    type: PropTypes.string,
    style: PropTypes.object,
  };

  state = {
    date: '',
  };

  _handleBackdropPress = () => {
    this.props.onBackdropPress();
  };

  _handleDateChange = day => {
    this.props.onDateChange(day);
  };

  render() {
    const {visible} = this.props;
    return (
      <Modal
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}
        isVisible={visible}
        backdropColor={Colors.overlay3}
        onBackdropPress={this._handleBackdropPress}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={styles.container}>
          <Calendar
            style={{
              width: '100%',
              paddingBottom: 5,
              borderRadius: Metrics.borderRadius.regular,
            }}
            theme={{
              textSectionTitleColor: Colors.appTextBlack,
              textDayHeaderFontSize: Fonts.size.regular,
              // monthTextColor: Colors.appWhite,
              textMonthFontWeight: '600',
              textMonthFontSize: Fonts.size.large,
            }}
            renderArrow={direction => (
              <Icon
                name={
                  direction == 'left' ? 'ios-arrow-back' : 'ios-arrow-forward'
                }
                size={25}
                color={Colors.appColorGreen}
              />
            )}
            // Initially visible month. Default = Date()
            current={moment().format('YYYY-MM-DD')}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            // Handler which gets executed on day press. Default = undefined
            onDayPress={this._handleDateChange}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'MMMM yyyy'}
            {...this.props}
          />
        </View>
      </Modal>
    );
  }
}
