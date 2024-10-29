import React, {Component} from 'react';
import {TouchableOpacity, View, LayoutAnimation} from 'react-native';
import r from 'reactotron-react-native';

import styles from './styles';

function Header(header) {
  return header.render;
}

function Body(body) {
  return body.render;
}

export default class Collapse extends Component {
  state = {height: 0, expand: false};

  static defaultProps = {
    renderHeader: () => {},
    renderBody: () => {},
  };

  _Collapse = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expand: !this.state.expand});
  };

  render() {
    const {renderHeader, renderBody, height} = this.props;

    return (
      <View>
        <TouchableOpacity
          style={styles.header}
          activeOpacity={0.8}
          onPress={this._Collapse}>
          <Header render={renderHeader} />
        </TouchableOpacity>
        <View
          style={[
            this.state.expand ? styles.body : null,
            {
              height: this.state.expand ? (height ? height : null) : 0,
              overflow: 'hidden',
              width: '100%',
            },
          ]}>
          <Body render={renderBody} />
        </View>
      </View>
    );
  }
}
