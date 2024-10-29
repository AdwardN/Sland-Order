import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import r from 'reactotron-react-native';

import styles from './styles';
import {AppText} from '../../../components';

export default class Image extends Component {
  _onPressDetail = item => {
    this.props.pressDetail(item);
  };

  render() {
    const dataImage = this.props.data;
    let data = [];
    for (let i = 0; i < dataImage.length; i += 3) {
      if (i == dataImage.length - 1) {
        data.push({datadefault: dataImage[i]});
        break;
      }
      data.push(
        {datadefault: dataImage[i], datanext: dataImage[i + 1]},
        i + 1 <= dataImage.length ? {datadefault: dataImage[i + 2]} : null,
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <View style={styles.container}>
              {item.datadefault ? (
                <TouchableOpacity
                  style={
                    item.datanext ? styles.buttonimage : styles.buttonimagefull
                  }
                  onPress={() => this._onPressDetail(item.datadefault.id)}>
                  <FastImage
                    style={styles.image}
                    source={{
                      uri:
                        'https://r-ec.bstatic.com/images/hotel/max1024x768/435/43570642.jpg',
                    }}
                  />
                </TouchableOpacity>
              ) : null}
              {item.datanext ? (
                <TouchableOpacity
                  style={styles.buttonimage}
                  onPress={() => this._onPressDetail(item.datanext.id)}>
                  <FastImage
                    style={styles.image}
                    source={{
                      uri:
                        'https://r-ec.bstatic.com/images/hotel/max1024x768/435/43570642.jpg',
                    }}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          )}
        />
      </View>
    );
  }
}
