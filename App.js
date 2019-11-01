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
import LanguageScreen from './src/containers/LanguageScreen'
import QuestionScreen from './src/containers/dashboard/QuestionScreen'
import SurveyListScreen from './src/containers/dashboard/survey/SurveyListScreen'
import SurveyDetailScreen from './src/containers/dashboard/survey/SurveyDetailScreen'
import Dashboard from './src/containers/dashboard/Dashboard'
import LoginSignUpOptionScreen from './src/containers/LoginSignUpOptionScreen'
import ForgotPasswordScreen from './src/containers/ForgotPassword'
import BaseComponent from './src/common/components/BaseComponent'
import * as Constants from './src/common/values/Constants'
import { Provider } from 'react-redux';
import {store} from './src/Store';


export default class App extends BaseComponent {
 
  render() {
    const AppContainer = createAppContainer(AppStackNavigator)
    return (
      <Provider store={store}>
        <AppContainer></AppContainer>
      </Provider>
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
  [Constants.SCREEN_FORGOT_PASSWORD]: {
    screen: ForgotPasswordScreen, navigationOptions: {
      header: null
    }
  },
  [Constants.SCREEN_LANGUAGE]: {
    screen: LanguageScreen, navigationOptions: {
      header: null
    }
  },
  [Constants.SCREEN_DASHBOARD]: {
    screen: Dashboard, navigationOptions: {
      header: null,
    }
  },
  [Constants.SCREEN_QUESTIONS]: {
    screen: QuestionScreen, navigationOptions: {
      header: null,
    }
  },
  [Constants.SCREEN_SURVEY_LIST]: {
    screen: SurveyListScreen, navigationOptions: {
      header: null,
    }
  },
  [Constants.SCREEN_SURVEY_DETAIL]: {
    screen: SurveyDetailScreen, navigationOptions: {
      header: null,
    }
  },
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

