import { Dimensions, StyleSheet } from "react-native";
import { handlerHeight } from '../../Utils/handlerFunction.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const checkUserTheme = async () => {
    return await AsyncStorage.getItem('theme');
}

const NameStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: checkUserTheme() ? '#ededed' : '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerContent: {
        marginTop: 20,
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').height < 690 ? handlerHeight(Dimensions.get('window').height, 0) : Dimensions.get('window').height - 20,

        backgroundColor: checkUserTheme() ? '#d1d1d1' : '#161616',
        borderRadius: 28,

        justifyContent: 'space-between',
        alignItems: 'center'
    },

    nameText: {
        width: Dimensions.get('window').width - 80,

        textAlign: 'center',
        color: checkUserTheme() ? 'rgba(26, 26, 26, 0.5)' : 'rgba(255, 255, 255, 0.4)',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: 16
    },

    nameCompanyImage: {
        width: 360,
        height: 70,
        marginTop: 20,

        aspectRatio: 5
    },

    nameImage: {
        width: 170,
        height: 180
    },

    nameInput: {
        width: 225,
        height: 40,

        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderBottomWidth: 2,
        borderColor: checkUserTheme() ? '#46b350' : '#50cc5c',
        color: checkUserTheme() ? 'rgba(26, 26, 26, 0.5)' : 'rgba(255, 255, 255, 1)',

        fontFamily: 'SanFrancisco-Medium',
    },

    errorView: {
        marginTop: Dimensions.get('window').height < 690 ? 20 : 130,
        justifyContent: "center",
        alignItems: "center",
        
        backgroundColor: "rgba(255, 255, 255, 0)",
      },

      errorModalView: {
        width: Dimensions.get('window').width - 75,
        height: Dimensions.get('window').height < 690 ? 80 : 100,
        backgroundColor: "#c41b1b",
        borderRadius: 28,

        justifyContent: "center",
        alignItems: "center",
    },

    modalText: {
        padding: 5,
        width: Dimensions.get('window').height < 690 ? 180 : 230,

        color: 'white',
        fontFamily: 'SanFrancisco-Medium',
        fontSize: Dimensions.get('window').height < 690 ? 13 : 16,
        textAlign: "center"
    }
})

export default NameStyles;