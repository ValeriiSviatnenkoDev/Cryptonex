import { Dimensions, StyleSheet } from "react-native";

const TradesStyles = StyleSheet.create({
    tradesHeaderText: {
        paddingTop: 10,
        paddingBottom: 5,

        color: 'white',
        fontSize: 18, 
        fontFamily: 'SanFrancisco-Semibold' 
    },

    tradeInfoProfile: {
        width: Dimensions.get('window').width - 60,
        height: 70,

        borderRadius: 20,
        backgroundColor: '#1a1a1a',
    },

    tradesCard: {
        margin: 10, 
        height: 50, 
        
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexDirection: 'row',

        backgroundColor: '#212121', 
        borderRadius: 18
    },

    tradesCardInfo: {
        paddingLeft: 10,

        flexDirection: 'row',
        alignItems: 'center'
    },

    tradesCardImage: {
        width: 32, 
        height: 32
    },

    tradesCardText: {
        paddingLeft: 5,

        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 16
    },

    tradesCardCount:{
        paddingRight: 10
    },

    tradesCardCountText: {
        color: 'white', 
        fontWeight: 'bold'
    }
})

export default TradesStyles;