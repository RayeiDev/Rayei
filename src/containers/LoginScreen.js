import React  from 'react';
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
import { userLogin } from '../actions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Validations from '../util/Validations'
import * as asyncStorage from '../util/asyncStorage'
class LoginScreen extends BaseComponent {
  
    state = {
        emailOrMobile: '',
        password: '',
    }


    static propTypes = {
        userLogin: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        userData: PropTypes.object,

    }
    goToSignUp = () => {
        this.props.navigation.navigate(Constants.SCREEN_SIGNUP, {});
    }
    goToForgotPassword = () => {
        this.props.navigation.navigate(Constants.SCREEN_FORGOT_PASSWORD, {});
    }

    goToDashboard = () => {
        this.props.navigation.replace(Constants.SCREEN_DASHBOARD, {});
    }

    callLogin = () => {
        const { emailOrMobile, password } = this.state;
        if (Validations.isValidUserName(emailOrMobile, true) && Validations.isValidPassword(password, true)) {
            this.props.userLogin({
                username: emailOrMobile,
                password: password,
            });
        }
    }

    callForgotPassword = () => {
        const { emailOrMobile, password } = this.state;
        this.props.userLogin({
            username: emailOrMobile,
            password: password,
        });
    }

    componentDidUpdate(prevProps) {
        console.log('this.props.userData', this.props.userData);

        if (this.props.userData && prevProps.userData !== this.props.userData) {
            this.showToast(strings('loginSuccessfully'))
            this.proceedFurther();
        }
    }

    proceedFurther = async () => {
        await asyncStorage.setItem(asyncStorage.KEY_USERDATA, JSON.stringify(this.props.userData.response))
        this.goToDashboard();
    };

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

                        <View style={{ marginTop: Dimens.px_20, alignItems: 'center', justifyContent: 'center' }}>
                            <CommonText title={strings('welcomeBack')}
                                fontFamily={fonts.font_medium}
                                fontSize={Dimens.px_35}
                                color={Colors.textColor}></CommonText>
                            <CommonText title={strings('emailAndPassword')}
                                fontFamily={fonts.font_bold}
                                fontSize={Dimens.px_15}
                                textAlign={'center'}
                                color={Colors.textColor}></CommonText>
                        </View>

                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: Colors.colorPrimary, borderTopStartRadius: Dimens.px_25,
                        borderTopEndRadius: Dimens.px_25, elevation: Dimens.px_5
                    }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: Dimens.px_30, paddingLeft: Dimens.px_35, paddingRight: Dimens.px_35 }}>
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
                                placeholder={strings('emailOrUsername')}
                                onChangeText={(value) => {
                                    this.setState({ emailOrMobile: value })
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
                                onButtonPress={() => this.callLogin()}
                                backgroundColor={Colors.colorAccent}
                                buttonWidth={'100%'}
                                buttonHeight={Dimens.px_60}
                                marginTop={Dimens.px_30}
                                title={strings('login')}
                                textColor={Colors.white}
                            >
                            </CommonButton>
                            <TouchableOpacity onPress={this.goToForgotPassword}>
                                <CommonText title={strings('forgotPassword')}
                                    fontFamily={fonts.font_bold}
                                    fontSize={Dimens.px_14}
                                    marginTop={Dimens.px_15}
                                    color={Colors.textColor}></CommonText>
                            </TouchableOpacity>


                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                            <View style={{ flex: 1 }}></View>
                            <TouchableOpacity onPress={this.goToSignUp}>
                                <CommonText title={strings('signup')}
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
    userData: state.app.userData
});

const mapDispatchToProps = {
    userLogin,
};

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);

export default Login;
