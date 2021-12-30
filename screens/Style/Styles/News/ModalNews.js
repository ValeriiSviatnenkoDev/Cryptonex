import { Dimensions, StyleSheet } from "react-native";

const ModalStyle = StyleSheet.create({
    modalView: {
        marginTop: 70,
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "rgba(255, 255, 255, 0)",
    },

    chartModalView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height + 80,
        backgroundColor: "#131313",
        borderRadius: 28,

        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: 'center'
    },

    modalControl: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalControlIcon: {
        marginTop: 10,
        marginBottom: 5,

        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 13,
        paddingRight: 13,

        borderRadius: 100,
    },

    modalNewsText: {
        width: Dimensions.get('window').width - 70,
        padding: 10,
        marginTop: 5, 
        marginBottom: 5,

        fontFamily: 'SanFrancisco-Semibold',
        color: 'white',
        textAlign: 'center',

        borderRadius: 18,
        backgroundColor: '#1a1a1a'
    },

    modalNewsImage: {
        width: 320,
        height: 200,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20
    }
})

export default ModalStyle;