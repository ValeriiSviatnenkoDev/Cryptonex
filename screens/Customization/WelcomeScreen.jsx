/* React */
import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* Expo */
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';

/* Styles & Utils */
import WelcomeStyles from '../Style/Styles/Customization/WelcomeStyles.js'
import { heandlerFontsLoad } from '../Style/Utils/handleLoadFonts.js';

const WelcomeScreen = () => {
    const [fonts, setFonts] = useState(false); 
    const navigation = useNavigation();

    useEffect(async () => {
        const res = await heandlerFontsLoad();
        setFonts(res);
    }, []);

    if (!fonts) {
        return <AppLoading />
    } else {
        return (
            <View style={WelcomeStyles.mainContainer}>
                <View style={WelcomeStyles.containerContent}>
                    <Image style={WelcomeStyles.welcomeCompanyImage} source={require('../../assets/image/Logo.png')}/>
                    <Image style={WelcomeStyles.welcomeImage} source={require('../../assets/image/welcomeCustom.png')} />
                    <Text style={WelcomeStyles.welcomeText}>Привет, увы, я не могу тебя пропустить к регистрации пока ты не пройдешь этап настройки приложения.</Text>
                    <Text style={WelcomeStyles.welcomeText}>Пойми правильно, мы беспокоимся за обесепечение удобства пользованием нашим приложением, поэтому я выдам тебе пару заданий!</Text>
                    <Text style={WelcomeStyles.welcomeText}>Не переживай, выполнение заданий не займёт много времени.</Text>
                    <AntDesign name="arrowright" size={40} color="#46b350" style={{ marginBottom: 40 }} onPress={() => navigation.navigate('Name')}/>
                </View>
            </View>
        );
    }
}

export default WelcomeScreen;
