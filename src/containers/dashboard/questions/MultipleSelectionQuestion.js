import React, { useState } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import * as fonts from '../../../common/values/fonts';
import * as Dimens from '../../../common/values/Dimens';
import * as Colors from '../../../common/values/Colors';
import CommonText from '../../../common/components/CommonText';

MultipleSelectionQuestion = (props) => {
  const [checked, setChecked] = useState([]);
  const addAnswer = (id) => {
    if (isAnswerExist(id)) {
      var Answerarray = [...checked]; // make a separate copy of the array
      var index = Answerarray.indexOf(id)
      Answerarray.splice(index, 1);
      setChecked(Answerarray);
    } else {
      setChecked(oldArray => [...oldArray, id]);
    }
  };
  const isAnswerExist = (id) => {
    return (checked.indexOf(id) > -1)
  };


  return (
    <View
      style={{
        flex: 1,
        elevation: 5,
        width: '100%',
        backgroundColor: Colors.white,
        alignItems: 'center',
        padding: Dimens.px_10
      }}>
      <View style={{}}>

        <CommonText
          title={props.question.question}
          fontFamily={fonts.font_bold}
          textAlign={'center'}
          fontSize={Dimens.px_20}
          color={Colors.textColor} />

        {props.question.answers.map((data, key) => {
          return (
            <View style={{ padding: Dimens.px_10 }} key={key}>
              <TouchableOpacity onPress={() => addAnswer(key)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: Dimens.px_20, height: Dimens.px_20, }} tintColor={Colors.colorAccent} source={isAnswerExist(key) ?
                  require('../../../../assets/images/checkbox_selected.png') : require('../../../../assets/images/checkbox_unselected.png')} />
                <CommonText
                  title={data.text}
                  fontFamily={fonts.font_medium}
                  textAlign={'left'}
                  marginLeft={Dimens.px_15}
                  fontSize={Dimens.px_20}
                  color={isAnswerExist(key) ? Colors.textColor : Colors.gray} />
              </TouchableOpacity>

            </View>
          )
        })}
      </View>

    </View>
  );
}

MultipleSelectionQuestion.defaultProps = { question: {} };
export default MultipleSelectionQuestion;
