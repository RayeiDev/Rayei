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
import { forgotPassword } from '../actions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Validations from '../util/Validations'
class ForgotPasswordScreen extends BaseComponent {

    state = {
        email: '',
    }


    static propTypes = {
        forgotPassword: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        shouldGoBack: PropTypes.bool.isRequired,
        responseMessage: PropTypes.string.isRequired,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.shouldGoBack !== this.props.shouldGoBack && this.props.shouldGoBack) {
            this.showBackAlert(false,this.props.responseMessage)
        }
    }

    callForgotPassword = () => {
        const { email } = this.state;
        if (Validations.isValidEmail(email, true)) {
            this.props.forgotPassword({
                email: email,
            });
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

                        <View style={{ marginTop: Dimens.px_20, alignItems: 'center', justifyContent: 'center' }}>
                            <CommonText title={strings('forgotPassword')}
                                fontFamily={fonts.font_medium}
                                fontSize={Dimens.px_35}
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
                                placeholder={strings('email')}
                                onChangeText={(value) => {
                                    this.setState({ email: value })
                                }} />


                            <CommonButton
                                fontFamily={fonts.font_medium}
                                onButtonPress={() => this.callForgotPassword()}
                                backgroundColor={Colors.colorAccent}
                                buttonWidth={'100%'}
                                buttonHeight={Dimens.px_60}
                                marginTop={Dimens.px_30}
                                title={strings('submit')}
                                textColor={Colors.white}
                            >
                            </CommonButton>


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
    forgotPassword,
};

const ForgotPassword = connect(
    mapStateToProps,
    mapDispatchToProps
)(ForgotPasswordScreen);

export default ForgotPassword;
