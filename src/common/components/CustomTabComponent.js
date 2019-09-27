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

class CustomTabComponent extends BaseComponent {
  state = {
    backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'transparent',
  };


  render() {
    const { onTabSelected, tabArray } = this.props;
    const tabWidth = 1 / tabArray.length;
    console.log('tabwidth', tabWidth);

    return (
      <View elevation={5}
        style={{
          width: '100%',
          height: 90,
          flexDirection: 'row',
          backgroundColor: this.state.backgroundColor
        }}>

        {tabArray.map((tab, index) => {
          return (
            <View key={index} style={{ height: '100%', flex: tabWidth, }}>
              <TouchableWithoutFeedback
                onPress={() => onTabSelected(index)}
              >
                <View style={{
                  width: '100%', height: '100%', alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Image style={{ height: 35, width: 35 }}
                    source={tab.isSelected ? tab.iconSourceActive : tab.iconSourceDeactive}
                    resizeMode={'center'}
                  ></Image>

                  <CommonText title={strings(tab.title)}
                    fontFamily={fonts.font_bold}
                    fontSize={Dimens.px_13}
                    marginTop={Dimens.px_5}
                    color={tab.isSelected ? Colors.colorAccent : Colors.textColor}></CommonText>

                </View>

              </TouchableWithoutFeedback>

            </View>
          )

        }
        )}

      </View>
    );
  }

}


export default CustomTabComponent;
