import React, {Component} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import r from 'reactotron-react-native';

import styles from './styles';
import {AppText, Divider} from '../../../../../components';
import strings from '../../../../i18n';

export default class ModalType extends Component {
  render() {
    const {visible, data} = this.props;

    return (
      <Modal isVisible={visible} style={styles.modal}>
        <View style={styles.container}>
          <AppText
            text={strings.payment_screen.paymentTitle}
            center
            style={styles.title}
          />
          <Divider />
          {data.map(item => (
            <View>
              <TouchableOpacity
                style={styles.item}
                onPress={() =>
                  this.props.modalVisible(
                    false,
                    item.teN_HTTT,
                    item.itS_REC_HTTT,
                  )
                }>
                <AppText text={item.teN_HTTT} style={styles.text} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </Modal>
    );
  }
}
