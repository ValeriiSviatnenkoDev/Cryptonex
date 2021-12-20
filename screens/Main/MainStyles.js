import { Dimensions, StyleSheet } from "react-native";

function handlerHeight(arg) {
    if(arg > 690) {
        return (arg * 0.9) + 20;
    }

    return (arg * 0.9);
}

const MainStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerContent: {
        marginTop: 80,
        marginBottom: 15,

        width: Dimensions.get('window').width - 25,
        height: handlerHeight(Dimensions.get('window').height),

        backgroundColor: '#161616',
        borderRadius: 28,

    },

    modalView: {
        marginTop: 150,
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "rgba(255, 255, 255, 0)",
    },

    chartModalView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 120,
        backgroundColor: "#131313",
        borderRadius: 28,

        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: 'center'
    },

    modalControl: {
        flexDirection: "row",
        alignItems: 'flex-end'
    },

    modalContent: {
        padding: 5,

        width: Dimensions.get('window').width - 50,
        height: Dimensions.get('window').height - 150,

        flexDirection: 'column',
        alignItems: 'center'
    },

    modalControlIcon: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 220,
        backgroundColor: '#49beb7',

        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 13,
        paddingRight: 13,

        borderRadius: 100,
    },

    modalText: {
        width: 230,

        color: 'white',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 18,
        textAlign: "center"
    },

    buttonsContainer: {
        margin: 10,
        width: 340,
        flexDirection: 'row',
        justifyContent: "space-around"
    },

    buttonControl: {
        width: 40,
        height: 40,
        backgroundColor: '#49beb7',
        borderRadius: 15,

        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonControlActive: {
        width: 40,
        height: 40,
        backgroundColor: '#389c96',
        borderRadius: 15,

        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonControlText: {
        color: 'white',
        fontFamily: 'SanFrancisco-Medium',
    },

    modalInfo: {
        width: Dimensions.get('window').width - 60,
        height: 300,
        backgroundColor: '#191919',
        borderRadius: 17,
        alignItems: 'center'
    },

    modalInfoText: {
        color: 'white'
    },

    currencyInfo: {
        marginTop: 15,

        width: Dimensions.get('window').width - 90,
        height: 60,
        backgroundColor: '#212121',
        borderRadius: 15,

        padding: 10,

        flexDirection: "row",
        justifyContent: 'space-between',
    },

    containerNavigation: {
        width: Dimensions.get('window').width,
        height: 90,

        padding: 15,

        backgroundColor: '#161616',
        borderRadius: 20,

        flexDirection: "row",
        justifyContent: "space-around",

    }
})

export default MainStyles;