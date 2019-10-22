import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import * as Dimens from '../values/Dimens';
import RTLIcon from './RTLIcon';
import BaseComponent from './BaseComponent';
import { isRTL } from '../../i18n/i18n';
const logo = require('../../../assets/images/logo.png');



//var width = Dimensions.get('window').width;

class CommonHeader extends BaseComponent {
  state = {
    btnBgColor: 'transparent'
  };

  async componentDidMount() {
    if (this.props.backgroundColor) {
      this.setState({
        btnBgColor: this.props.backgroundColor
      })
    }
  }
  render() {
    return (
      <View style={{
        width: '100%',
        height: 60,
        alignSelf: this.props.alignSelf,
        flexDirection: 'row',
        elevation: 5,
        backgroundColor: this.props.headerBg
      }}>
        {this.props.isRTLIconVisibile === false ? null :
          <RTLIcon
            source={this.props.leftICImagePath}
            padding={10}
            iconPress={this.props.leftIconPress}
            tintColor={this.props.tintColor}
            iconWidth={Dimens.px_25}
            iconHeight={Dimens.px_25}
            containerWidth={Dimens.px_50}
          />
        }


        <View style={style.LogoContainerStyle}>
          <Image source={logo}
            style={style.LogoStyle}
            resizeMode={'contain'}
          />

        </View>
      </View>
    );
  }

}
const style = {

  LogoContainerStyle:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconStyle:
  {
    width: Dimens.px_25,
    height: Dimens.px_25,

  },
  LogoStyle:
  {
    width: Dimens.px_110,
    height: Dimens.px_35,

  },
  LeftImageContainer:
  {
    padding: 10,
    height: '100%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  }
  ,

}

export default CommonHeader;
