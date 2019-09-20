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
import CommonTextInput from '../common/components/CommonTextInput'

export default class LoginSignUpOptionScreen extends BaseComponent {

    state = {
        emailUsername: '',
        password: '',
    }

    onLoginCLick = () => {

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
                <View style={{ flex: .4, alignItems: 'center', justifyContent: 'center', }}>

                    <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <CommonText title={strings('welcomeBack')}
                            fontFamily={fonts.font_medium}
                            fontSize={35}
                            color={Colors.textColor}></CommonText>
                        <CommonText title={strings('emailAndPassword')}
                            fontFamily={fonts.font_medium}
                            fontSize={14}
                            color={Colors.textColor}></CommonText>
                    </View>

                </View>
                <View style={{
                    flex: .6, backgroundColor: Colors.colorPrimary, borderTopStartRadius: 25,
                    borderTopEndRadius: 25, alignItems: 'center', justifyContent: 'center', elevation: 5
                }}>
                    <CommonTextInput
                        style={{ placeholderTextColor: Colors.gray }}
                        width={'85%'}
                        height={60}
                        marginTop={40}
                        fontFamily={fonts.font_medium}
                        fontSize={20}
                        textAlign={'center'}
                        backgroundColor={Colors.white}
                        color={Colors.textColor}
                        keyboardType={Constants.KEY_BOAD_TYPE_DEFAULT}
                        placeholder={strings('emailOrUsername')}
                        onChangeText={(value) => {
                            this.setState({ emailUsername: value })
                        }}/>
                    <CommonTextInput
                        style={{ placeholderTextColor: Colors.gray }}
                        width={'85%'}
                        height={60}
                        marginTop={30}
                        fontSize={20}
                        fontFamily={fonts.font_medium}
                        textAlign={'center'}
                        backgroundColor={Colors.white}
                        color={Colors.textColor}
                        secure={true}
                        keyboardType={Constants.KEY_BOAD_TYPE_DEFAULT}
                        placeholder={strings('password')}
                        onChangeText={(value) => {
                            this.setState({ emailUsername: value })
                        }}/>

                    <CommonButton
                        fontFamily={fonts.font_medium}
                        onButtonPress={this.onLoginCLick}
                        backgroundColor={Colors.colorAccent}
                        buttonWidth={'85%'}
                        marginTop={30}
                        title={strings('login')}
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
