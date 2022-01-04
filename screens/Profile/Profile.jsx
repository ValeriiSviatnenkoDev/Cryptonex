/* React */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Modal, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GestureRecognizer from 'react-native-swipe-gestures';

/* Expo */
import AppLoading from 'expo-app-loading';

/* Styles & Utils */
import ProfileStyles from './ProfileStyles';
import { heandlerFontsLoad } from '../Style/Utils/handleLoadFonts';

/* Components */
import ProfileNavigation from './components/ProfileNavigation.jsx';
import ProfileTrades from './components/ProfileTrades.jsx';
import ProfileCrediting from './components/ProfileCrediting.jsx';

function Profile() {
    const [fonts, setFonts] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [showModal, setModal] = useState(false);

    const [user, setUser] = useState([]);

    async function loadData() {
        setLoading(true);
        const userData = await AsyncStorage.getItem('user');
        setUser(JSON.parse(userData));
        setLoading(false);
    }

    useEffect(() => {
        const res = heandlerFontsLoad();
        setFonts(res);
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
                            <ScrollView style={{ borderRadius: 20 }} showsVerticalScrollIndicator={false}>
                                <ProfileTrades />
                                <ProfileCrediting />
                            </ScrollView>
                        </View>
                }
                <ProfileNavigation />
            </View >
        );
    }
}

export default Profile;
