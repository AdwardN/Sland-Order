import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import codePush from 'react-native-code-push';

import {store, persistor} from '../redux/ConfigureStore';
import '../config/ReactotronConfig';
import RootContainer from './RootContainer';

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE,
};

class App extends Component {
  // componentWillMount() {
  //   codePush.sync({
  //     updateDialog: {
  //       appendReleaseDescription: true,
  //       title: 'Cập nhật phần mềm',
  //       optionalUpdateMessage: 'Bạn cần cập nhật phần mềm để tiếp tục sử dụng',
  //       mandatoryUpdateMessage: 'Bạn cần cập nhật phần mềm để tiếp tục sử dụng',
  //       optionalIgnoreButtonLabel: 'Để sau',
  //       optionalInstallButtonLabel: 'Cập nhật',
  //     },
  //     installMode: codePush.InstallMode.IMMEDIATE,
  //   });
  // }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    );
  }
}

export default codePush(codePushOptions)(App);
