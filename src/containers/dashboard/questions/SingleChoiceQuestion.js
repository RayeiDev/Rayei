import React,{useState} from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import * as fonts from '../../../common/values/fonts';
import * as Dimens from '../../../common/values/Dimens';
import * as Colors from '../../../common/values/Colors';
import CommonText from '../../../common/components/CommonText';
//var width = Dimensions.get('window').width;

SingleChoiceQuestion = (props) => {
  const [checked, setChecked] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        elevation:5,
        width:'100%',
        backgroundColor: Colors.white,
        alignItems: 'center',
        padding:Dimens.px_10
      }}>
      <View style={{   }}>

      <CommonText 
      title={props.question.question}
      fontFamily={fonts.font_bold}
      textAlign={'center'}
      fontSize={Dimens.px_20}
      color={Colors.textColor}/>

{props.question.answers.map((data, key) => {
    return (
        <View style={{padding:Dimens.px_10}} key={key}>
                <TouchableOpacity onPress={()=>{setChecked(key)}} style={{flexDirection:'row',alignItems:'center'}}>
                    <Image style={{width:Dimens.px_20,height:Dimens.px_20, }} source={checked===key ? require('../../../../assets/images/radio_selected.png') : require('../../../../assets/images/radio_unselected.png')}/>
                    <CommonText 
      title={data.text}
      fontFamily={fonts.font_medium}
      textAlign={'left'}
      marginLeft={Dimens.px_15}
      fontSize={Dimens.px_20}
      color={checked===key ?Colors.textColor : Colors.gray}/>
                </TouchableOpacity>
            
        </View>
    )
})}
      </View>

    </View>
  );
}

SingleChoiceQuestion.defaultProps = {question:{}};



export default SingleChoiceQuestion;
