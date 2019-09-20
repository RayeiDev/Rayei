import React, { Component } from 'react';
import { View, Dimensions,Text, Image, Button} from 'react-native';
import BaseComponent from '../common/components/BaseComponent'
import * as Styles from '../common/values/Styles'
import * as Colors from '../common/values/Colors'
import * as Constants from '../common/values/Constants'
const { height, width } = Dimensions.get('window');
import { strings } from '../i18n/i18n';

export default class Splash extends BaseComponent {

    render() {
        return (<View style={{ backgroundColor: Colors.white, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../../assets/images/logo.png')}
                resizeMode={'stretch'}></Image>
                <View style={{width:'100%',alignItems:'flex-start'}}>
                {/* <Button  title={strings('Test')}></Button>
                <Text>{strings('Test')}</Text> */}
                </View>
        </View>)
    }


    componentDidMount() {
        setTimeout(() => {
             this.props.navigation.navigate(Constants.SCREEN_LOGIN_SIGNUP, {});
        }, 3000);

    }

}
