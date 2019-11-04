import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import * as fonts from '../../../common/values/fonts';
import * as Dimens from '../../../common/values/Dimens';
import * as Colors from '../../../common/values/Colors';
import CommonText from '../../../common/components/CommonText';

const RATING_EXCELLENT = require('../../../../assets/images/excellent.png');
const RATING_GOOD = require('../../../../assets/images/good.png');
const RATING_AVERAGE = require('../../../../assets/images/average.png');
const RATING_BAD = require('../../../../assets/images/bad.png');
const RATING_POOR = require('../../../../assets/images/poor.png');

const feedBackData = [
  {value: RATING_POOR, id: 1},
  {value: RATING_BAD, id: 2},
  {value: RATING_AVERAGE, id: 3},
  {value: RATING_GOOD, id: 4},
  {value: RATING_EXCELLENT, id: 5},
];

const ACTIVE_OPACITY = 1;
const INACTIVE_OPACITY = 0.6;

const SELECTED_SIZE = Dimens.px_50;
const UNSELECTED_SIZE = Dimens.px_40;

const EmojiRatingQuestion = props => {
  const [checked, setChecked] = useState(null);

  const ratingOptions = feedBackData.map((data, key) => {
    return (
      <TouchableOpacity
        key={data.id}
        style={[
          styles.ratingContainer,
          checked !== null && checked === key
            ? {shadowOpacity: 0.6}
            : {shadowOpacity: 0},
        ]}
        onPress={() => {
          setChecked(key);
          props.onSelection(data.id);
        }}>
        <Image
          source={data.value}
          style={[
            styles.rating,
            {
              width:
                checked !== null && checked === key
                  ? SELECTED_SIZE
                  : UNSELECTED_SIZE,
              height:
                checked !== null && checked === key
                  ? SELECTED_SIZE
                  : UNSELECTED_SIZE,
              opacity:
                checked !== null && checked === key
                  ? ACTIVE_OPACITY
                  : INACTIVE_OPACITY,
              shadowOffset:
                checked !== null && checked === key
                  ? {height: 1, width: 1}
                  : {height: 0, width: 0}, // IOS
            },
          ]}
        />
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.questionContainer}>
      <View style={{}}>
        <CommonText
          title={props.question.question}
          fontFamily={fonts.font_bold}
          textAlign={'center'}
          fontSize={Dimens.px_20}
          color={Colors.textColor}
        />
        <View style={{flex: 1, flexDirection: 'row'}}>{ratingOptions}</View>
      </View>
    </View>
  );
};

EmojiRatingQuestion.defaultProps = {question: {}};

const styles = StyleSheet.create({
  rating: {
    flex: 1,
    resizeMode: 'contain',
    width: UNSELECTED_SIZE,
    height: UNSELECTED_SIZE,
    opacity: INACTIVE_OPACITY,
  },
  ratingContainer: {
    padding: 15,
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  questionContainer: {
    flex: 1,
    elevation: 5,
    backgroundColor: Colors.white,
    alignItems: 'center',
    padding: Dimens.px_10,
  },
});

export default EmojiRatingQuestion;
