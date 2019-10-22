import React,{useState } from 'react';
import { View } from 'react-native';
import * as fonts from '../../../common/values/fonts';
import * as Dimens from '../../../common/values/Dimens';
import * as Colors from '../../../common/values/Colors';
import CommonText from '../../../common/components/CommonText';
import CommonTextInput from '../../../common/components/CommonTextInput';
import * as Constants from '../../../common/values/Constants';

CommentQuestion = (props) => {
  const [answer, setAnswer] = useState('');
  return (

    <View style={{}}>
      <CommonText
        title={props.question.question}
        fontFamily={fonts.font_bold}
        textAlign={'center'}
        fontSize={Dimens.px_20}
        color={Colors.textColor} />
      <CommonTextInput
        style={{ elevation: Dimens.px_5, placeholderTextColor: Colors.gray }}
        width={'100%'}
        height={Dimens.px_60}
        marginTop={Dimens.px_30}
        fontFamily={fonts.font_medium}
        fontSize={Dimens.px_20}
        textAlign={'center'}
        backgroundColor={Colors.white}
        color={Colors.textColor}
        keyboardType={Constants.KEY_BOAD_TYPE_DEFAULT}
        onChangeText={(value) => {
          setAnswer(value)
        }} />
    </View>

  );
}

CommentQuestion.defaultProps = { question: {} };



export default CommentQuestion;
