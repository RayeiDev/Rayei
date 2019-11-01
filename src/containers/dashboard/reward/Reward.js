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
import CustomPBar from '../../../common/components/CustomPBar'
import { lookUpRequest } from '../../../actions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as asyncStorage from '../../../util/asyncStorage'

class Reward extends BaseComponent {

    state = {
        survey_categories: [],
        country: null,
    }

    static propTypes = {
        lookUpRequest: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        lookUpData: PropTypes.object,
    }

    async componentDidMount() {
        const userCountry = await asyncStorage.getItem(asyncStorage.KEY_COUNTRY);
        this.setState({ country: userCountry })
        this.props.lookUpRequest()
    }

    componentDidUpdate(prevProps) {
        if (this.props.lookUpData && this.props.lookUpData !== prevProps.lookUpData) {
            this.setState({ survey_categories: this.props.lookUpData.response.survey_categories })
        }
    }
    goToSurveyList = (item) => {
        this.props.navigation.navigate(Constants.SCREEN_SURVEY_LIST, { categoryId:item.id, category:item.name});
    }



    render() {
        const { survey_categories, country } = this.state;
        const { loading } = this.props;
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: Colors.white, paddingBottom: Dimens.px_20 }} showsVerticalScrollIndicator={false}>
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
                                // source={{ uri: (country ? country.flag : null) }}
                                source={{ uri: 'http://rayei-dev.s3.amazonaws.com/static/flags/QA.png' }} resizeMode={'cover'}
                            ></Image>

                        </View>

                    </View>
                    <View style={{ flex: .75, }}>
                        {survey_categories.map((item, index) => {
                            return (
                                index === 0 ?
                                    (<CommonButton key={index}
                                        fontFamily={fonts.font_medium}
                                        onButtonPress={() => this.goToSurveyList(item)}
                                        backgroundColor={Colors.colorAccent}
                                        buttonWidth={'90%'}
                                        buttonHeight={Dimens.px_50}
                                        marginTop={Dimens.px_30}
                                        title={item.name}
                                        textColor={Colors.white}
                                    />) :
                                    (
                                        <CommonButton key={index}
                                            key={index}
                                            fontFamily={fonts.font_medium}
                                            onButtonPress={() => this.goToSurveyList(item)}
                                            backgroundColor={Colors.white}
                                            buttonWidth={'90%'}
                                            buttonHeight={Dimens.px_50}
                                            marginTop={Dimens.px_10}
                                            title={item.name}
                                            textColor={Colors.colorAccent}
                                        />
                                    )

                            )

                        })
                        }
                    </View>

                </View>
                <CustomPBar showProgress={loading} />

            </ScrollView>

        )
    }
}
const mapStateToProps = (state) => ({
    loading: state.loading,
    lookUpData: state.lookUpData,
});

const mapDispatchToProps = {
    lookUpRequest,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reward);


