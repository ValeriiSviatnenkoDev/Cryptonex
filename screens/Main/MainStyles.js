import { Dimensions, StyleSheet } from "react-native";
import { handlerHeight, handlerMarginTop } from '../Style/Utils/handlerFunction.js'

const MainStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerContent: {
        marginTop: handlerMarginTop(Dimensions.get('window').height),
        marginBottom: 15,

        width: Dimensions.get('window').width - 25,
        height: Dimensions.get('window').height < 690 ? handlerHeight(Dimensions.get('window').height, 50) : handlerHeight(Dimensions.get('window').height, 0.9),

        borderRadius: 28,

    },

    modalView: {
        marginTop: Dimensions.get('window').height < 690 ? 90 : 150,
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "rgba(255, 255, 255, 0)",
    },

    chartModalView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height < 690 ? handlerHeight(Dimensions.get('window').height, 10) : handlerHeight(Dimensions.get('window').height, 0.85),
        backgroundColor: "#131313",
        borderRadius: 28,

        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: 'center'
    },

    modalControl: {
        width: Dimensions.get('window').width - 60,
        flexDirection: "row",
        alignItems: 'flex-end'
    },

    modalContent: {
        padding: 5,

        width: Dimensions.get('window').width - 50,
        height: Dimensions.get('window').height < 690 ? handlerHeight(Dimensions.get('window').height, 150) : handlerHeight(Dimensions.get('window').height, 0.75),

        flexDirection: 'column',
        alignItems: 'center'
    },

    modalControlIcon: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 220,
        backgroundColor: '#50cc5c',

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
        backgroundColor: '#50cc5c',
        borderRadius: 15,

        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonControlActive: {
        width: 40,
        height: 40,
        backgroundColor: '#3c9945',
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
        height: Dimensions.get('window').height < 690 ? 140 : 240,
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
        width: Dimensions.get('window').width - 25,
        height: Dimensions.get('window').height > 690 ? 100 : 90,

        padding: 15,

        backgroundColor: '#161616',
        borderRadius: 20,

        flexDirection: "row",
        justifyContent: "space-around",

    }
})

export default MainStyles;