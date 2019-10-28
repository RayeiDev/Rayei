import React, { useState } from 'react';
import { View, Slider } from 'react-native';
import * as fonts from '../../../common/values/fonts';
import * as Dimens from '../../../common/values/Dimens';
import * as Colors from '../../../common/values/Colors';
import CommonText from '../../../common/components/CommonText';
import RangeSlider from 'rn-range-slider';
import { strings } from '../../../i18n/i18n';

RangeQuestion = (props) => {
  const [range, setRange] = useState(0);
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
          title={strings('from1-10')}
          fontFamily={fonts.font_medium}
          fontSize={Dimens.px_20}
          textTransform={'uppercase'}

          color={Colors.colorAccent} />
        <CommonText
          title={props.question.question}
          fontFamily={fonts.font_bold}
          fontSize={Dimens.px_20}
          color={Colors.textColor} />
        <RangeSlider
          style={{ width: 320, height: 100 }}
          rangeEnabled={false}

          thumbRadius={15}
          thumbBorderWidth={4}
          lineWidth={15}
          labelPadding={10}
          textSize={18}
          min={1}
          max={10}
          step={1}
          thumbColor={Colors.white}
          thumbBorderColor={Colors.colorAccent}
          labelTextColor={Colors.white}
          labelBackgroundColor={Colors.colorAccent}
          selectionColor={Colors.colorAccent}
          blankColor={Colors.colorPrimary}
          onValueChanged={(ChangedValue) => {
            setRange(ChangedValue)
          }} />


      </View>


    </View>
  );
}

RangeQuestion.defaultProps = { question: {} };



export default RangeQuestion;
