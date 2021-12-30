import { Dimensions, StyleSheet } from "react-native";

const ErrorStyles = StyleSheet.create({
    errorView: {
        marginTop: Dimensions.get('window').height < 690 ? 20 : 130,
        justifyContent: "center",
        alignItems: "center",
        
        backgroundColor: "rgba(255, 255, 255, 0)",
      },

      errorModalView: {
        width: Dimensions.get('window').width - 75,
        height: Dimensions.get('window').height < 690 ? 80 : 100,
        backgroundColor: "#c41b1b",
        borderRadius: 28,

        justifyContent: "center",
        alignItems: "center",
    },

    modalText: {
        padding: 10,
        width: Dimensions.get('window').height < 690 ? 180 : 230,

        color: 'white',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: Dimensions.get('window').height < 690 ? 15 : 18,
        textAlign: "center"
    }
})

export default ErrorStyles;