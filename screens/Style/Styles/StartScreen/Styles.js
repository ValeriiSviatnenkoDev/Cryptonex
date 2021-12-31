import { Dimensions, StyleSheet } from "react-native";
import { handlerHeight } from '../../Utils/handlerFunction.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const checkUserTheme = async () => {
    return await AsyncStorage.getItem('theme');
}

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: checkUserTheme() ? '#ededed' : '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerContent: {
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').height < 690 ? handlerHeight(Dimensions.get('window').height, 50) : Dimensions.get('window').height - 100,

        backgroundColor: checkUserTheme() ? '#d1d1d1' : '#161616',
        borderRadius: 28,

        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    buttonSignIn: {
        margin: 15,
        width: 250,
        height: 45,
        backgroundColor: checkUserTheme() ? '#ededed' : '#1a1a1a',

        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonSignUp: {
        width: 250,
        height: 45,
        backgroundColor: checkUserTheme() ? '#46b350' : '#50cc5c',

        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonSignGoogle: {
        margin: 15,
        width: 250,
        height: 45,
        backgroundColor: checkUserTheme() ? '#3d91ff' : 'white',

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    conatinerImage: {
        marginTop: 60,
        marginBottom: 20,
        width: 360,
        height: 70,
        aspectRatio: 5
    },

    signInText: {
        color: checkUserTheme() ? '#46b350' : '#50cc5c',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 21,
    },

    signUpText: {
        color: checkUserTheme() ? '#ededed' : '#1a1a1a',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 21,
    },

    signInGoogle: {
        color: checkUserTheme() ? '#ededed' : '#1a1a1a',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 21,
    },

    imageGoogle: {
        width: 30,
        height: 30,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: checkUserTheme() ? 'white' : null,
    },

    titleText: {
        width: 280,

        marginBottom: 20,

        letterSpacing: 0.5,
        color: checkUserTheme() ? 'rgba(26, 26, 26, 0.5)' : 'rgba(255, 255, 255, 0.4)',
        fontSize: 17,
        fontFamily: 'SanFrancisco-Medium',
        textAlign: "center"
    },

    companyYear: {
        marginTop: 150,
        color: checkUserTheme() ? 'rgba(26, 26, 26, 0.8)' : 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'SanFrancisco-Medium'
    },

})

export default Styles;