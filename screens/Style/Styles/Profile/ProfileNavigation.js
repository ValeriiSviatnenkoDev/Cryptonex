import { Dimensions, StyleSheet } from "react-native";

const NavigationStyles = StyleSheet.create({
    containerNavigation: {
        width: Dimensions.get('window').width - 25,
        height: Dimensions.get('window').height > 690 ? 100 : 90,

        padding: 15,

        backgroundColor: '#161616',
        borderRadius: 20,

        flexDirection: "row",
        justifyContent: "space-around",
    }
})

export default NavigationStyles;