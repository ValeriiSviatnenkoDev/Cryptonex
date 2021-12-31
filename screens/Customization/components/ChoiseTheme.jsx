/* React */
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* Expo */
import { AntDesign, Feather } from '@expo/vector-icons';

/* Styles & Utils */
import ThemeStyles from '../../Style/Styles/Customization/ThemeStyles.js';

const ChoiseTheme = () => {
    const navigation = useNavigation();
    const [switchTheme, setSwitchTheme] = useState(false);

    const handleSaveTheme = async () => {
        await AsyncStorage.setItem('theme', JSON.stringify(switchTheme));
        return navigation.navigate('Lang');
    }

    return (
        <View style={ThemeStyles.mainContainer}>
            <View style={ThemeStyles.containerContent}>
                <Image style={ThemeStyles.themeCompanyImage} source={require('../../../assets/image/Logo.png')} />
                <Image style={ThemeStyles.themeImage} source={require('../../../assets/image/themeCustom.png')} />
                <Text style={ThemeStyles.themeText}>Для начала узнаем, ты предпочитаешь светлую или тёмную сторону?</Text>
                <Text style={ThemeStyles.themeText}>Кхем, прости, заигрался со словами, я про тему, светлая или тёмна?</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Switch value={switchTheme} color='#50cc5c' onValueChange={() => { setSwitchTheme(prev => !prev) }} />
                    {
                        switchTheme ?
                            <Feather name="sun" size={29} color="rgba(255, 219, 61, 0.9)" style={{ paddingLeft: 5 }} />
                            :
                            <Feather name="moon" size={29} color="rgba(255, 255, 255, 0.6)" style={{ paddingLeft: 5 }} />
                    }
                </View>
                <Text style={[ThemeStyles.themeText, { fontSize: 20 }]}>{switchTheme ? 'Или всё таки светлая?' : 'Тёмная?'}</Text>
                <AntDesign name="arrowright" size={40} color="#46b350" style={{ marginBottom: 40 }} onPress={() => handleSaveTheme()} />
            </View>
        </View>
    );
}

export default ChoiseTheme;