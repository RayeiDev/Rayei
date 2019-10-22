import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import * as Dimens from '../values/Dimens';
import * as Colors from '../values/Colors';

//var width = Dimensions.get('window').width;

class CommonText extends Component {
  state = { btnBgColor: Colors.blue };

  static defaultProps={
    textTransform:'capitalize',
  }

  async componentDidMount() {

    if (this.props.backgroundColor) {
      this.setState({
        btnBgColor: this.props.backgroundColor
      })
    }
  }
  render() {
    return (
      <View style={[style.MainVewStyle, {

        marginStart: this.props.marginStart,marginTop: this.props.marginTop, width: this.props.width, height:
          this.props.height, backgroundColor: this.props.backgroundColor,
        marginRight: this.props.marginRight, marginLeft: this.props.marginLeft,
        paddingHorizontal: this.props.paddingHorizontal,
        flex: this.props.flex,
        padding: this.props.padding, paddingVertical: this.props.paddingVertical,
        borderRadius: this.props.borderRadius
      }, this.props.style]}>
        {
          <Text style={{
            fontFamily: this.props.fontFamily,
            fontSize: this.props.fontSize,
            textAlign: this.props.textAlign,
            alignSelf: this.props.alignSelf,
            color: this.props.color
            , flex: this.props.flex,
            textDecorationLine: this.props.textDecorationLine,
            textTransform: this.props.textTransform,
            lineHeight: this.props.lineHeight,
            
          }}
            numberOfLines={this.props.numberOfLines}
          >
            {this.props.title}
          </Text>
        }
      </View>
    );
  }

}

// fontFamily:this.props.fontFamily,
const style = {
  MainVewStyle:
  {

  }
}
export default CommonText;
