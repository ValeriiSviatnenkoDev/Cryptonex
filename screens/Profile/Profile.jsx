/* React */
import React, { useEffect, useState, useRef } from 'react';
import { ActivityIndicator, Image, Modal, Text, TouchableOpacity, View, ScrollView, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GestureRecognizer from 'react-native-swipe-gestures';

/* Expo */
import AppLoading from 'expo-app-loading';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';

/* Styles */
import ProfileStyles from './ProfileStyles';

/* Context */
import { ProfileContext } from './profileContext.js'

/* Animation */
import { translateToBottom, translateToTop, opacityFrom, opacityTo } from '../Style/Animation/handlerTranslate.js';

/* Fonts */
let customFonts = {
    'SanFrancisco-Regular': require('../../assets/fonts/SanFrancisco/SanFrancisco-Regular.ttf'),
    'SanFrancisco-Medium': require('../../assets/fonts/SanFrancisco/SanFrancisco-Medium.ttf'),
    'SanFrancisco-Semibold': require('../../assets/fonts/SanFrancisco/SanFrancisco-Semibold.ttf'),
    'SanFrancisco-Bold': require('../../assets/fonts/SanFrancisco/SanFrancisco-Bold.ttf'),
}
function Profile() {
    const [fonts, setFonts] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [showModal, setModal] = useState(false);
    const [longPress, setLongPress] = useState(true);
    const [user, setUser] = useState([]);

    const tradeContainer = useRef(new Animated.Value(130)).current;
    const billingContainer = useRef(new Animated.Value(130)).current;
    const opacityContent = useRef(new Animated.Value(0)).current;

    const navigation = useNavigation();

    function checkLongPress(statusPress, arg1, arg2) {
        if (statusPress) {
            translateToBottom(arg1);
            opacityTo(arg2);
            setLongPress(false);
        } else {
            translateToTop(arg1)
            opacityFrom(arg2);
            setLongPress(true);
        }
    }

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
                <GestureRecognizer onSwipeDown={() => { setModal(false) }}>
                    <Modal animationType="slide" transparent={true} visible={showModal} onRequestClose={() => { setModal(false) }}>
                        <Text>Hello, shopopalo!</Text>
                    </Modal>
                </GestureRecognizer>
                {
                    isLoading ?
                        <ActivityIndicator size="large" color="#50cc5c" />
                        :
                        <View style={ProfileStyles.containerContent}>
                            <View style={ProfileStyles.headerTitle}>
                                <Text style={ProfileStyles.headerText}>Профиль</Text>
                                <TouchableOpacity style={ProfileStyles.profileImageContainer} onPress={() => { setModal(true) }}>
                                    <Image style={ProfileStyles.profileImage} source={require('../../assets/image/Avatar.png')} />
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={{ borderRadius: 20 }}>
                                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'SanFrancisco-Semibold', paddingTop: 10, paddingBottom: 5 }}>Последние трейды</Text>
                                <Animated.View style={[ProfileStyles.tradeInfoProfile, { height: tradeContainer }]} >
                                    <TouchableOpacity style={longPress ? { opacity: 0.1 } : { opacity: 1 }} onLongPress={() =>
                                        longPress ?
                                            checkLongPress(longPress, tradeContainer, opacityContent)
                                            :
                                            checkLongPress(longPress, tradeContainer, opacityContent)
                                    }>
                                        <ScrollView>
                                            <TouchableOpacity style={[{ backgroundColor: '#212121', margin: 10, borderRadius: 18, height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }]} onPress={() => { console.log('Hello!') }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                                                    <Image style={{ width: 32, height: 32 }} source={require('../../assets/image/1.png')} />
                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, paddingLeft: 5 }}>Bitcoin</Text>
                                                </View>
                                                <View style={{ paddingRight: 10 }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>+ 0.045</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ backgroundColor: '#212121', margin: 10, borderRadius: 18, height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                                                    <Image style={{ width: 32, height: 32 }} source={require('../../assets/image/1.png')} />
                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, paddingLeft: 5 }}>Bitcoin</Text>
                                                </View>
                                                <View style={{ paddingRight: 10 }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>+ 0.502</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ backgroundColor: '#212121', margin: 10, borderRadius: 18, height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                                                    <Image style={{ width: 32, height: 32 }} source={require('../../assets/image/1.png')} />
                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, paddingLeft: 5 }}>Bitcoin</Text>
                                                </View>
                                                <View style={{ paddingRight: 10 }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>+ 1.123</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ backgroundColor: '#212121', margin: 10, borderRadius: 18, height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                                                    <Image style={{ width: 32, height: 32 }} source={require('../../assets/image/1.png')} />
                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, paddingLeft: 5 }}>Bitcoin</Text>
                                                </View>
                                                <View style={{ paddingRight: 10 }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>- 2.000</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ backgroundColor: '#212121', margin: 10, borderRadius: 18, height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                                                    <Image style={{ width: 32, height: 32 }} source={require('../../assets/image/1.png')} />
                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, paddingLeft: 5 }}>Bitcoin</Text>
                                                </View>
                                                <View style={{ paddingRight: 10 }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>+ 0.523</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ backgroundColor: '#212121', margin: 10, borderRadius: 18, height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                                                    <Image style={{ width: 32, height: 32 }} source={require('../../assets/image/1.png')} />
                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, paddingLeft: 5 }}>Bitcoin</Text>
                                                </View>
                                                <View style={{ paddingRight: 10 }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>+ 1.421</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </ScrollView>
                                    </TouchableOpacity>
                                </Animated.View>

                                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'SanFrancisco-Semibold', paddingTop: 10, paddingBottom: 5 }}>Зачисления</Text>
                                <Animated.View style={[ProfileStyles.tradeInfoProfile, { height: billingContainer }]} >
                                    <TouchableOpacity style={longPress ? { opacity: 0.1 } : { opacity: 1 }} onLongPress={() =>
                                        longPress ?
                                            checkLongPress(longPress, billingContainer, opacityContent)
                                            :
                                            checkLongPress(longPress, billingContainer, opacityContent)
                                    }>
                                        <ScrollView>
                                            <TouchableOpacity style={[{ backgroundColor: '#212121', margin: 10, borderRadius: 18, height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }]} onPress={() => { console.log('Hello!') }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                                                    <Image style={{ width: 32, height: 32 }} source={require('../../assets/image/money.png')} />
                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, paddingLeft: 5 }}>RUB</Text>
                                                </View>
                                                <View style={{ paddingRight: 10 }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>+ 10220₽</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ backgroundColor: '#212121', margin: 10, borderRadius: 18, height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                                                    <Image style={{ width: 32, height: 32 }} source={require('../../assets/image/money.png')} />
                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, paddingLeft: 5 }}>USD</Text>
                                                </View>
                                                <View style={{ paddingRight: 10 }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>+ 5622$</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ backgroundColor: '#212121', margin: 10, borderRadius: 18, height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                                                    <Image style={{ width: 32, height: 32 }} source={require('../../assets/image/money.png')} />
                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, paddingLeft: 5 }}>EUR</Text>
                                                </View>
                                                <View style={{ paddingRight: 10 }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>- 12332€</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ backgroundColor: '#212121', margin: 10, borderRadius: 18, height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                                                    <Image style={{ width: 32, height: 32 }} source={require('../../assets/image/money.png')} />
                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, paddingLeft: 5 }}>UAH</Text>
                                                </View>
                                                <View style={{ paddingRight: 10 }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>+ 6650₴</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ backgroundColor: '#212121', margin: 10, borderRadius: 18, height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                                                    <Image style={{ width: 32, height: 32 }} source={require('../../assets/image/money.png')} />
                                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, paddingLeft: 5 }}>EUR</Text>
                                                </View>
                                                <View style={{ paddingRight: 10 }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>+ 6353€</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </ScrollView>
                                    </TouchableOpacity>
                                </Animated.View>
                            </ScrollView>
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
            </View >
        );
    }
}

