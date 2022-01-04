/* React */
import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, Modal, TouchableHighlight } from 'react-native';
import { Switch } from 'react-native-paper';
import GestureRecognizer from 'react-native-swipe-gestures';

/* Expo */
import AppLoading from 'expo-app-loading';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

/* Styles */
import OptionsStyles from './OptionsStyles.js';

/* Context */
import { MainContext } from '../mainContext.js';

/* Fonts */
let customFonts = {
    'SanFrancisco-Regular': require('../../../assets/fonts/SanFrancisco/SanFrancisco-Regular.ttf'),
    'SanFrancisco-Medium': require('../../../assets/fonts/SanFrancisco/SanFrancisco-Medium.ttf'),
    'SanFrancisco-Semibold': require('../../../assets/fonts/SanFrancisco/SanFrancisco-Semibold.ttf'),
    'SanFrancisco-Bold': require('../../../assets/fonts/SanFrancisco/SanFrancisco-Bold.ttf'),
}

function Options() {
    const [fonts, setFonts] = useState(false);
    const [switchColor, setSwitchColor] = useState(false);
    const [switchLang, setSwitchLang] = useState('ru');
    const [switchTheme, setSwitchTheme] = useState(false);

    const { showSettings, setShowSettings } = useContext(MainContext);

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
            <GestureRecognizer onSwipeDown={() => { setShowSettings(false) }}>
                <Modal animationType="slide" transparent={true} visible={showSettings} onRequestClose={() => { setShowSettings(false) }}>
                    <View style={OptionsStyles.modalView}>
                        <View style={OptionsStyles.modalContainer}>
                            <View style={OptionsStyles.modalControl}>
                                <MaterialIcons name="horizontal-rule" size={36} style={OptionsStyles.modalControlIcon} color="#50cc5c" onPress={() => setShowSettings(false)} />
                            </View>
                            <View style={OptionsStyles.optionsContainer}>
                                <View style={OptionsStyles.option}>
                                    <Text style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 16, fontFamily: 'SanFrancisco-Medium', padding: 5 }}>Тема приложения</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5, paddingRight: 5 }}>
                                        <Switch value={switchTheme} color='#50cc5c' onValueChange={() => { setSwitchTheme(prev => !prev) }} />
                                        {
                                            switchTheme ?
                                                <Feather name="sun" size={29} color="rgba(255, 219, 61, 0.9)" style={{ paddingLeft: 5 }} />
                                                :
                                                <Feather name="moon" size={29} color="rgba(255, 255, 255, 0.6)" style={{ paddingLeft: 5 }} />
                                        }
                                    </View>
                                </View>
                                <View style={OptionsStyles.option}>
                                    <Text style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 16, fontFamily: 'SanFrancisco-Medium', paddingLeft: 5, paddingRight: 5, paddingTop: 10, paddingBottom: 10 }}>Язык приложения</Text>
                                    <TouchableOpacity onPress={() => {
                                        if(switchLang == 'ru') {
                                           return setSwitchLang('ua');
                                        }

                                        if(switchLang == 'ua') {
                                           return setSwitchLang('en');
                                        }

                                        if(switchLang == 'en') {
                                            return setSwitchLang('ru');
                                        }
                                    }}>
                                        {
                                            switchLang == 'ru' ?
                                                <Image style={{ width: 29, height: 29, marginRight: 10 }} source={require(`../../../assets/image/ru.png`)} />
                                                : switchLang == 'ua' ?
                                                    <Image style={{ width: 29, height: 29, marginRight: 10 }} source={require(`../../../assets/image/ua.png`)} />
                                                    : switchLang == 'en' ?
                                                        <Image style={{ width: 29, height: 29, marginRight: 10 }} source={require(`../../../assets/image/en.png`)} />
                                                        :
                                                        <Image style={{ width: 29, height: 29, marginRight: 10 }} source={require(`../../../assets/image/ru.png`)} />
                                        }
                                    </TouchableOpacity>
                                </View>
                                <View style={OptionsStyles.option}>
                                    <Text style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 16, fontFamily: 'SanFrancisco-Medium', padding: 5 }}>Режим дальтоника</Text>
                                    <Switch value={switchColor} color='#50cc5c' onValueChange={() => { setSwitchColor(prev => !prev) }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </GestureRecognizer>
        );
    }
}

export default Options;