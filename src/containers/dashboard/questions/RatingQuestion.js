import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import * as fonts from '../../../common/values/fonts';
import * as Dimens from '../../../common/values/Dimens';
import * as Colors from '../../../common/values/Colors';
import CommonText from '../../../common/components/CommonText';
import { Rating, AirbnbRating } from 'react-native-elements';

RatingQuestion = (props) => {
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

        <AirbnbRating
          
       //   onFinishRating={this.ratingCompleted}
          style={{marginTop:Dimens.px_10, paddingVertical: Dimens.px_10 }}
        />
      </View>


    </View>
  );
}

RatingQuestion.defaultProps = { question: {} };



export default RatingQuestion;
