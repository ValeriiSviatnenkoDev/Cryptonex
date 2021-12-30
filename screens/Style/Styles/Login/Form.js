import { StyleSheet } from "react-native";

const FormStyles = StyleSheet.create({
    conatinerImage: {
        marginTop: 20,
        marginBottom: 20,
        width: 360,
        height: 70,
        aspectRatio: 5
    },

    inputData: {
        margin: 10,
        padding: 5,
        width: 225,
        height: 40,

        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderBottomWidth: 2,
        borderColor: '#50cc5c',
        color: 'white',

        fontFamily: 'SanFrancisco-Medium'
    },

    buttonLogin: {
        marginTop: 25,
        marginLeft: 55,
        width: 130,
        height: 35,

        backgroundColor: '#50cc5c',

        justifyContent: 'center',
        alignItems: 'center'
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
        marginTop: 30,
        marginBottom: 15,
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'SanFrancisco-Medium'
    },

    buttonBack: {
        marginTop: 25,

        width: 100,
        height: 30,

        backgroundColor: 'rgba(255, 255, 255, 0.2)',

        justifyContent: 'center',
        alignItems: 'center'
    },

    textButtonLogin: {
        color: '#1a1a1a',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 16
    },

    textButtonBack: {
        color: 'white',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 12
    },
})

export default FormStyles;