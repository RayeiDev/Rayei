import React from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import BaseComponent from '../../../common/components/BaseComponent'
import * as Dimens from '../../../common/values/Dimens'
import * as Colors from '../../../common/values/Colors'
import * as fonts from '../../../common/values/fonts'
import { strings } from '../../../i18n/i18n';
import * as Constants from '../../../common/values/Constants'
import CommonButton from '../../../common/components/CommonButton'
import CommonText from '../../../common/components/CommonText'
import CommonTextInput from '../../../common/components/CommonTextInput'
export default class Reward extends BaseComponent {

    state = {
        rewardData: [
            {
                id: 1,
                title: 'Education'
            },
            {
                id: 1,
                title: 'Sports'
            },
            {
                id: 1,
                title: 'Health'
            },
            {
                id: 1,
                title: 'Tourism'
            },
            {
                id: 1,
                title: 'Transport'
            },
            {
                id: 1,
                title: 'Events'
            },
            {
                id: 1,
                title: 'Transport'
            }
        ]
    }




    render() {
        return (


            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: Colors.white,paddingBottom:Dimens.px_20 }} showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, }}>
                    <View style={{ flex: .25, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: Dimens.px_30 }}>

                            <CommonText title={strings('rewards')}
                                fontFamily={fonts.font_medium}
                                fontSize={Dimens.px_25}
                                numberOfLine={1}
                                color={Colors.textColor}></CommonText>
                            <Image
                                style={{ height: Dimens.px_30, width: Dimens.px_30, marginLeft: Dimens.px_10 }}
                                source={require('../../../../assets/images/qatar.png')}
                                resizeMode={'contain'}
                            ></Image>

                        </View>
                        <CommonButton
                            fontFamily={fonts.font_medium}
                            //onButtonPress={this.goToLogin}
                            backgroundColor={Colors.colorAccent}
                            buttonWidth={'90%'}
                            buttonHeight={Dimens.px_50}
                            marginTop={Dimens.px_30}
                            title={strings('all')}
                            textColor={Colors.white}
                        />
                    </View>
                    <View style={{ flex: .75, }}>
                        {this.state.rewardData.map((item, index) => {
                            return (
                                <CommonButton
                                    key={index}
                                    fontFamily={fonts.font_medium}
                                    //onButtonPress={this.goToLogin}
                                    backgroundColor={Colors.white}
                                    buttonWidth={'90%'}
                                    buttonHeight={Dimens.px_50}
                                    marginTop={Dimens.px_10}
                                    title={item.title}
                                    textColor={Colors.colorAccent}
                                />
                            )

                        })
                        }
                    </View>

                </View>
            </ScrollView>

        )
    }



}
