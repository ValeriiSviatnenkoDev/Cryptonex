import { StyleSheet } from "react-native";

const NewsStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerContent: {
        marginTop: 30,
        width: 370,
        height: 700,

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
        width: 400,
        height: 800,
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

        width: 340,
        height: 100,

        backgroundColor: 'rgba(73, 190, 183, 0.02)',
        borderRadius: 20,

        justifyContent: "center",
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'rgba(73, 190, 183, 0.1)'
    },

    newsHeader: {
        width: 300,
        paddingTop: 20,
        paddingBottom: 20,

        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 13,
        fontFamily: 'SanFrancisco-Semibold'
    }
})

export default NewsStyles;