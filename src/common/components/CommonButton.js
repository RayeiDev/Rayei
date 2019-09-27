import React from 'react';
import { TouchableOpacity, View, } from 'react-native';
import * as fonts from '../values/fonts';
import * as Colors from '../values/Colors';
import BaseComponent from './BaseComponent';
import { strings } from '../../i18n/i18n';
import CommonText from '../../common/components/CommonText'



class CommonButton extends BaseComponent {

    static defaultProps = {
        fontFamily: fonts.font_bold,
        backgroundColor: Colors.colorAccent,
        buttonWidth: '85%',
        marginTop: 0,
        title: strings('Rayei'),
        textColor: Colors.white
    }


    render() {
        const { fontFamily, onButtonPress, backgroundColor, buttonWidth,buttonHeight, marginTop, title, textColor } = this.props;
        return (

            <TouchableOpacity style={{width:'100%',justifyContent: 'center',
            alignItems: 'center'}}
                onPress={onButtonPress}
                activeOpacity={1}
            >
                <View style={{
                    width: buttonWidth, height: buttonHeight, backgroundColor: backgroundColor, justifyContent: 'center',
                    alignItems: 'center', marginTop: marginTop, elevation: 5, borderTopStartRadius: 10, borderTopEndRadius: 10,
                     borderBottomEndRadius: 10, borderBottomStartRadius: 10
                }}>
                    <CommonText title={title} fontFamily={fontFamily} fontSize={20} color={textColor}></CommonText>
                </View>
            </TouchableOpacity>

        );
    }

}


export default CommonButton;
