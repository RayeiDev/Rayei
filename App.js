/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Easing, Animated } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './src/containers/Splash'
import LoginScreen from './src/containers/LoginScreen'
import SignUpScreen from './src/containers/SignUpScreen'
import Dashboard from './src/containers/dashboard/Dashboard'
import LoginSignUpOptionScreen from './src/containers/LoginSignUpOptionScreen'
import BaseComponent from './src/common/components/BaseComponent'
import * as Constants from './src/common/values/Constants'

export default class App extends BaseComponent {

  render() {
    const AppContainer = createAppContainer(AppStackNavigator)
    return (
      <AppContainer></AppContainer>
    )
  }

}


const AppStackNavigator = createStackNavigator({

  [Constants.SCREEN_SPLASH]: {
    screen: Splash, navigationOptions: {
      header: null
    }
  },
  [Constants.SCREEN_LOGIN_SIGNUP]: {
    screen: LoginSignUpOptionScreen, navigationOptions: {
      header: null
    }
  },
  [Constants.SCREEN_LOGIN]: {
    screen: LoginScreen, navigationOptions: {
      header: null
    }
  },
  [Constants.SCREEN_SIGNUP]: {
    screen: SignUpScreen, navigationOptions: {
      header: null
    }
  },
  [Constants.SCREEN_DASHBOARD]: {
    screen: Dashboard, navigationOptions: {
      header: null,
    }
  }
}, {
  initialRouteName: Constants.SCREEN_DASHBOARD,
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;
      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0],
      });
      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });
      return { opacity, transform: [{ translateX: translateX }] };
    },
  })
}



);

