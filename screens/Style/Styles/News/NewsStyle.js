import { Dimensions, StyleSheet } from "react-native";

const NewsStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerContent: {
        marginTop: Dimensions.get('window').height < 690 ? 15 : 30,
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height < 690 ? Dimensions.get('window').height - 60 : Dimensions.get('window').height,

        backgroundColor: '#161616',
        borderRadius: 28,

        justifyContent: 'center',
        alignItems: 'center'
    },

    headerTitle: {
        marginTop: 10,
        marginBottom: 5,
        
        paddingTop: 5,
        paddingBottom: 5,

        width: Dimensions.get('window').width - 60,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    headerText: {
        fontSize: 30, 
        color: 'rgba(255, 255, 255, 0.9)', 
        fontFamily: 'SanFrancisco-Semibold',
    }
})

export default NewsStyles;