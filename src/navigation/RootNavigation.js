import React from 'react';
import {View, Easing, Animated, Platform} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {StackActions, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import r from 'reactotron-react-native';

import {Styles, Metrics, Fonts, Colors} from '../themes';

import Home from '../containers/main/Home';
import LoginScreen from '../containers/main/LoginScreen';
import ForgotScreen from '../containers/main/ForgotPasswordScreen';
import CreateAccountScreen from '../containers/main/CreateAccountScreen';
import LauncherScreen from '../containers/main/LauncherScreen';
import InsertInventoryScreen from '../containers/inventory/InsertScreen';
import CreateOrderScreen from '../containers/order/CreateOrderScreen';
import OrderDetailScreen from '../containers/order/OrderDetailScreen';
import SupportScreen from '../containers/setting/SupportScreen';
import ChangeScreen from '../containers/main/ChangePasswordScreen';
import PaymentScreen from '../containers/payment/PaymentScreen';

const transitionConfig = sceneProps => {
  return {
    transitionSpec: {
      duration: Platform.OS == 'ios' ? 500 : 200,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {position, layout, scene} = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0],
      });

      const slideFromRight = {transform: [{translateX}]};

      return slideFromRight;
    },
  };
};

// Manifest of possible screens
const AppNavigator = createStackNavigator(
  {
    LauncherScreen: {screen: LauncherScreen},
    Home: {screen: Home},
    LoginScreen: {screen: LoginScreen},
    InsertInventoryScreen: {screen: InsertInventoryScreen},
    CreateOrderScreen: {screen: CreateOrderScreen},
    OrderDetailScreen: {screen: OrderDetailScreen},
    SupportScreen: {screen: SupportScreen},
    ForgotScreen: {screen: ForgotScreen},
    ChangeScreen: {screen: ChangeScreen},
    PaymentScreen: {screen: PaymentScreen},
    CreateAccountScreen: {screen: CreateAccountScreen},
  },
  {
    // Default config for all screens
    // headerMode: 'none',
    initialRouteName: 'LauncherScreen',
    defaultNavigationOptions: {
      headerStyle: {
        height: Metrics.navHeight,
        borderBottomWidth: 0,
        elevation: 0,
        paddingTop: Metrics.statusBarHeight,
      },

      headerTintColor: Colors.appTextBlack,
      headerTitleStyle: {
        color: Colors.appTextBlack,
        fontSize: Fonts.size.regular,
        textAlign: 'center',
        flex: 1,
        fontWeight: '600',
      },
      headerBackTitle: null,
      headerBackTitleStyle: {
        width: 20,
        height: 20,
      },
    },
    transitionConfig,
  },
);

const PrimaryNav = createAppContainer(AppNavigator);

class ReduxNavigation extends React.Component {
  componentWillReceiveProps = nextProps => {
    if (this.props.stack != nextProps.stack) {
      var routeName = nextProps.screen;
      var data = nextProps.data;

      this.navigator.dispatch({
        type: 'Navigation/NAVIGATE',
        routeName,
        params: data ? {...data} : {},
      });
    }

    if (this.props.resetStack != nextProps.resetStack) {
      routeName = nextProps.screen;
      data = nextProps.data;

      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: routeName,
            params: data ? {...data} : {},
          }),
        ],
      });

      this.navigator.dispatch(resetAction);
    }

    if (this.props.removeStack != nextProps.removeStack) {
      var routeName = nextProps.screen;
      var data = nextProps.data;

      this.navigator.dispatch({
        type: 'Navigation/REPLACE',
        routeName,
        params: data ? {...data} : {},
      });
    }
  };

  render() {
    return (
      <View style={Styles.container}>
        <PrimaryNav
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    screen: state.navigationRedux.screen,
    data: state.navigationRedux.data,
    stack: state.navigationRedux.stack,
    resetStack: state.navigationRedux.resetStack,
    removeStack: state.navigationRedux.removeStack,
  };
}
export default connect(mapStateToProps)(ReduxNavigation);
