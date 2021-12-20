/* React */
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, TouchableOpacity, View, TouchableHighlight } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* Expo */
import AppLoading from 'expo-app-loading';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';

/* Styles */
import ProfileStyles from './ProfileStyles';

/* Context */
import { ProfileContext } from './profileContext.js'

/* Components */
import Cards from './Cards/ModalCards';

/* Fonts */
let customFonts = {
    'SanFrancisco-Regular': require('../../assets/fonts/SanFrancisco/SanFrancisco-Regular.ttf'),
    'SanFrancisco-Medium': require('../../assets/fonts/SanFrancisco/SanFrancisco-Medium.ttf'),
    'SanFrancisco-Semibold': require('../../assets/fonts/SanFrancisco/SanFrancisco-Semibold.ttf'),
    'SanFrancisco-Bold': require('../../assets/fonts/SanFrancisco/SanFrancisco-Bold.ttf'),
}
function Profile() {
    const [fonts, setFonts] = useState(false);
    const [showId, setShowId] = useState(true);
    const [isLoading, setLoading] = useState(false);

    const [user, setUser] = useState([]);

    const { showCards, setShowCards, showAction, setShowAction, showOptions, setShowOptions } = useContext(ProfileContext);

    const navigation = useNavigation();

    async function fontsLoad() {
        await Font.loadAsync(customFonts);
        setFonts(true);
    }

    async function loadData() {
        setLoading(true);
        const userData = await AsyncStorage.getItem('user');
        setUser(JSON.parse(userData));
        setLoading(false);
    }

    useEffect(() => {
        fontsLoad();
        loadData();
    }, []);

    if (!fonts) {
        return <AppLoading />
    } else {
        return (
            <View style={ProfileStyles.mainContainer}>
                {
                    showCards ? <Cards /> : null
                }
                {
                    isLoading ?
                        <ActivityIndicator />
                        :
                        <View style={ProfileStyles.containerContent}>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ width: 140, height: 140, borderWidth: 3, borderColor: '#49beb7', borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                                    <Image style={{ width: 100, height: 100 }} source={require('../../assets/image/Avatar.png')} />
                                </View>
                                <Text style={{ width: 340, height: 40, backgroundColor: '#1a1a1a', color: 'rgba(255, 255, 255, 1)', fontSize: 16, fontFamily: 'SanFrancisco-Semibold', textAlign: 'center', padding: 8, borderRadius: 13, marginTop: 10 }}>{user.user.username}</Text>
                                <Text style={{ width: 340, height: 40, backgroundColor: '#1a1a1a', color: 'rgba(255, 255, 255, 1)', fontSize: 16, fontFamily: 'SanFrancisco-Semibold', textAlign: 'center', padding: 8, borderRadius: 13, marginTop: 10 }}>{user.user.useremail}</Text>
                                <Text style={{ width: 340, height: 40, backgroundColor: '#1a1a1a', color: 'rgba(255, 255, 255, 1)', fontSize: 16, fontFamily: 'SanFrancisco-Semibold', textAlign: 'center', padding: 8, borderRadius: 13, marginTop: 10 }} onPress={() => setShowId(prev => !prev)}>{showId ? '* * * * * * * * * * * * * * * * * *' : `${user.user.id}`}</Text>
                            </View>
                            <View style={{ width: 340, height: 60, flexDirection: 'row', justifyContent: 'space-around', marginTop: 30, marginBottom: 30 }}>
                                <TouchableHighlight style={{ width: 55, height: 55, backgroundColor: '#49beb7', justifyContent: 'center', alignItems: 'center', borderRadius: 12 }} onPress={() => { setShowCards(true) }}>
                                    <FontAwesome name="credit-card" size={30} color="white" />
                                </TouchableHighlight>
                                <TouchableHighlight style={{ width: 55, height: 55, backgroundColor: '#49beb7', justifyContent: 'center', alignItems: 'center', borderRadius: 12 }}>
                                    <FontAwesome name="shopping-cart" size={30} color="white" />
                                </TouchableHighlight>
                                <TouchableHighlight style={{ width: 55, height: 55, backgroundColor: '#49beb7', justifyContent: 'center', alignItems: 'center', borderRadius: 12 }}>
                                    <FontAwesome name="gear" size={30} color="white" />
                                </TouchableHighlight>
                            </View>
                            <View>
                                <View style={{ width: 320, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 16, fontFamily: 'SanFrancisco-Semibold', padding: 5 }}>{user.user.userlvl} уровень</Text>
                                    <Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 16, fontFamily: 'SanFrancisco-Semibold', padding: 5 }}>{user.user.userxp} / {user.user.userlvl * 10}</Text>
                                </View>
                                <ProgressBar progress={user.user.userlvl * 0.1} color='#49beb7' style={{ width: 320, height: 13, backgroundColor: 'rgba(73, 190, 183, 0.1)', borderRadius: 5 }} />
                                <Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 30, fontFamily: 'SanFrancisco-Semibold', textAlign: 'center', margin: 5 }}>{user.user.usertype}</Text>
                            </View>
                        </View>
                }

                <View style={ProfileStyles.containerNavigation}>
                    <TouchableOpacity>
                        <FontAwesome name="newspaper-o" size={35} color="rgba(255, 255, 255, 0.8)" onPress={() => navigation.navigate('News')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="search" size={35} color="rgba(255, 255, 255, 0.8)" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="gear" size={35} color="rgba(255, 255, 255, 0.8)" onPress={() => { setShowSettings(true) }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="bitcoin" size={24} size={35} color="rgba(255, 255, 255, 0.8)" onPress={() => navigation.navigate('Main')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Profile;