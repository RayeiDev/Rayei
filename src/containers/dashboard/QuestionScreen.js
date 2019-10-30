import React from 'react';
import { View, KeyboardAvoidingView, Image, ScrollView } from 'react-native';
import BaseComponent from '../../common/components/BaseComponent'
import * as Colors from '../../common/values/Colors'
import * as Dimens from '../../common/values/Dimens'
import * as fonts from '../../common/values/fonts'
import * as Constants from '../../common/values/Constants'
import CommonButton from '../../common/components/CommonButton'
import CommonHeader from '../../common/components/CommonHeader'
import SelectedBarComponent from '../../common/components/SelectedBarComponent'
import CommonText from '../../common/components/CommonText'
import SingleChoiceQuestion from '../../containers/dashboard/questions/SingleChoiceQuestion'
import MultipleSelectionQuestion from '../../containers/dashboard/questions/MultipleSelectionQuestion'
import RatingQuestion from '../../containers/dashboard/questions/RatingQuestion'
import RangeQuestion from '../../containers/dashboard/questions/RangeQuestion'
import CommentQuestion from '../../containers/dashboard/questions/CommentQuestion'
import { strings } from '../../i18n/i18n';


export default class QuestionScreen extends BaseComponent {

    state = {
        questionArray: [
            {
                questionType: 1,
                question: 'What is your name?',
                answers: [],
            },
            {
                questionType: 2,
                question: 'Do you prefer going out late?',
                answers: [{ id: 1, text: 'Yes' }, { id: 2, text: 'No' }],
            },
            {
                questionType: 3,
                question: 'What is your favourite color?',
                answers: [{ id: 1, text: 'Red' }, { id: 2, text: 'Blue' }, { id: 2, text: 'Black' }, { id: 2, text: 'Pink' }, { id: 2, text: 'Purple' }],
            },
            {
                questionType: 4,
                question: 'Rate our service',
                answers: [],
            },
            {
                questionType: 5,
                question: 'What is your favourite number?',
                answers: [],
            },


        ],
        currentQuestionIndex: 0,
        isLiveVoting: true,
    }




    render() {
        const { currentQuestionIndex, questionArray, isLiveVoting } = this.state;
        return (
            <KeyboardAvoidingView style={{ backgroundColor: Colors.lightGray, flex: 1, }} enabled>
                <View style={{ flex: 1 }}>
                    <CommonHeader
                        alignSelf='flex-start'
                        headerBg={Colors.white}
                        tintColor={Colors.colorAccent}
                        leftIconPress={this.handleBackButtonClick}
                        leftICImagePath={require('../../../assets/images/back.png')}
                    />
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>

                        <View style={{
                            flex: 1, paddingLeft: Dimens.px_10, paddingRight: Dimens.px_10,
                            paddingBottom: Dimens.px_50, paddingTop: Dimens.px_10
                        }}>

                            <View style={{
                                alignItems: 'center', justifyContent: 'center',

                            }}>
                                {
                                    this.props.navigation.state.params.isLiveVoting ?
                                        <CommonText title={strings('liveVoting')}
                                            fontFamily={fonts.font_bold}
                                            fontSize={Dimens.px_20}
                                            textTransform={'uppercase'}
                                            color={Colors.colorAccent}></CommonText>
                                        : null
                                }

                                <CommonText title={'IT Survey'}
                                    fontFamily={fonts.font_bold}
                                    fontSize={Dimens.px_20}
                                    textTransform={'uppercase'}
                                    color={Colors.colorAccent}></CommonText>
                                {!isLiveVoting ?
                                    <View style={{ flexDirection: 'row', marginTop: Dimens.px_5, alignItems: 'center' }}>
                                        <Image
                                            style={{ height: Dimens.px_25, width: Dimens.px_25 }}
                                            source={require('../../../assets/images/group.png')}
                                            resizeMode={'contain'}
                                        ></Image>
                                        <CommonText title={'20'}
                                            fontFamily={fonts.font_medium}
                                            fontSize={Dimens.px_20}
                                            marginStart={Dimens.px_5}
                                            color={Colors.textColor}></CommonText>
                                    </View> : null
                                }

                                <SelectedBarComponent
                                    currentQuestionIndex={currentQuestionIndex}
                                    questionArray={questionArray}
                                />
                            </View>



                            <View style={{ marginTop: Dimens.px_50 }}>
                                {this.getQuestionLayout()}
                            </View>

                            <CommonButton
                                fontFamily={fonts.font_medium}
                                onButtonPress={this.onNext}
                                backgroundColor={Colors.colorAccent}
                                buttonWidth={'100%'}
                                buttonHeight={Dimens.px_50}
                                marginTop={Dimens.px_50}
                                title={strings('next')}
                                textColor={Colors.white}
                            >
                            </CommonButton>

                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    }

    getQuestionLayout = () => {
        const { currentQuestionIndex, questionArray } = this.state;
        switch (questionArray[currentQuestionIndex].questionType) {
            case 1:
                return (<CommentQuestion question={questionArray[currentQuestionIndex]} />)
            case 2:
                return (<SingleChoiceQuestion question={questionArray[currentQuestionIndex]} />)
            case 3:
                return (<MultipleSelectionQuestion question={questionArray[currentQuestionIndex]} />)
            case 4:
                return (<RatingQuestion question={questionArray[currentQuestionIndex]} />)
            case 5:
                return (<RangeQuestion question={questionArray[currentQuestionIndex]} />)
        }
    }

    onNext = () => {
        this.setState(prevState => ({ currentQuestionIndex: prevState.currentQuestionIndex + 1 }))

    }

}
