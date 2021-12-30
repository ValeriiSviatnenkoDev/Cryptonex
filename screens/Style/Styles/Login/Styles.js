import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerContent: {
        width: 360,
        height: 800,

        backgroundColor: '#161616',
        borderRadius: 28,

        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    centeredView: {
        marginTop: 18,

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
        backgroundColor: "#1a1a1a",
      },

    modalView: {
        width: 350,
        height: 600,
        backgroundColor: "#161616",
        borderRadius: 28,

        justifyContent: "center",
        alignItems: "center",
    },

    modalText: {
        padding: 10,
        width: 260,

        color: 'white',
        fontFamily: 'SanFrancisco-Regular',
        fontSize: 18,
        textAlign: "center"
    }

})

export default LoginStyles;