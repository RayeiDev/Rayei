import React, { Component } from 'react';
import { View, Image } from 'react-native';
import BaseComponent from '../common/components/BaseComponent'
import * as Colors from '../common/values/Colors'
import * as fonts from '../common/values/fonts'
import * as Dimens from '../common/values/Dimens'
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
        this.props.navigation.navigate(Constants.SCREEN_SIGNUP, {});
    }

    render() {
        return (<View style={{ backgroundColor: Colors.white, flex: 1, }}>
            <CommonHeader
                alignSelf='flex-start'
                headerBg={Colors.white}
                tintColor={Colors.colorAccent}
                isRTLIconVisibile={false}
                leftIconPress={this.handleBackButtonClick}
                leftICImagePath={require('../../assets/images/back.png')}
            />
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={{ flex: .6, alignItems: 'center', justifyContent: 'center', }}>
                    <Image
                        style={{ height: 90, width: 300 }}
                        source={require('../../assets/images/logo.png')}
                        resizeMode={'center'}
                    ></Image>

                </View>
                <View style={{ flex: .15, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <Image
                            style={{ height: Dimens.px_40, width: Dimens.px_40, marginRight: Dimens.px_10 }}
                            source={require('../../assets/images/qatar.png')}
                            resizeMode={'contain'}
                        ></Image>
                        <CommonText title={'QATAR'}
                            fontFamily={fonts.font_medium}
                            fontSize={Dimens.px_25}
                            numberOfLine={1}
                            color={Colors.textColor}></CommonText>
                        <Image
                            style={{ height: 25, width: 25, marginLeft: Dimens.px_20 }}
                            source={require('../../assets/images/down_arrow.png')}
                            resizeMode={'contain'}
                            tintColor={Colors.textColor}
                        ></Image>
                    </View>
                </View>
                <View style={{
                    flex: .25, backgroundColor: Colors.colorPrimary, borderTopStartRadius: 25,
                    borderTopEndRadius: 25, alignItems: 'center', justifyContent: 'space-around', elevation: 5,
                    paddingLeft: Dimens.px_35, paddingRight: Dimens.px_35, flexDirection: 'row'
                }}>

                    <View style={{
                        width: '40%', height: Dimens.px_50, backgroundColor: Colors.transparent, justifyContent: 'center',
                        alignItems: 'center', borderTopStartRadius: 5, borderTopEndRadius: 5,
                        borderBottomEndRadius: 5, borderBottomStartRadius: 5, borderColor: Colors.white, borderWidth: Dimens.px_2
                    }}>
                        <CommonText title={'ENGLISH'} fontFamily={fonts.font_medium} fontSize={20} color={Colors.white}></CommonText>
                    </View>

                    <View style={{
                        width: '40%', height: Dimens.px_50, backgroundColor: Colors.transparent, justifyContent: 'center',
                        alignItems: 'center', borderTopStartRadius: 5, borderTopEndRadius: 5,
                        borderBottomEndRadius: 5, borderBottomStartRadius: 5, borderColor: Colors.white, borderWidth: Dimens.px_2
                    }}>
                        <CommonText title={'عربى'} fontFamily={fonts.font_medium} fontSize={20} color={Colors.white}></CommonText>
                    </View>

                </View>
            </View>





        </View>)
    }



}
