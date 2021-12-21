import { Dimensions, StyleSheet } from "react-native";
import { handlerHeight, handlerMarginTop } from '../Style/Utils/handlerFunction.js';

const NewsStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerContent: {
        marginTop: 30,
        width: Dimensions.get('window').width - 30,
        height: Dimensions.get('window').height < 690 ? Dimensions.get('window').height - 60 : Dimensions.get('window').height,

        backgroundColor: '#161616',
        borderRadius: 28,

        justifyContent: 'center',
        alignItems: 'center'
    },

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

    newsContainer: {
        margin: 10,

        width: Dimensions.get('window').width - 60,
        height: 100,

        backgroundColor: 'rgba(73, 190, 183, 0.02)',
        borderRadius: 20,

        justifyContent: "center",
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'rgba(73, 190, 183, 0.1)'
    },

    newsHeader: {
        width: Dimensions.get('window').width - 100,
        paddingTop: 20,
        paddingBottom: 20,

        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 13,
        fontFamily: 'SanFrancisco-Semibold'
    },

    headerText: {
        marginLeft: 20, 
        marginTop: 10,
        
        width: Dimensions.get('window').width - 80, 
        padding: 10, 

        fontSize: 30, 
        color: 'rgba(255, 255, 255, 0.9)', 
        fontFamily: 'SanFrancisco-Semibold', 
        textAlign: 'center',
        
        
        backgroundColor: 'rgba(73, 190, 183, 0.1)', 
        borderRadius: 20, 
    }
})

export default NewsStyles;