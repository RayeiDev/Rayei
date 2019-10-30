import React, { Component } from 'react';
import { View, Dimensions, Text, Image, Button } from 'react-native';
import BaseComponent from '../common/components/BaseComponent'
import * as Styles from '../common/values/Styles'
import * as Colors from '../common/values/Colors'
import * as Constants from '../common/values/Constants'
import * as asyncStorage from '../util/asyncStorage'


export default class Splash extends BaseComponent {

    render() {
        return (<View style={{ backgroundColor: Colors.white, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../../assets/images/logo.png')}
                resizeMode={'center'}></Image>

        </View>)
    }


    componentDidMount() {
        setTimeout(() => {
          this.proceedFurther()
        }, 1000);

    }

    proceedFurther = async () => {
        const userData = await asyncStorage.getItem(asyncStorage.KEY_USERDATA);
        if (userData !== null
            && userData !== undefined
            && userData !== '') {
            this.props.navigation.replace(Constants.SCREEN_DASHBOARD, {});
        } else {
            this.props.navigation.replace(Constants.SCREEN_LOGIN_SIGNUP, {});
        }
    };
    
}
