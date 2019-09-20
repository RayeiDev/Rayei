import React, { Component } from 'react';
import { View, Image } from 'react-native';
import BaseComponent from '../common/components/BaseComponent'
import * as Colors from '../common/values/Colors'
import * as fonts from '../common/values/fonts'
import { strings } from '../i18n/i18n';
import * as Constants from '../common/values/Constants'
import CommonHeader from '../common/components/CommonHeader'
import CommonButton from '../common/components/CommonButton'
import CommonText from '../common/components/CommonText'

export default class LoginSignUpOptionScreen extends BaseComponent {

    onLoginCLick = () => {
        this.props.navigation.navigate(Constants.SCREEN_LOGIN, {});
    }
    onSignUpCLick = () => {

    }

    render() {
        return (<View style={{ backgroundColor: Colors.white, flex: 1, }}>
            <CommonHeader
                alignSelf='flex-start'
                headerBg={Colors.white}
                tintColor={Colors.colorAccent}
                leftIconPress={this.handleBackButtonClick}
                leftICImagePath={require('../../assets/images/back.png')}
            />
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={{ flex: .55, alignItems: 'center', justifyContent: 'center', }}>
                    <Image
                        style={{ height: 100, width: 100 }}
                        source={require('../../assets/images/user.png')}
                        tintColor={Colors.colorPrimary}
                    ></Image>
                    <View style={{flexDirection:'row',marginTop:20}}>
                    <CommonText title={strings('welcomeTO')}
                        fontFamily={fonts.font_medium }
                        fontSize={40}
                        color={Colors.textColor}></CommonText>
                        <CommonText title={strings('Rayei')}
                        fontFamily={fonts.font_bold}
                        fontSize={40}
                        marginStart={8}
                        color={Colors.colorAccent}></CommonText>
                    </View>
                   
                </View>
                <View style={{
                    flex: .45, backgroundColor: Colors.colorPrimary, borderTopStartRadius: 25,
                    borderTopEndRadius: 25, alignItems: 'center', justifyContent: 'center', elevation: 5
                }}>
                    <CommonButton
                        fontFamily={fonts.font_medium}
                        onButtonPress={this.onLoginCLick}
                        backgroundColor={Colors.colorAccent}
                        buttonWidth={'85%'}
                        marginTop={10}
                        title={strings('login')}
                        textColor={Colors.white}
                    >
                    </CommonButton>
                    <CommonButton
                        fontFamily={fonts.font_medium}
                        onButtonPress={this.onSignUpCLick}
                        backgroundColor={Colors.colorAccent}
                        buttonWidth={'85%'}
                        marginTop={30}
                        title={strings('signup')}
                        textColor={Colors.white}
                    >
                    </CommonButton>


                </View>
            </View>





        </View>)
    }


    componentDidMount() {


    }

}
