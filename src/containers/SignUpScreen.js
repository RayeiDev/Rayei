import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import BaseComponent from '../common/components/BaseComponent'
import * as Dimens from '../common/values/Dimens'
import * as Colors from '../common/values/Colors'
import * as fonts from '../common/values/fonts'
import { strings } from '../i18n/i18n';
import * as Constants from '../common/values/Constants'
import CommonHeader from '../common/components/CommonHeader'
import CommonButton from '../common/components/CommonButton'
import CommonText from '../common/components/CommonText'
import CommonTextInput from '../common/components/CommonTextInput'
import CustomPBar from '../common/components/CustomPBar'
import { userSignUp } from '../actions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Validations from '../util/Validations'


class SignUpScreen extends BaseComponent {

    state = {
        email: '',
        password: '',
        mobile: '',
    }

    static propTypes = {
        userSignUp: PropTypes.func.isRequired,
        shouldGoBack: PropTypes.bool.isRequired,
        loading: PropTypes.bool.isRequired,
        responseMessage: PropTypes.string.isRequired,

    }
    goToLogin = () => {
        this.props.navigation.navigate(Constants.SCREEN_LOGIN, {});
    }
    callSignUp = () => {
        const { email, password, mobile } = this.state;
        if (Validations.isValidEmail(email, true) && Validations.isValidMobileNumber(mobile, true) && Validations.isValidPassword(password, true)) {
            this.props.userSignUp({
                email: email,
                password: password,
                mobile: mobile,
                is_company: true
            });
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.shouldGoBack !== this.props.shouldGoBack && this.props.shouldGoBack) {
            this.showBackAlert(false, this.props.responseMessage)
        }
    }


    render() {
        return (

            <View style={{ backgroundColor: Colors.white, flex: 1, }}>
                <CommonHeader
                    alignSelf='flex-start'
                    headerBg={Colors.white}
                    tintColor={Colors.colorAccent}
                    leftIconPress={this.handleBackButtonClick}
                    leftICImagePath={require('../../assets/images/back.png')}
                />
                <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: Colors.white }} showsVerticalScrollIndicator={false}>
                    <View style={{ height: 200, alignItems: 'center', justifyContent: 'center', }}>

                        <View style={{ marginTop: Dimens.px_20, paddingHorizontal: Dimens.px_20, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <CommonText title={strings('join')}
                                    fontFamily={fonts.font_medium}
                                    fontSize={Dimens.px_35}
                                    color={Colors.textColor}></CommonText>
                                <CommonText title={strings('Rayei')}
                                    fontFamily={fonts.font_bold}
                                    fontSize={Dimens.px_35}
                                    marginStart={8}
                                    color={Colors.colorAccent}></CommonText>
                            </View>
                            <CommonText title={strings('createAnAccount')}
                                fontFamily={fonts.font_bold}
                                textAlign={'center'}
                                lineHeight={Dimens.px_20}
                                fontSize={Dimens.px_15}
                                color={Colors.textColor}></CommonText>
                        </View>

                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: Colors.colorPrimary, borderTopStartRadius: Dimens.px_25,
                        borderTopEndRadius: Dimens.px_25, elevation: Dimens.px_5
                    }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: Dimens.px_35, paddingRight: Dimens.px_35 }}>
                            <CommonTextInput
                                style={{ placeholderTextColor: Colors.gray }}
                                width={'100%'}
                                height={Dimens.px_60}
                                marginTop={Dimens.px_40}
                                fontFamily={fonts.font_medium}
                                fontSize={Dimens.px_20}
                                textAlign={'center'}
                                backgroundColor={Colors.white}
                                color={Colors.textColor}
                                keyboardType={Constants.KEY_BOAD_TYPE_DEFAULT}
                                placeholder={strings('email')}
                                onChangeText={(value) => {
                                    this.setState({ email: value })
                                }} />
                            <CommonTextInput
                                style={{ placeholderTextColor: Colors.gray }}
                                width={'100%'}
                                height={Dimens.px_60}
                                marginTop={Dimens.px_30}
                                fontFamily={fonts.font_medium}
                                fontSize={Dimens.px_20}
                                textAlign={'center'}
                                backgroundColor={Colors.white}
                                color={Colors.textColor}
                                keyboardType={Constants.KEY_BOAD_TYPE_PHONE}
                                placeholder={strings('mobile')}
                                onChangeText={(value) => {
                                    this.setState({ mobile: value })
                                }} />
                            <CommonTextInput
                                style={{ placeholderTextColor: Colors.gray }}
                                width={'100%'}
                                height={Dimens.px_60}
                                marginTop={Dimens.px_30}
                                fontSize={Dimens.px_20}
                                fontFamily={fonts.font_medium}
                                textAlign={'center'}
                                backgroundColor={Colors.white}
                                color={Colors.textColor}
                                secure={true}
                                keyboardType={Constants.KEY_BOAD_TYPE_DEFAULT}
                                placeholder={strings('password')}
                                onChangeText={(value) => {
                                    this.setState({ password: value })
                                }} />

                            <CommonButton
                                fontFamily={fonts.font_medium}
                                onButtonPress={() => this.callSignUp()}
                                backgroundColor={Colors.colorAccent}
                                buttonWidth={'100%'}
                                buttonHeight={Dimens.px_60}
                                marginTop={Dimens.px_30}
                                title={strings('signup')}
                                textColor={Colors.white}
                            >
                            </CommonButton>
                            <View style={{ flexDirection: 'row', marginTop: Dimens.px_15, alignItems: 'center' }}>
                                <CommonText title={strings('byJoiningRayie')}
                                    fontFamily={fonts.font_bold}
                                    fontSize={Dimens.px_14}
                                    color={Colors.textColor}></CommonText>
                                <CommonText title={strings('termsOfServices')}
                                    fontFamily={fonts.font_bold}
                                    fontSize={Dimens.px_14}
                                    marginStart={5}
                                    color={Colors.white}></CommonText>
                            </View>


                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                            <View style={{ flex: 1 }}></View>
                            <TouchableOpacity onPress={this.goToLogin}>
                                <CommonText title={strings('login')}
                                    fontFamily={fonts.font_bold}
                                    fontSize={18}
                                    marginTop={Dimens.px_30}
                                    marginRight={Dimens.px_40}
                                    marginBottom={Dimens.px_10}
                                    alignSelf={'flex-end'}
                                    color={Colors.white}></CommonText>
                                <View style={{ backgroundColor: Colors.white, height: Dimens.px_2, marginEnd: Dimens.px_40 }}></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <CustomPBar showProgress={this.props.loading} />
            </View>
        )
    }

}

const mapStateToProps = (state) => ({
    loading: state.loading,
    shouldGoBack: state.shouldGoBack,
    responseMessage: state.response.message,

});

const mapDispatchToProps = {
    userSignUp,
};

const SignUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpScreen);

export default SignUp;