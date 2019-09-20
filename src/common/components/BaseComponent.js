import React, { Component } from 'react';
import { AsyncStorage, Platform, BackHandler } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import DeviceInfo from 'react-native-device-info';
import Toast from 'react-native-simple-toast';
class Basecomponents extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: null,
    gesturesEnabled: false

  });
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  

  handleBackButtonClick = () => {
    this.props.navigation.goBack()
    return true;
  }

  getFontsizeSmallSmall = () => {
    return responsiveFontSize(1.6);
  }

  getFontsizeSmall = () => {
    return responsiveFontSize(1.8);
  }
  getFontsizeMedium = () => {
    return responsiveFontSize(2.3);
  }
  getFontsizelarge = () => {
    return responsiveFontSize(2);
  }

  getFontsizeMediumForBtn = () => {
    var fontSizeMe = responsiveFontSize(2.4);
    return fontSizeMe;
  }
  getFontsizeSmallForBtn = () => {
    return responsiveFontSize(2);
  }

  // strings(name, params = {}) {
  //   return strings(name, params);
  // };

  getDeviceType = () => {

    return Platform.OS;
  }
  getDeviceId = () => {

    return DeviceInfo.getUniqueID();
  }

  showToast = (message) => {
    setTimeout(() => { Toast.show(message, Toast.CENTER) }, 200)
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  }

}




export default Basecomponents;
