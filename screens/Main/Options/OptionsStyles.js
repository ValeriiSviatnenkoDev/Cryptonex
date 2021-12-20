import { StyleSheet } from "react-native";

const OptionsStyles = StyleSheet.create({
    modalView: {
        marginTop: 270,
        justifyContent: "center",
        alignItems: "center",
        
        backgroundColor: "rgba(255, 255, 255, 0)",
    },

    modalContainer: {
        width: 400,
        height: 600,
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

    optionsContainer: {
        width: 360, 
        height: 600,
        borderRadius: 20,
        backgroundColor: '#1a1a1a',

        alignItems: 'center'
    },

    option: {
        marginTop: 20,
        padding: 5,

        width: 340,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',

        backgroundColor: '#212121',
        borderRadius: 18,
    }

})

export default OptionsStyles;