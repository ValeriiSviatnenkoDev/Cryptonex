/* React */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* Expo */
import { AntDesign, Feather } from '@expo/vector-icons';

/* Styles & Utils */
import ThemeStyles from '../../Style/Styles/Customization/ThemeStyles.js';

const ChoiseLang = () => {
    const navigation = useNavigation();
    const [switchLang, setSwitchLang] = useState('ru');

    const handleSaveLang = async () => {
        await AsyncStorage.setItem('lang', JSON.stringify(switchLang));
        return navigation.navigate('Register');
    }

    return (
        <View style={ThemeStyles.mainContainer}>
            <View style={ThemeStyles.containerContent}>
                <Image style={ThemeStyles.themeCompanyImage} source={require('../../../assets/image/Logo.png')} />
                <Image style={ThemeStyles.themeImage} source={require('../../../assets/image/langCustom.png')} />
                <Text style={ThemeStyles.themeText}>Тему определили, логин тоже, что-то я забыл...</Text>
                <Text style={ThemeStyles.themeText}>Точно, приступим к выбору языка приложения, можем продолжить на русском, можем сменить на украинский или на английский, как хочешь.</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        if (switchLang == 'ru') {
                            return setSwitchLang('ua');
                        }

                        if (switchLang == 'ua') {
                            return setSwitchLang('en');
                        }

                        if (switchLang == 'en') {
                            return setSwitchLang('ru');
                        }
                    }}>
                        {
                            switchLang == 'ru' ?
                                <Image style={{ width: 55, height: 55 }} source={require(`../../../assets/image/ru.png`)} />
                                : switchLang == 'ua' ?
                                    <Image style={{ width: 55, height: 55 }} source={require(`../../../assets/image/ua.png`)} />
                                    : switchLang == 'en' ?
                                        <Image style={{ width: 55, height: 55 }} source={require(`../../../assets/image/en.png`)} />
                                        :
                                        <Image style={{ width: 55, height: 55 }} source={require(`../../../assets/image/ru.png`)} />
                        }
                    </TouchableOpacity>
                </View>
                <AntDesign name="arrowright" size={40} color="#46b350" style={{ marginBottom: 40 }} onPress={() => handleSaveLang()} />
            </View>
        </View>
    );
}

export default ChoiseLang;