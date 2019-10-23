
import * as Dimens from '../values/Dimens';
import * as Colors from '../values/Colors';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

class CustomPBar extends Component {
  render() {
    return (
      <View >
        <Spinner
          visible={this.props.showProgress}
          // textContent={"Loading..."} textStyle={{color: Colors.colorAccent}}
          color={Colors.colorAccent}
          overlayColor={Colors.transparent}
          size='large'
        />
      </View>

    );
  }

}




const style = {
  BtnStyle:
  {
    alignSelf: 'stretch',
    padding: Dimens.px_10,
    width: '100%',

  },
  MainVewStyle:
  {

    alignSelf: 'stretch',
  }
}
export default CustomPBar;
