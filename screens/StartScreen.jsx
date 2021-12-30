/* React */
import React, { useContext, useState, useEffect } from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* Expo */
import AppLoading from 'expo-app-loading';

/* Styles & Utils */
import Styles from './Style/Styles/StartScreen/Styles.js';
import { heandlerFontsLoad } from './Style/Utils/handleLoadFonts.js';

/* Components */
import AuthAccount from './Login/Login.jsx';
import RegisterAccount from './Register/Register';

/* Context */
import { StartContext } from './context/startContext.js';

const StartScreen = () => {
    const [fonts, setFonts] = useState(false); 
    const { showSignIn, showSignUp, setShowSignIn, setShowSignUp, setShowSignInGoogle } = useContext(StartContext); 
    const navigation = useNavigation();

    useEffect(async () => {
        const res = await heandlerFontsLoad();
        setFonts(res);
    }, []);

    if (!fonts) {
        return <AppLoading />
    } else {
        return (
            <View style={Styles.mainContainer}>
                <View style={Styles.containerContent}>
                    <Image style={Styles.conatinerImage} source={require('../assets/image/Logo.png')} />
                    <Text style={Styles.titleText}>Твой шанс изменить своё будущее, не открывай зонт, лучше лови крипту!</Text>
                    <Text style={Styles.titleText}>Cryptocloud — добывай столько крипты, сколько падает капель во время дождя!</Text>
                    <TouchableHighlight style={Styles.buttonSignIn} onPress={() => { setShowSignIn(true); }}>
                        <Text style={Styles.signInText}>Войти</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={Styles.buttonSignUp} onPress={() => { setShowSignUp(true) }}>
                        <Text style={Styles.signUpText}>Создать аккаунт</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={Styles.buttonSignGoogle} onPress={() => { setShowSignInGoogle(true); navigation.navigate('Main') }}>
                        <>
                            <Text style={Styles.signInGoogle}>Войти с</Text>
                            <Image style={Styles.imageGoogle} source={require('../assets/image/GoogleImage.png')} />
                        </>
                    </TouchableHighlight>
                    <Text style={Styles.companyYear}>Cryptonex 2021</Text>
                    {
                        showSignIn ? <AuthAccount /> : null
                    }
                    {
                        showSignUp ? <RegisterAccount /> : null
                    }
                </View>
            </View>
        );
    }
}

export default StartScreen;
