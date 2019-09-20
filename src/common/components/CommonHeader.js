import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import * as Dimens from '../values/Dimens';
import * as Strings from '../values/Strings';
import * as Colors from '../values/Colors';
import CommonText from './CommonText';
import RTLIcon from './RTLIcon';
import BaseComponent from './BaseComponent';
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
        <RTLIcon
          source={this.props.leftICImagePath}
          padding={10}
          leftIconPress={this.props.leftIconPress}
          tintColor={this.props.tintColor}
          iconWidth={Dimens.px_25}
          iconHeight={Dimens.px_25}
          containerWidth={Dimens.px_50}
        >

        </RTLIcon>
        <View style={style.LogoContainerStyle}>
          <Image source={logo}
            style={style.LogoStyle}
            resizeMode={'cover'}
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
