import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import * as Dimens from '../values/Dimens';
import * as Colors from '../values/Colors';
class CommonTextInput extends Component {
    state = { btnBgColor: Colors.white, editable: true };
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
                width: this.props.width, height: this.props.height,
                marginTop: this.props.marginTop,
                backgroundColor: this.props.backgroundColor, borderBottomColor: (this.props.borderBottomColor != undefined) ? this.props.borderBottomColor : Colors.eTxtBottomLineColor
            }, this.props.style]}>
                {this.props.leftImagePath ?
                    <Image source={this.props.leftImagePath}
                        style={style.IconStyle}
                    />
                    : null}
                <TextInput style={[{
                    textAlign: this.props.textAlign,
                    fontFamily: this.props.fontFamily,
                    //paddingHorizontal: Dimens.px_10,
                    color: (this.props.color !== undefined) ? this.props.color : Colors.textColor,
                    fontSize: this.props.fontSize,
                    flex: 1,
                    minHeight: this.props.minHeight,
                    maxHeight: this.props.maxHeight,
                    textAlignVertical: this.props.textAlignVertical,

                }]}
                    autoFocus={this.props.autoFocus}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    autogrow={this.props.autogrow}
                    blurOnSubmit={this.props.blurOnSubmit}
                    secureTextEntry={this.props.secure}
                    autoCapitalize={this.props.autoCapitalize}
                    maxLength={this.props.maxLength}
                    editable={this.props.editable != undefined ? this.props.editable : true}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.props.placeholderTextColor}
                    keyboardType={this.props.keyboardType}
                    onChangeText={this.props.onChangeText}
                    ref={this.props.refValue}
                    returnKeyType={this.props.returnKeyType}
                    onSubmitEditing={this.props.onSubmitEditing}
                    value={'' + (this.props.value && this.props.value !== undefined) ? this.props.value : ''}
                    multiline={this.props.multiline}
                    tintColor={(this.props.selectionColor != undefined) ? this.props.selectionColor : Colors.blue_sky}
                    selectionColor={(this.props.selectionColor != undefined) ? this.props.selectionColor : Colors.blue_sky}
                    numberOfLines={this.props.numberOfLines}
                >
                </TextInput>
                {this.props.rightImagePath ?
                    <Image source={this.props.rightImagePath}
                        style={style.IconStyle}
                    />
                    : null}
            </View>
        );
    }


}

const style = {
    MainVewStyle:
    {
        borderTopStartRadius: 5, borderTopEndRadius: 5,
        borderBottomEndRadius: 5, borderBottomStartRadius: 5,
        flexDirection: 'row',
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: Dimens.minHeight,
        borderBottomWidth: 0
    },
    IconStyle:
    {
        resizeMode: 'contain'
    }
}
export default CommonTextInput;
