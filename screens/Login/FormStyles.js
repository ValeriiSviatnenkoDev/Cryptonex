import { StyleSheet } from "react-native";

const FormStyles = StyleSheet.create({
    conatinerImage: {
        marginTop: 20,
        marginBottom: 20,
        width: 360,
        height: 70,
        aspectRatio: 8
    },

    inputData: {
        margin: 10,
        padding: 5,
        width: 225,
        height: 40,

        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderBottomWidth: 2,
        borderColor: '#389c96',
        color: 'white',

        fontFamily: 'SanFrancisco-Regular'
    },

    buttonLogin: {
        marginTop: 25,

        width: 130,
        height: 30,

        backgroundColor: '#389c96',

        justifyContent: 'center',
        alignItems: 'center'
    },


    titleText: {
        width: 280,

        marginBottom: 20,

        letterSpacing: 0.5,
        color: "rgba(255, 255, 255, 0.4)",
        fontSize: 17,
        fontFamily: 'SanFrancisco-Regular',
        textAlign: "center"
    },

    companyYear: {
        marginTop: 30,
        marginBottom: 15,
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'SanFrancisco-Regular'
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
        fontFamily: 'SanFrancisco-Regular',
        fontSize: 16
    },

    textButtonBack: {
        color: 'white',
        fontFamily: 'SanFrancisco-Regular',
        fontSize: 12
    },
})

export default FormStyles;