import React from 'react'; 
import { View } from 'react-native';
import * as Colors from '../../common/values/Colors'

export default RoundedBackground=(props)=>{
    return (
           
        <View style={{  flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', }}>
            <View style={{ alignSelf:'flex-end',
                height: props.height,width:'100%', backgroundColor: props.backgroundColor,
                borderTopStartRadius: 25, borderTopEndRadius: 25,position:props.position
            }}
            ></View>
        </View>
)
}
