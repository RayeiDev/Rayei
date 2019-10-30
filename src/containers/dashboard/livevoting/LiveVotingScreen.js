import React from 'react';
import { View } from 'react-native';
import BaseComponent from '../../../common/components/BaseComponent'
import * as Dimens from '../../../common/values/Dimens'
import * as Colors from '../../../common/values/Colors'
import * as fonts from '../../../common/values/fonts'
import { strings } from '../../../i18n/i18n';
import * as Constants from '../../../common/values/Constants'
import CommonButton from '../../../common/components/CommonButton'
import CommonText from '../../../common/components/CommonText'
import CommonTextInput from '../../../common/components/CommonTextInput'
export default class LiveVotingScreen extends BaseComponent {

    state = {
        votingCode: '',
    }

  
    joinVoting = () => {
        this.props.navigation.navigate(Constants.SCREEN_QUESTIONS, {isLiveVoting:true});
    }

    render() {
        return (

            <View style={{
                backgroundColor: Colors.lightGray, flex: 1, alignItems: 'center',
                justifyContent: 'center',
            }}>
                <View style={{
                    height: 250, width: '90%', alignItems: 'center',justifyContent: 'center',
                    borderTopStartRadius: Dimens.px_5, borderTopEndRadius: Dimens.px_5,
                    borderBottomEndRadius: Dimens.px_5, borderBottomStartRadius: Dimens.px_5,
                    borderWidth: Dimens.px_1,backgroundColor: Colors.white,
                    borderTopColor: Colors.gray, borderBottomColor: Colors.gray, borderLeftColor: Colors.gray, borderRightColor: Colors.gray
                }}>

                    <CommonText title={strings('liveVoting')}
                        fontFamily={fonts.font_bold}
                        fontSize={Dimens.px_30}
                        textAlign={'center'}
                        color={Colors.colorAccent}></CommonText>
                    <CommonTextInput
                        style={{ placeholderTextColor: Colors.textColor }}
                        width={'80%'}
                        height={Dimens.px_40}
                        marginTop={Dimens.px_20}
                        fontFamily={fonts.font_bold}
                        fontSize={Dimens.px_15}
                        textAlign={'center'}
                        backgroundColor={Colors.lightGray}
                        color={Colors.textColor}
                        keyboardType={Constants.KEY_BOAD_TYPE_DEFAULT}
                        placeholder={strings('enterCodeToVote')}
                        onChangeText={(value) => {
                            this.setState({ votingCode: value })
                        }} />
                    <CommonButton
                        fontFamily={fonts.font_medium}
                        onButtonPress={this.joinVoting}
                        backgroundColor={Colors.colorAccent}
                        buttonWidth={'40%'}
                        buttonHeight={Dimens.px_40}
                        marginTop={Dimens.px_30}
                        title={strings('join')}
                        textColor={Colors.white}
                    >
                    </CommonButton>
                </View>

            </View>
        )
    }



}
