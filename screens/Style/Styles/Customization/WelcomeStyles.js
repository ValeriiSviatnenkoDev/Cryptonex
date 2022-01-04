import { Dimensions, StyleSheet } from "react-native";
import { handlerHeight } from '../../Utils/handlerFunction.js';

const WelcomeStyles = StyleSheet.create({
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

    welcomeText: {
        width: Dimensions.get('window').width - 60,

        textAlign: 'center',
        color: 'white',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 16
    },

    welcomeCompanyImage: {
        width: 360,
        height: 70,
        marginTop: 20,

        aspectRatio: 5
    },

    welcomeImage: {
        width: 120,
        height: 150
    }
})

export default WelcomeStyles;