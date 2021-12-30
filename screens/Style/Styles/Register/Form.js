import { StyleSheet } from "react-native";

const RegisterForm = StyleSheet.create({
    conatinerImage: {
        marginTop: 20,
        marginBottom: 20,
        width: 360,
        height: 70,
        aspectRatio: 5
    },

    containerInput: {
        margin: 10,
        padding: 5,
        width: 225,
        height: 40,

        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderBottomWidth: 2,
        borderColor: '#50cc5c',
        color: 'white',

        fontFamily: 'SanFrancisco-Medium',
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
        marginTop: 70,
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'SanFrancisco-Medium'
    },

    containerButtonRegister: {
        marginTop: 25,
        marginLeft: 35,
        width: 170,
        height: 40,

        backgroundColor: '#50cc5c',

        justifyContent: 'center',
        alignItems: 'center'
    },  

    containerTextInButton: {
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 16,
        color: 'black'
    },  

    containerButtonBack: {
        marginTop: 15,
        width: 100,
        height: 30,

        backgroundColor: 'rgba(255, 255, 255, 0.2)',

        justifyContent: 'center',
        alignItems: 'center'
    },

    containerTextButtonBack: {
        color: 'white',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 12
    },

    modalText: {
        padding: 10,
        width: 260,

        color: 'white',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 18,
        textAlign: "center"
    }
})

export default RegisterForm;