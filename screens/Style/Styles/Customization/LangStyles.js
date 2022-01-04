import { Dimensions, StyleSheet } from "react-native";
import { handlerHeight } from '../../Utils/handlerFunction.js';

const LangStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerContent: {
        marginTop: 20,
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').height < 690 ? handlerHeight(Dimensions.get('window').height, 0) : Dimensions.get('window').height - 20,

        backgroundColor: '#161616',
        borderRadius: 28,

        justifyContent: 'space-between',
        alignItems: 'center'
    },

    langText: {
        width: Dimensions.get('window').width - 80,

        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.4)',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 16
    },

    langCompanyImage: {
        width: 360,
        height: 70,
        marginTop: 20,

        aspectRatio: 5
    },

    langImage: {
        width: 170,
        height: 180
    },

    langInput: {
        width: 225,
        height: 40,

        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderBottomWidth: 2,
        borderColor: '#50cc5c',
        color: 'rgba(255, 255, 255, 1)',

        fontFamily: 'SanFrancisco-Medium',
    },
})

export default LangStyles;