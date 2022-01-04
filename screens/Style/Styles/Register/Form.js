import { StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const checkUserTheme = async () => {
    return await AsyncStorage.getItem('theme');
}

const RegisterForm = StyleSheet.create({
    containerInput: {
        margin: 10,
        padding: 5,
        width: 225,
        height: 40,

        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderBottomWidth: 2,
        borderColor: checkUserTheme() ? '#46b350' : '#50cc5c',
        color: checkUserTheme() ? 'rgba(26, 26, 26, 0.5)' : 'rgba(255, 255, 255, 1)',

        fontFamily: 'SanFrancisco-Medium',
    }
})

export default RegisterForm;