import React from 'react';
import { View, TouchableOpacity, Image, ScrollView } from 'react-native';
import BaseComponent from '../../../common/components/BaseComponent'
import * as Colors from '../../../common/values/Colors'
import * as Dimens from '../../../common/values/Dimens'
import * as fonts from '../../../common/values/fonts'
import CommonHeader from '../../../common/components/CommonHeader'
import CommonText from '../../../common/components/CommonText'
import { strings } from '../../../i18n/i18n';
import RTLIcon from '../../../common/components/RTLIcon';
import * as Constants from '../../../common/values/Constants'
import CustomPBar from '../../../common/components/CustomPBar'
import { surveyListRequest } from '../../../actions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



class SurveyListScreen extends BaseComponent {

    state = {
        Survey: [
            {
                name: 'First Survey',
                closes_on: 1572373800000,
                prizes: ['Gift card', 'Money', 'Voucher', 'Sample'],
            },
            {
                name: 'Second Survey',
                closes_on: 1572201000000,
                prizes: ['Gift card', 'Money', 'Voucher', 'Sample'],
            },
            {
                name: 'Third Survey',
                closes_on: 1572201000000,
                prizes: ['Gift card', 'Money', 'Voucher', 'Sample'],
            },
            {
                name: 'Forth Survey',
                closes_on: 1572201000000,
                prizes: ['Gift card', 'Money', 'Voucher', 'Sample'],
            },
        ],
    }
    static propTypes = {
        surveyListRequest: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        surveyList: PropTypes.array,
    }

    componentDidMount() {
        const requestUrl = `${Constants.API_SURVEY}category__id=${this.props.navigation.getParam('categoryId')}`
        this.props.surveyListRequest(requestUrl)
    }

    goToSurveyDetail = (id) => {
        this.props.navigation.navigate(Constants.SCREEN_SURVEY_DETAIL, {surveyId:id});
    }

    render() {
        const { loading, surveyList } = this.props;
        console.log('render', surveyList);
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
                        flex: 1, paddingLeft: Dimens.px_10, paddingRight: Dimens.px_10,
                        paddingBottom: Dimens.px_50, paddingTop: Dimens.px_20
                    }}>

                        <CommonText title={this.props.navigation.getParam('category')}
                            textAlign={'center'}
                            fontFamily={fonts.font_bold}
                            fontSize={Dimens.px_25}
                            textTransform={'uppercase'}
                            color={Colors.colorAccent}></CommonText>

                        {surveyList ? (surveyList.map((data, key) => {
                            return (
                                <View style={{ paddingBottom: Dimens.px_30, paddingTop: Dimens.px_30, justifyContent: 'flex-end' }} key={key}>
                                    <View style={{ padding: Dimens.px_10, backgroundColor: Colors.white, elevation: Dimens.px_5 }}>
                                        <CommonText
                                            title={data.name}
                                            fontFamily={fonts.font_medium}
                                            textAlign={'center'}
                                            fontSize={Dimens.px_25}
                                            color={Colors.textColor} />
                                        <View style={{ flexDirection: 'row', paddingTop: Dimens.px_10, paddingBottom: Dimens.px_10, flex: 1 }}>
                                            <View style={{ flex: .7, ustifyContent: 'flex-end' }} >
                                                <CommonText
                                                    title={strings('prize')}
                                                    fontFamily={fonts.font_medium}
                                                    textAlign={'left'}
                                                    fontSize={Dimens.px_15}
                                                    color={Colors.colorAccent} />
                                                <View style={{ flexDirection: 'row' }}>
                                                    {data.prizes ? (data.prizes.map((prize, key) => {
                                                        return (<CommonText
                                                            key={key}
                                                            title={prize.name + (key === data.prizes.length - 1 ? '' : ', ')}
                                                            fontFamily={fonts.font_medium}
                                                            textAlign={'left'}
                                                            numberOfLines={1}
                                                            fontSize={Dimens.px_15}
                                                            color={Colors.textColor} />)

                                                    })) : null}

                                                </View>
                                            </View>
                                            <View style={{ flex: .3, justifyContent: 'flex-end' }} >
                                                <CommonText
                                                    title={data.closes_on}
                                                    backgroundColor={Colors.colorAccent}
                                                    paddingHorizontal={Dimens.px_5}
                                                    numberOfLines={1}
                                                    fontFamily={fonts.font_medium}
                                                    textTransform={'uppercase'}
                                                    fontSize={Dimens.px_15}
                                                    color={Colors.white} />
                                            </View>
                                        </View>

                                    </View>
                                    <View style={{
                                        position: 'absolute', alignSelf: 'center', elevation: Dimens.px_10,
                                        borderTopStartRadius: Dimens.px_30, borderTopEndRadius: Dimens.px_30,
                                        borderBottomEndRadius: Dimens.px_30, borderBottomStartRadius: Dimens.px_30, height: Dimens.px_50, width: Dimens.px_50,
                                        backgroundColor: Colors.colorAccent, alignItems: 'center', justifyContent: 'center'
                                    }}
                                    >
                                        <RTLIcon
                                            source={require('../../../../assets/images/next_arrow.png')}
                                            padding={10}
                                            iconPress={()=>this.goToSurveyDetail(data.id)}
                                            tintColor={Colors.white}
                                            iconWidth={Dimens.px_35}
                                            iconHeight={Dimens.px_25}
                                            containerWidth={Dimens.px_50}
                                        />

                                    </View>

                                </View>
                            )
                        })) : null}
                    </View>
                </ScrollView>
                <CustomPBar showProgress={loading} />
            </View>
        )
    }



}
const mapStateToProps = (state) => ({
    loading: state.survey.loading,
    surveyList: state.survey.surveyList,
});

const mapDispatchToProps = {
    surveyListRequest,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SurveyListScreen);