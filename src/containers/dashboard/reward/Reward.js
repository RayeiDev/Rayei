import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
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

    }




    render() {
        return (

            <View style={{ backgroundColor: Colors.white, flex: 1, }}>
                <CommonText title={strings('reward')}
                    fontFamily={fonts.font_bold}
                    fontSize={Dimens.px_15}
                    textAlign={'center'}
                    color={Colors.textColor}></CommonText>
            </View>
        )
    }



}
