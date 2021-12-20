import { StyleSheet } from "react-native";

const CurrencyStyles = StyleSheet.create({
    currencyContainer: {
        padding: 10,

        flex: 1,
        flexDirection: 'column',
    },  

    currency: {
        margin: 9.5 ,
        padding: 10,

        width: 330,
        height: 60,

        backgroundColor: '#1a1a1a',
        borderRadius: 20,

        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    currencyTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    currencyTitleText: {
        padding: 10,
        color: 'white',
        fontSize: 15,
        fontFamily: 'SanFrancisco-Semibold'
    },

    currencyPrice: {
        flexDirection: "row",
        alignItems: 'center'
    },

    currencyPriceText: {
        padding: 10,
        color: 'white',
        fontSize: 15,
        fontFamily: 'SanFrancisco-Medium',
        letterSpacing: 0.1
    }

})

export default CurrencyStyles;