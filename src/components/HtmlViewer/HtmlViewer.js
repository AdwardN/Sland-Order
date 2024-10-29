import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';
import HTML from 'react-native-render-html';
import PropTypes from 'prop-types';

import styles from './styles';
import {Metrics, Colors, Fonts} from '../../themes';

export default class Detail extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
  };

  render() {
    const {content = '', textColor = Colors.appTextBlack} = this.props;

    const htmlContent = `${
      content
        // .replace(/(\r\n|\n|\r)/gm, '')
        .replace(/<p[^>]*>/g, '')
        .replace(/<\/p>/g, '<space></space>')
        .replace(/<span[^>]*>/g, '')
        .replace(/<\/span>/g, '<br/>')
        .replace(/<sup[^>]*>/g, '')
        .replace(/<\/sup>/g, '')
        .replace(/font-family: Muli/g, '')
      // .replace(/<ul[^>]*>/g, '')
      // .replace(/<\/ul>/g, '')
    }`;

    return (
      <View style={[styles.container, this.props.style]}>
        <ScrollView>
          <HTML
            html={`<p>${htmlContent}</p>`}
            imagesMaxWidth={Metrics.screenWidth - Metrics.margin.regular * 2}
            ignoredStyles={['height', 'width']}
            line
            baseFontStyle={{
              color: textColor,
              fontSize: Platform.OS == 'ios' ? 15 : 13,
              fontWeight: Platform.OS == 'ios' ? '500' : '400',
              numberOfLines: 2,
              maxLines: 2,
            }}
            allowFontScaling={false}
            renderers={{
              space: () => (
                <View
                  style={{
                    width: '100%',
                    height: 10,
                  }}
                />
              ),
              img: ({src, style, width, height}) => {
                var imageHeight = height;
                var imageWidth = width;
                if (!imageHeight || !imageWidth) {
                  try {
                    imageHeight = style.split('height:')[1].split('px')[0];
                    imageWidth = style.split('width:')[1].split('px')[0];
                  } catch (error) {}
                }

                if (imageHeight && imageWidth) {
                  return (
                    <Image
                      style={{
                        width: Metrics.screenWidth - Metrics.margin.regular * 2,
                        // height: Math.round(
                        //   (Metrics.screenWidth - Metrics.margin.regular * 2) *
                        //     (imageHeight / imageWidth)
                        //)
                      }}
                      source={{uri: src}}
                    />
                  );
                } else {
                  return;
                }
              },
            }}
          />
        </ScrollView>
      </View>
    );
  }
}
