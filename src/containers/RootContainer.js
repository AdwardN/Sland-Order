import React, {Component} from 'react';
import {View, StatusBar, Platform, Linking} from 'react-native';
import {connect} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import VersionCheck from 'react-native-version-check';

import {Styles} from '../themes';
import RootNavigation from '../navigation/RootNavigation';
import {Indicator, UpdateModal} from '../components';
import {APP_STORE_URL, PLAY_STORE_URL} from '../helpers/Constants';

export class RootContainer extends Component {
  state = {
    isShowIndicator: false,
    updateModalVisible: false,
  };

  componentDidMount() {
    this.checkUpdate();
  }

  checkUpdate = () => {
    VersionCheck.needUpdate().then(async res => {
      if (res.isNeeded) {
        this.setState({updateModalVisible: true});
      }
    });
  };

  goToStore = async () => {
    // const url = await VersionCheck.getStoreUrl({ appID: 1481820786 });
    // R.log(url);
    Linking.openURL(Platform.OS == 'ios' ? APP_STORE_URL : PLAY_STORE_URL); // open store if update is needed.
  };

  componentWillReceiveProps = nextProp => {
    if (this.props.isShowIndicator != nextProp.isShowIndicator) {
      this.setState({isShowIndicator: nextProp.isShowIndicator});
    }
  };

  handlerPressBackDrop = () => {
    this.setState({
      isShowIndicator: false,
    });
  };

  render() {
    const {backDropColor} = this.props;
    const {isShowIndicator, updateModalVisible} = this.state;

    return (
      <View style={Styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <RootNavigation />
        <FlashMessage position="top" />
        <Indicator
          visible={isShowIndicator}
          backdropColor={backDropColor}
          onPressBackDrop={this.onPressBackDrop}
        />
        {/* <UpdateModal visible={updateModalVisible} onPress={this.goToStore} /> */}
      </View>
    );
  }
}

const mapStateToProp = state => ({
  isShowIndicator: state.app.isShowIndicator,
  backDropColor: state.app.backdropColor,
});

const mapDispatchToProp = {};

export default connect(mapStateToProp, mapDispatchToProp)(RootContainer);
