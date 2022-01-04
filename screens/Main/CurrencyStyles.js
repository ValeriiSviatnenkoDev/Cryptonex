import { Dimensions, StyleSheet } from "react-native";

const CurrencyStyles = StyleSheet.create({
    currencyContainer: {
        padding: 10,

        flex: 1,
        flexDirection: 'column',
    },  

    currency: {
        marginTop: 10,
        marginBottom: 5,

        width: Dimensions.get('window').width - 30,
        height: 160,

        backgroundColor: '#161616',

        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    currencyTitle: {
        width: 310,
        paddingTop: 7,
        paddingBottom: 7,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    currencyTitleText: {
        padding: Dimensions.get('window').height < 690 ? 5 : 10,
        color: 'white',
        fontSize: 15,
        fontFamily: 'SanFrancisco-Semibold'
    },

    currencyPrice: {
        flexDirection: "row",
        alignItems: 'center'
    },

    currencyPriceText: {
        padding: Dimensions.get('window').height < 690 ? 5 : 10,

        color: 'white',
        fontSize: 15,
        fontFamily: 'SanFrancisco-Medium',
        letterSpacing: 0.1
    },

    currencyText: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'SanFrancisco-Semibold'
    }
})

export default CurrencyStyles;