import { Dimensions, StyleSheet } from "react-native";
import { handlerHeight, handlerMarginTop } from '../Style/Utils/handlerFunction.js';

const ProfileStyles = StyleSheet.create({
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

        backgroundColor: '#161616',
        borderRadius: 28,

        alignItems: 'center'

    },

    modalView: {
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "rgba(255, 255, 255, 0)",
    },

    chartModalView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height < 690 ? handlerHeight(Dimensions.get('window').height, 100) : handlerHeight(Dimensions.get('window').height, 0.85),

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
        height: Dimensions.get('window').height < 690 ? handlerHeight(Dimensions.get('window').height, 150) : handlerHeight(Dimensions.get('window').height, 0.75),

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


    containerNavigation: {
        width: Dimensions.get('window').width - 25,
        height: Dimensions.get('window').height > 690 ? 100 : 90,

        padding: 15,

        backgroundColor: '#161616',
        borderRadius: 20,

        flexDirection: "row",
        justifyContent: 'space-around',
    },

    profileInfo: {
        marginTop: 10,
        padding: 8,

        width: Dimensions.get('window').width - 60,
        height: 40,

        color: 'rgba(255, 255, 255, 1)',
        fontSize: 16,
        fontFamily: 'SanFrancisco-Semibold',
        textAlign: 'center',

        backgroundColor: '#1a1a1a',
        borderRadius: 13,
    },

    profileImage: {
        width: Dimensions.get('window').height < 690 ? 75 : 100,
        height: Dimensions.get('window').height < 690 ? 75 : 100
    },

    profileImageContainer: { 
        marginTop: 30,

        width: Dimensions.get('window').height < 690 ? 115 : 140,
        height: Dimensions.get('window').height < 690 ? 115 : 140,

        borderWidth: 3, 
        borderColor: '#49beb7', 
        borderRadius: 100, 

        justifyContent: 'center', 
        alignItems: 'center', 
    },

    profileButtons: { 
        marginTop: 30, 
        marginBottom: 30,
        
        width: Dimensions.get('window').width - 60, 
        height: 60, 
        
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        
    }
})

export default ProfileStyles;