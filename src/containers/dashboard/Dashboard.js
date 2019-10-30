import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import BaseComponent from '../../common/components/BaseComponent'
import * as Colors from '../../common/values/Colors'
import * as Dimens from '../../common/values/Dimens'
import * as Constants from '../../common/values/Constants'
import CommonHeader from '../../common/components/CommonHeader'
import CustomTabComponent from '../../common/components/CustomTabComponent'
import LiveVotingScreen from './livevoting/LiveVotingScreen'
import Reward from './reward/Reward'

export default class Dashboard extends BaseComponent {

    state = {
        tabArray: [
            {
                iconSourceActive: require('../../../assets/images/live_voting_active.png'),
                iconSourceDeactive: require('../../../assets/images/live_voting.png'),
                title: 'liveVoting',
                isSelected: true,
            },
            {
                iconSourceActive: require('../../../assets/images/reward_active.png'),
                iconSourceDeactive: require('../../../assets/images/reward.png'),
                title: 'reward',
                isSelected: false,
            },
            {
                iconSourceActive: require('../../../assets/images/news_active.png'),
                iconSourceDeactive: require('../../../assets/images/news.png'),
                title: 'news',
                isSelected: false,
            },
            {
                iconSourceActive: require('../../../assets/images/profile_active.png'),
                iconSourceDeactive: require('../../../assets/images/profile.png'),
                title: 'profile',
                isSelected: false,
            },
            {
                iconSourceActive: require('../../../assets/images/menu_active.png'),
                iconSourceDeactive: require('../../../assets/images/menu.png'),
                title: 'menu',
                isSelected: false,
            },
        ],
        selectedTabIndex: 0,
    }


    goToSignUp = () => {
        this.props.navigation.navigate(Constants.SCREEN_SIGNUP, {});
    }

    render() {

        const { selectedTabIndex } = this.state;
        return (
            <KeyboardAvoidingView style={{ backgroundColor: Colors.colorPrimary, flex: 1, }}  enabled>
                <View style={{flex:1}}>
                    <CommonHeader
                        alignSelf='flex-start'
                        headerBg={Colors.white}
                        tintColor={Colors.colorAccent}
                        leftIconPress={this.handleBackButtonClick}
                        leftICImagePath={require('../../../assets/images/back.png')}
                    />
                    <View style={{ flex: 1 }}>
                        {this.getSelectedLayout()}
                    </View>
                    <View style={{ height: Dimens.px_1, backgroundColor: Colors.gray }}></View>
                    <CustomTabComponent
                        tabArray={this.state.tabArray}
                        onTabSelected={this.onTabSelected}
                        backgroundColor={Colors.white}
                    />

                </View>
            </KeyboardAvoidingView>
        )
    }

    getSelectedLayout = () => {
        switch (this.state.selectedTabIndex) {
            case 0:
                return (
                    <LiveVotingScreen navigation={this.props.navigation}/>
                )
            case 1:
                return (
                    <Reward navigation={this.props.navigation}/>
                )
            
               

        }
    }

    onTabSelected = (index) => {
        const tempArray = this.state.tabArray;
        for (let i = 0; i < tempArray.length; i++) {
            const element = tempArray[i];
            if (index === i) {
                element.isSelected = true;
            } else {
                element.isSelected = false;
            }
        }
        this.setState({ tabArray: tempArray, selectedTabIndex: index })

    }

}