export default Profile;

/*

                {
                    showCards ? <Cards /> : null
                }
                {
                    isLoading ?
                        <ActivityIndicator />
                        :
                        <View style={ProfileStyles.containerContent}>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <View style={ProfileStyles.profileImageContainer}>
                                    <Image style={ProfileStyles.profileImage} source={require('../../assets/image/Avatar.png')} />
                                </View>
                                <Text style={ProfileStyles.profileInfo}>{user.user.username}</Text>
                                <Text style={ProfileStyles.profileInfo}>{user.user.useremail}</Text>
                                <Text style={ProfileStyles.profileInfo} onPress={() => setShowId(prev => !prev)}>{showId ? '* * * * * * * * * * * * * * * * * *' : `${user.user.id}`}</Text>
                            </View>
                            <View style={{ width: 340, height: 60, flexDirection: 'row', justifyContent: 'space-around', marginTop: 30, marginBottom: 30 }}>
                                <TouchableHighlight style={{ width: 55, height: 55, backgroundColor: '#50cc5c', justifyContent: 'center', alignItems: 'center', borderRadius: 12 }} onPress={() => { setShowCards(true) }}>
                                    <FontAwesome name="credit-card" size={30} color="white" />
                                </TouchableHighlight>
                                <TouchableHighlight style={{ width: 55, height: 55, backgroundColor: '#50cc5c', justifyContent: 'center', alignItems: 'center', borderRadius: 12 }}>
                                    <FontAwesome name="shopping-cart" size={30} color="white" />
                                </TouchableHighlight>
                                <TouchableHighlight style={{ width: 55, height: 55, backgroundColor: '#50cc5c', justifyContent: 'center', alignItems: 'center', borderRadius: 12 }}>
                                    <FontAwesome name="gear" size={30} color="white" />
                                </TouchableHighlight>
                            </View>
                            <View>
                                <View style={{ width: 320, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 16, fontFamily: 'SanFrancisco-Semibold', padding: 5 }}>{user.user.userlvl} уровень</Text>
                                    <Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 16, fontFamily: 'SanFrancisco-Semibold', padding: 5 }}>{user.user.userxp} / {user.user.userlvl * 10}</Text>
                                </View>
                                <ProgressBar progress={user.user.userlvl * 0.1} color='#50cc5c' style={{ width: 320, height: 13, backgroundColor: 'rgba(73, 190, 183, 0.1)', borderRadius: 5 }} />
                                <Text style={{ color: 'rgba(255, 255, 255, 1)', fontSize: 30, fontFamily: 'SanFrancisco-Semibold', textAlign: 'center', margin: 5 }}>{user.user.usertype}</Text>
                            </View>
                        </View>
                }


*/