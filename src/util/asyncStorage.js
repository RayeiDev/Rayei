import  AsyncStorage  from '@react-native-community/async-storage';



export const KEY_USERDATA = 'KEY_USERDATA'

export const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log('setItem', error);
    }
};

export const getItem = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.log('getItem', error);
    }
};