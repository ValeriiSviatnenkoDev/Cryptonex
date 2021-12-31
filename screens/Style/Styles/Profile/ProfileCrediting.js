import { Dimensions, StyleSheet } from "react-native";

const CreditingStyles = StyleSheet.create({
    cashHeaderText: {
        paddingTop: 10,
        paddingBottom: 5,

        color: 'white',
        fontSize: 18, 
        fontFamily: 'SanFrancisco-Semibold' 
    },

    cashInfoProfile: {
        width: Dimensions.get('window').width - 60,
        height: 70,

        borderRadius: 20,
        backgroundColor: '#1a1a1a',
    },

    cashsCard: {
        margin: 10, 
        height: 50, 
        
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexDirection: 'row',

        backgroundColor: '#212121', 
        borderRadius: 18
    },

    cashsCardInfo: {
        paddingLeft: 10,

        flexDirection: 'row',
        alignItems: 'center'
    },

    cashsCardImage: {
        width: 32, 
        height: 32
    },

    cashsCardText: {
        paddingLeft: 5,

        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 16
    },

    cashsCardCount:{
        paddingRight: 10
    },

    cashsCardCountText: {
        color: 'white', 
        fontWeight: 'bold'
    }
})

export default CreditingStyles;