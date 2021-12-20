import { StyleSheet } from "react-native";

const ProfileStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerContent: {
        marginTop: 80,
        marginBottom: 15,
        width: 370,
        height: 650,

        backgroundColor: '#161616',
        borderRadius: 28,

        alignItems: 'center'

    },

    modalView: {
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center",
        
        backgroundColor: "rgba(255, 255, 255, 0)",
    },

    chartModalView: {
        width: 400,
        height: 650,
        backgroundColor: "#131313",
        borderRadius: 28,

        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: 'center'
    },

    modalControl: {
        flexDirection: "row",
        alignItems: 'flex-end'
    },

    modalContent: {
        padding: 5,

        width: 350,
        height: 550,

        flexDirection: 'column',
        alignItems: 'center'
    },  

    modalControlIcon: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 220,
        backgroundColor: '#49beb7',

        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 13,
        paddingRight: 13,

        borderRadius: 100,
    },


    containerNavigation: {
        width: 370,
        height: 90,

        padding: 15,

        backgroundColor: '#161616',
        borderRadius: 20,

        flexDirection: "row",
        justifyContent: 'space-between',
        
    }
})

export default ProfileStyles;