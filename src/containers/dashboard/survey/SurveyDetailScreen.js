import React from 'react';
import { View, Image, ScrollView,TouchableOpacity } from 'react-native';
import BaseComponent from '../../../common/components/BaseComponent'
import * as Colors from '../../../common/values/Colors'
import * as Dimens from '../../../common/values/Dimens'
import * as fonts from '../../../common/values/fonts'
import CommonHeader from '../../../common/components/CommonHeader'
import CommonText from '../../../common/components/CommonText'
import { strings } from '../../../i18n/i18n';
import * as Constants from '../../../common/values/Constants'


export default class SurveyDetailScreen extends BaseComponent {

    state = {
        Survey:
        {
            name: 'First Survey',
            closes_on: 1572373800000,
            prizes: ['Gift card', 'Money', 'Voucher', 'Sample'],
        },
    }

    goToQuestions = () => {
        this.props.navigation.navigate(Constants.SCREEN_QUESTIONS, {isLiveVoting:false});
    }


    render() {
        const { Survey } = this.state;
        return (
            <View style={{ backgroundColor: Colors.lightGray, flex: 1 }}>
                <CommonHeader
                    alignSelf='flex-start'
                    headerBg={Colors.white}
                    tintColor={Colors.colorAccent}
                    leftIconPress={this.handleBackButtonClick}
                    leftICImagePath={require('../../../../assets/images/back.png')}
                />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{
                        marginTop: Dimens.px_30, marginBottom: Dimens.px_30, marginLeft: Dimens.px_10, marginRight: Dimens.px_10,
                         backgroundColor: Colors.white, elevation: Dimens.px_5
                    }}>
                        <View style={{ padding: Dimens.px_10 }}>
                            <CommonText
                                title={Survey.name}
                                fontFamily={fonts.font_medium}
                                textAlign={'left'}
                                fontSize={Dimens.px_25}
                                color={Colors.textColor} />
                            <View style={{ padding: Dimens.px_10, }}>
                                <CommonText
                                    title={'Lorem ipsum sit amet description Lorem ipsum sit amet description Lorem ipsum sit amet description '}
                                    fontFamily={fonts.font_medium}
                                    textAlign={'left'}
                                    numberOfLines={2}
                                    fontSize={Dimens.px_15}
                                    lineHeight={Dimens.px_20}
                                    color={Colors.textColor} />

                                <View style={{ marginTop: Dimens.px_20 }} >
                                    <CommonText
                                        title={strings('questions')}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_25}
                                        color={Colors.colorAccent} />
                                    <CommonText
                                        title={'10'}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        numberOfLines={1}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_25}
                                        color={Colors.textColor} />
                                </View>
                                <View style={{ marginTop: Dimens.px_20 }} >
                                    <CommonText
                                        title={strings('duration')}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_25}
                                        color={Colors.colorAccent} />
                                    <CommonText
                                        title={'10 Minutes'}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        numberOfLines={1}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_25}
                                        color={Colors.textColor} />
                                </View>
                                <View style={{ marginTop: Dimens.px_20 }} >
                                    <CommonText
                                        title={strings('deadline')}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_25}
                                        color={Colors.colorAccent} />
                                    <CommonText
                                        title={'30/10/2019'}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        numberOfLines={1}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_25}
                                        color={Colors.textColor} />
                                </View>
                                <View style={{ marginTop: Dimens.px_20 }} >
                                    <CommonText
                                        title={strings('prize')}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_25}
                                        color={Colors.colorAccent} />
                                    <CommonText
                                        title={Survey.prizes.join()}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        numberOfLines={1}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_25}
                                        color={Colors.textColor} />
                                </View>
                                <View style={{ marginTop: Dimens.px_20 }} >
                                    <CommonText
                                        title={strings('share')}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_25}
                                        color={Colors.colorAccent} />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Image style={{ width: Dimens.px_30, height: Dimens.px_30 }}
                                            resizeMode={'contain'}
                                            tintColor={Colors.textColor}
                                            source={require('../../../../assets/images/email.png')}></Image>
                                        <Image style={{ width: Dimens.px_30, height: Dimens.px_30 }}
                                            resizeMode={'contain'}
                                            tintColor={Colors.textColor}
                                            source={require('../../../../assets/images/share.png')}></Image>

                                        <Image style={{ width: Dimens.px_30, height: Dimens.px_30 }}
                                            resizeMode={'contain'}
                                            tintColor={Colors.textColor}
                                            source={require('../../../../assets/images/attachment.png')}></Image>
                                        <Image style={{ width: Dimens.px_30, height: Dimens.px_30 }}
                                            resizeMode={'contain'}
                                            tintColor={Colors.textColor}
                                            source={require('../../../../assets/images/qr_code.png')}></Image>

                                    </View>
                                </View>

                            </View>
                        </View>
                        <TouchableOpacity onPress={this.goToQuestions} style={{ backgroundColor: Colors.colorAccent, marginTop:Dimens.px_10,height: Dimens.px_50,justifyContent:'center' }}>

                        <CommonText
                                        title={strings('start')}
                                        fontFamily={fonts.font_bold}
                                        textAlign={'center'}
                                        textTransform={'uppercase'}
                                        fontSize={Dimens.px_20}
                                        color={Colors.white} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }



}
