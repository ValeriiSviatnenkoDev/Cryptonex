import { Dimensions, StyleSheet } from "react-native";

const NewsCard = StyleSheet.create({
    headerNews: {
        padding: 15
    },

    headerNewsText: {
        paddingTop: 5,
        paddingBottom: 1,

        color: 'white',
        fontSize: 20,
        fontFamily: 'SanFrancisco-Semibold'
    },

    headerTextTitle: {
        width: 140,
        paddingTop: 2,

        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontFamily: 'SanFrancisco-Semibold'
    },

    newsCard: {
        padding: 10
    },

    newsCardContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    newsCardImage: {
        width: Dimensions.get('window').width - 160,
        height: 230,
        marginBottom: 5,

        borderRadius: 16
    },

    newsCardText: {
        width: Dimensions.get('window').width - 150,
        paddingTop: 5,
        paddingBottom: 20,

        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 12,
        fontFamily: 'SanFrancisco-Semibold'
    }
})

export default NewsCard;