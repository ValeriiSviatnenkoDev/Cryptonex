/* React */
import React, { useContext, useState, useEffect } from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* Expo */
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import Google from 'expo-google-sign-in';

/* Styles */
import StartScreenStyles from './StartScreenStyles';

/* Components */
import AuthAccount from './Login/Login.jsx';
import RegisterAccount from './Register/Register';

/* Context */
import { StartContext } from './startContext.js';

let customFonts = {
    'SanFrancisco-Regular': require('../assets/fonts/SanFrancisco/SanFrancisco-Regular.ttf'),
    'SanFrancisco-Medium': require('../assets/fonts/SanFrancisco/SanFrancisco-Medium.ttf'),
    'SanFrancisco-Semibold': require('../assets/fonts/SanFrancisco/SanFrancisco-Semibold.ttf'),
    'SanFrancisco-Bold': require('../assets/fonts/SanFrancisco/SanFrancisco-Bold.ttf'),
}

function StartScreen() {
    const [fonts, setFonts] = useState(false);
    const { showSignIn, showSignUp, setShowSignIn, setShowSignUp, setShowSignInGoogle } = useContext(StartContext);

    const navigation = useNavigation();

    const signInWithGoogle = () => {
        const config = { 
            iosClientId: '1092714447173-cu978qu3r0tab4v8vl6l3s2mshgdgqk0.apps.googleusercontent.com',
            androidClientId: '1092714447173-r5gleu7g0rqn840ndbnhqautmnuug4q1.apps.googleusercontent.com',
            scopes: ['profile', 'email']
        }
    }

    async function fontsLoad() {
        await Font.loadAsync(customFonts);
        setFonts(true);
    }

    useEffect(() => {
        fontsLoad();
    }, []);

    if (!fonts) {
        return <AppLoading />
    } else {
        return (
            <View style={StartScreenStyles.mainContainer}>
                <View style={StartScreenStyles.containerContent}>
                    <Image style={StartScreenStyles.conatinerImage} source={require('../assets/image/Logo.png')} />
                    <Text style={StartScreenStyles.titleText}>Твой шанс изменить своё будущее, не открывай зонт, лучше лови крипту!</Text>
                    <Text style={StartScreenStyles.titleText}>Cryptocloud — добывай столько крипты, сколько падает капель во время дождя!</Text>
                    <TouchableHighlight style={StartScreenStyles.buttonSignIn} onPress={() => { setShowSignIn(true); }}>
                        <Text style={StartScreenStyles.signInText}>Войти</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={StartScreenStyles.buttonSignUp} onPress={() => { setShowSignUp(true) }}>
                        <Text style={StartScreenStyles.signUpText}>Создать аккаунт</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={StartScreenStyles.buttonSignGoogle} onPress={() => { setShowSignInGoogle(true); navigation.navigate('Main') }}>
                        <>
                            <Text style={StartScreenStyles.signInGoogle}>Войти с</Text>
                            <Image style={StartScreenStyles.imageGoogle} source={require('../assets/image/GoogleImage.png')} />
                        </>
                    </TouchableHighlight>
                    <Text style={StartScreenStyles.companyYear}>Cryptonex 2021</Text>
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
