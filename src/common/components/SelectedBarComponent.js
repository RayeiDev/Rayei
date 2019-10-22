import React from 'react';
import { TouchableWithoutFeedback, View, Image } from 'react-native';
import * as fonts from '../values/fonts';
import * as Dimens from '../values/Dimens';
import * as Colors from '../values/Colors';
import CommonText from './CommonText';
import RTLIcon from './RTLIcon';
import BaseComponent from './BaseComponent';
import { strings } from '../../i18n/i18n';

//var width = Dimensions.get('window').width;

class SelectedBarComponent extends BaseComponent {
  state = {
    backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'transparent',
  };


  render() {
    const { questionArray,currentQuestionIndex } = this.props;
    const tabWidth = 1 / questionArray.length;
    return (
      <View
        style={{
          flex:1,
          width: '100%',
          flexDirection: 'row',
          marginTop:Dimens.px_20,
          backgroundColor: this.state.backgroundColor,
          alignItems:'center',
        }}>

        {questionArray.map((item, index) => {
          return (
            <View key={index} style={{ height: Dimens.px_5, marginEnd:(index===questionArray.length-1) ? 0 : (questionArray.length>10? Dimens.px_5: Dimens.px_10),
              flex: tabWidth,backgroundColor:(index===currentQuestionIndex)?Colors.colorAccent:Colors.textColor,borderTopStartRadius: 2, borderTopEndRadius: 2,
              borderBottomEndRadius: 2, borderBottomStartRadius: 2 }}/>
          )

        }
        )}

      </View>
    );
  }

}


export default SelectedBarComponent;
