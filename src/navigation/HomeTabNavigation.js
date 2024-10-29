import React, {Component} from 'react';
import {View, Switch} from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import FastImage from 'react-native-fast-image';
import {store} from '../redux/ConfigureStore';
import r from 'reactotron-react-native';

import {Metrics, Fonts, Images, Colors} from '../themes';
import {AppText} from '../components';
import HomeScreen from '../containers/main/HomeScreen';
import SettingScreen from '../containers/setting/SettingScreen';
import InventoryScreen from '../containers/inventory/InventoryScreen';
import CreateOrderScreen from '../containers/order/CreateOrderScreen';
import {refreshListOrder} from '../redux/order/redux/getListOrder';
import {refreshInventories} from '../redux/inventory/redux/getListInventory';

const HomeStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    CreateOrderScreen: CreateOrderScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: Metrics.navHeight,
        borderBottomWidth: 0,
        elevation: 0,

        paddingTop: Metrics.statusBarHeight,
      },
      headerTitleStyle: {
        fontSize: Fonts.size.regular,
        textAlign: 'center',
        flex: 1,
      },
    },
  },
);

const SettingStack = createStackNavigator(
  {
    SettingScreen: SettingScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: Metrics.navHeight,
        borderBottomWidth: 0,
        elevation: 0,
        paddingTop: Metrics.statusBarHeight,
      },
      headerTitleStyle: {
        fontSize: Fonts.size.regular,
        textAlign: 'center',
        flex: 1,
      },
    },
  },
);

const InventoryStack = createStackNavigator(
  {
    InventoryScreen: InventoryScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: Metrics.navHeight,
        borderBottomWidth: 0,
        elevation: 0,
        paddingTop: Metrics.statusBarHeight,
      },
      headerTitleStyle: {
        fontSize: Fonts.size.regular,
        textAlign: 'center',
        flex: 1,
      },
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack: HomeStack,
    InventoryStack: InventoryStack,
    SettingStack: SettingStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      const {routeName} = navigation.state;
      return {
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          let iconName;

          switch (routeName) {
            case 'InventoryStack':
              iconName = focused
                ? Images.icInventoryActive
                : Images.icInventory;
              break;

            case 'SettingStack':
              iconName = focused ? Images.icTabUserActive : Images.icTabUser;
              break;

            default:
              iconName = focused ? Images.icOrderActive : Images.icOrder;

              break;
          }

          return (
            <FastImage source={iconName} style={{width: 23, height: 30}} />
          );
        },
        tabBarOnPress: ({navigation, defaultHandler}) => {
          switch (routeName) {
            case 'InventoryStack':
              store.dispatch(refreshInventories());
              break;
            case 'SettingStack':
              break;
            default:
              store.dispatch(refreshListOrder());
              break;
          }
          defaultHandler();
        },
      };
    },
    tabBarOptions: {
      style: {
        height: 50,
      },
      showLabel: false,
    },

    navigationOptions: {
      headerBackTitle: null,
    },
  },
);

export default createAppContainer(TabNavigator);
