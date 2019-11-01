import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import BaseComponent from '../../../common/components/BaseComponent'
import * as Colors from '../../../common/values/Colors'
import * as Dimens from '../../../common/values/Dimens'
import * as fonts from '../../../common/values/fonts'
import CommonHeader from '../../../common/components/CommonHeader'
import CommonText from '../../../common/components/CommonText'
import { strings } from '../../../i18n/i18n';
import * as Constants from '../../../common/values/Constants'
import CustomPBar from '../../../common/components/CustomPBar'
import { surveyDetailRequest } from '../../../actions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';


class SurveyDetailScreen extends BaseComponent {

    state = {
        Survey:
        {
            name: 'First Survey',
            closes_on: 1572373800000,
            prizes: ['Gift card', 'Money', 'Voucher', 'Sample'],
        },
    }

    static propTypes = {
        surveyDetailRequest: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        surveyDetail: PropTypes.object,
    }
    static defaultProps = {
        surveyDetail: { name: '' }
    }

    goToQuestions = () => {
        this.props.navigation.navigate(Constants.SCREEN_QUESTIONS, { isLiveVoting: false });
    }
    componentDidMount() {
        const requestUrl = `${Constants.API_SURVEY_DETAIL}${this.props.navigation.getParam('surveyId')}`
        this.props.surveyDetailRequest(requestUrl)
    }

    render() {
        const { Survey } = this.state;
        const { loading, surveyDetail } = this.props;


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
                                title={surveyDetail ? surveyDetail.name : strings('na')}
                                fontFamily={fonts.font_medium}
                                textAlign={'left'}
                                fontSize={Dimens.px_25}
                                color={Colors.textColor} />
                            <View style={{ padding: Dimens.px_10, }}>
                                <CommonText
                                    title={surveyDetail ? surveyDetail.description : strings('na')}
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
                                        lineHeight={Dimens.px_27}
                                        color={Colors.colorAccent} />
                                    <CommonText
                                        title={(surveyDetail && surveyDetail.questions) ? surveyDetail.questions.length : strings('na')}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        numberOfLines={1}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_27}
                                        color={Colors.textColor} />
                                </View>
                                <View style={{ marginTop: Dimens.px_20 }} >
                                    <CommonText
                                        title={strings('duration')}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_27}
                                        color={Colors.colorAccent} />
                                    <CommonText
                                        title={strings('na')}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        numberOfLines={1}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_27}
                                        color={Colors.textColor} />
                                </View>
                                <View style={{ marginTop: Dimens.px_20 }} >
                                    <CommonText
                                        title={strings('deadline')}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_27}
                                        color={Colors.colorAccent} />
                                    <CommonText
                                        title={(surveyDetail && surveyDetail.closes_on) ? moment(surveyDetail.closes_on).format('DD/MM/YYYY') : strings('na')}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        numberOfLines={1}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_27}
                                        color={Colors.textColor} />
                                </View>
                                <View style={{ marginTop: Dimens.px_20 }} >
                                    <CommonText
                                        title={strings('prize')}
                                        fontFamily={fonts.font_medium}
                                        textAlign={'left'}
                                        fontSize={Dimens.px_20}
                                        lineHeight={Dimens.px_27}
                                        color={Colors.colorAccent} />
                                    <View style={{ flexDirection: 'row' }}>
                                        {(surveyDetail && surveyDetail.prizes && surveyDetail.prizes.length) ? (surveyDetail.prizes.map((prize, key) => {
                                            return (
                                                <CommonText
                                                    key={key}
                                                    title={prize.name + (key === surveyDetail.prizes.length - 1 ? '' : ', ')}
                                                    fontFamily={fonts.font_medium}
                                                    textAlign={'left'}
                                                    numberOfLines={1}
                                                    fontSize={Dimens.px_20}
                                                    lineHeight={Dimens.px_27}
                                                    color={Colors.textColor} />
                                            )

                                        })) : <CommonText
                                                title={strings('na')}
                                                fontFamily={fonts.font_medium}
                                                textAlign={'left'}
                                                numberOfLines={1}
                                                fontSize={Dimens.px_20}
                                                lineHeight={Dimens.px_27}
                                                color={Colors.textColor} />}

                                    </View>
                                    </View>
                                    <View style={{ marginTop: Dimens.px_20 }} >
                                        <CommonText
                                            title={strings('share')}
                                            fontFamily={fonts.font_medium}
                                            textAlign={'left'}
                                            fontSize={Dimens.px_20}
                                            lineHeight={Dimens.px_27}
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
                            <TouchableOpacity onPress={this.goToQuestions} style={{ backgroundColor: Colors.colorAccent, marginTop: Dimens.px_10, height: Dimens.px_50, justifyContent: 'center' }}>

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
                    <CustomPBar showProgress={loading} />
            </View>
                )
            }
        
        
        
        }
const mapStateToProps = (state) => ({
                    loading: state.survey.loading,
                surveyDetail: state.survey.surveyDetail,
            });
            
const mapDispatchToProps = {
                    surveyDetailRequest,
};
                
                export default connect(
                    mapStateToProps,
                    mapDispatchToProps
)(SurveyDetailScreen);