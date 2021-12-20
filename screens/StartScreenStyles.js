import { StyleSheet } from "react-native";

const StartScreenStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerContent: {
        width: 360,
        height: 640,

        backgroundColor: '#161616',
        borderRadius: 28,

        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    buttonSignIn: {
        margin: 15,
        width: 250,
        height: 45,
        backgroundColor: "#1a1a1a",

        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonSignUp: {
        width: 250,
        height: 45,
        backgroundColor: "#6fcbc6",

        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonSignGoogle: {
        margin: 15,
        width: 250,
        height: 45,
        backgroundColor: "white",

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
        color: '#389c96',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 21,
    },

    signUpText: {
        color: '#1a1a1a',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 21,
    },

    signInGoogle: {
        flex: 1,

        color: '#161616',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 21,
    },

    imageGoogle: {
        width: 30,
        height: 30
    },

    titleText: {
        width: 280,

        marginBottom: 20,

        letterSpacing: 0.5,
        color: "rgba(255, 255, 255, 0.4)",
        fontSize: 17,
        fontFamily: 'SanFrancisco-Medium',
        textAlign: "center"
    },

    companyYear: {
        marginTop: 150,
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'SanFrancisco-Medium'
    },

})

export default StartScreenStyles;