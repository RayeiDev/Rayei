import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as fonts from '../../../common/values/fonts';
import * as Dimens from '../../../common/values/Dimens';
import * as Colors from '../../../common/values/Colors';
import CommonText from '../../../common/components/CommonText';
import RangeSlider from 'rn-range-slider';
import {strings, isArabic} from '../../../i18n/i18n';

const sliderValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const RangeQuestionNew = props => {
  const [range, setRange] = useState(0);

  const numbersView = sliderValues.map((data, index) => {
    //Set the index from back, if Arabic(RTL)
    const adjustedIndex = isArabic ? sliderValues[9] - index : index + 1;
    return (
      <Text
        key={index}
        style={{
          color: adjustedIndex === range ? Colors.colorAccent : Colors.gray,
        }}>
        {data}
      </Text>
    );
  });

  return (
    <View style={styles.questionContainer}>
      <View>
        <CommonText
          title={strings('from1-10')}
          fontFamily={fonts.font_medium}
          fontSize={Dimens.px_20}
          textTransform={'uppercase'}
          color={Colors.colorAccent}
        />
        <CommonText
          title={props.question.question}
          fontFamily={fonts.font_bold}
          fontSize={Dimens.px_20}
          color={Colors.textColor}
          style={{paddingBottom: 20}}
        />
        <View style={styles.numberSliderContainer}>{numbersView}</View>

        <RangeSlider
          style={{width: 330, height: 100}}
          rangeEnabled={false}
          thumbRadius={10}
          thumbBorderWidth={4}
          lineWidth={15}
          // labelPadding={10}
          min={1}
          max={10}
          step={1}
          labelStyle={'none'}
          thumbColor={Colors.colorAccent}
          thumbBorderColor={Colors.white}
          labelTextColor={Colors.white}
          labelBackgroundColor={Colors.colorAccent}
          selectionColor={Colors.colorAccent}
          blankColor={Colors.colorAccent}
          onValueChanged={ChangedValue => {
            setRange(ChangedValue);
            console.log(ChangedValue);
          }}
        />
      </View>
    </View>
  );
};

RangeQuestionNew.defaultProps = {question: {}};

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    elevation: 5,
    backgroundColor: Colors.white,
    alignItems: 'center',
    padding: Dimens.px_10,
  },
  numberSliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 333,
    flex: 1,
    paddingStart: 5,
    alignSelf: 'center',
  },
});

export default RangeQuestionNew;
