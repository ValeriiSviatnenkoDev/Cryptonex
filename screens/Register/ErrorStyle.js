import { StyleSheet } from "react-native";

const ErrorStyles = StyleSheet.create({
    errorView: {
        marginTop: 130,
        justifyContent: "center",
        alignItems: "center",
        
        backgroundColor: "rgba(255, 255, 255, 0)",
      },

      errorModalView: {
        width: 325,
        height: 100,
        backgroundColor: "#c41b1b",
        borderRadius: 28,

        justifyContent: "center",
        alignItems: "center",
    },

    modalText: {
        padding: 10,
        width: 230,

        color: 'white',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 18,
        textAlign: "center"
    }
})

export default ErrorStyles;