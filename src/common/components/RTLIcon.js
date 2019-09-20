import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import * as Dimens from '../values/Dimens';
import * as Colors from '../values/Colors';
import { isRTL,isArabic } from '../../i18n/i18n';
import BaseComponent from './BaseComponent';

class RTLIcon extends BaseComponent {

    static defaultProps = {
        padding: 5,
        source: require('../../../assets/images/logo.png'),
        tintColor: Colors.colorPrimary,
        iconWidth: Dimens.px_25,
        iconHeight: Dimens.px_25,
    }

    iconStyle = function () {
        const { iconWidth, iconHeight } = this.props;
        console.log("iconStyle",isArabic);
        
        if (isArabic) {
            return ({
                width: iconWidth,
                height: iconHeight,
                transform: [{ rotate: '180deg' }]
            }
            )
        } else {
            return ({
                width: iconWidth,
                height: iconHeight,
            })
        }
    }


    render() {
        const { source, padding, leftIconPress, tintColor, containerWidth } = this.props;
        return (
            <View style={{
                padding: padding,
                height: '100%',
                width: containerWidth,
                alignSelf: 'flex-start',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
            }}>
                <TouchableOpacity
                    onPress={leftIconPress}
                    activeOpacity={1}
                >
                    {source ?
                        <Image source={source}
                            style={this.iconStyle()}
                            tintColor={tintColor}
                            resizeMode={'center'}
                        />
                        : null}
                </TouchableOpacity>
            </View>
        );
    }

}


export default RTLIcon;
