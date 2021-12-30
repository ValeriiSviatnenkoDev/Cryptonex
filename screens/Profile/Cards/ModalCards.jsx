/* React */
import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, View, Modal, TouchableHighlight, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* Expo */
import AppLoading from 'expo-app-loading';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/* Styles */
import ProfileStyles from "../ProfileStyles";

/* Context */
import { ProfileContext } from "../profileContext";

function Cards() {
    const [reverse, setReverse] = useState(false);
    const [hide, setHide] = useState(true);
    const [isLoading, setLoading] = useState(false);

    const [user, setUser] = useState([]);
    const [cardNum, setNum] = useState('None');

    const { showCards, setShowCards } = useContext(ProfileContext);

    const date = new Date();

    async function loadData() {
        setLoading(true);
        const userData = await AsyncStorage.getItem('user');
        setUser(JSON.parse(userData));
        setLoading(false);
    }

    async function createCard(id) {
        function parseNum(arg) {
            return parseInt(arg.replace(/[^\d]/g, ''));
        }

        let x = parseNum(id);
        if (x.toString().length == 16) {
            let f = (x / 2).toString().slice(12);
            let s = (x * 2).toString().slice(13);
            let t = ((x * 20) / 8).toString().slice(13);
            setNum(`5375 ${f} ${s} ${t}`);
        } else if (x.toString().length < 16) {
            x = x + (Math.random() * (100 - 10) + 100);
            let f = Math.floor((x / 3).toString().slice(11));
            let s = Math.floor((x / 2).toString().slice(11));
            let t = Math.floor(((x / 2) * 8).toString().slice(12));
            setNum(`5375 ${f} ${s} ${t}`);
        } else {
            x = x - (Math.random() * (100 - 10) + 100);
            let f = Math.floor((x / 3).toString().slice(11));
            let s = Math.floor((x / 2).toString().slice(11));
            let t = Math.floor(((x / 2) * 8).toString().slice(12));
            setNum(`5375 ${f} ${s} ${t}`);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <Modal animationType="slide" transparent={true} visible={showCards} onRequestClose={() => { setShowCards(false) }}>
            <View style={ProfileStyles.modalView}>
                <View style={ProfileStyles.chartModalView}>
                    <View style={ProfileStyles.modalControl}>
                        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'SanFrancisco-Semibold', paddingTop: 9, paddingBottom: 9 }}>Profile</Text>
                        <FontAwesome name="close" size={20} style={ProfileStyles.modalControlIcon} color="white" onPress={() => { setShowCards(false) }} />
                    </View>
                    <View style={ProfileStyles.modalContent}>
                        {
                            isLoading ?
                                <ActivityIndicator size="large" color="#50cc5c" />
                                :
                                cardNum == 'None' ?
                                    <MaterialCommunityIcons name="credit-card-plus-outline" size={40} color="white" style={{ backgroundColor: '#50cc5c', paddingLeft: 10, paddingRight: 8, paddingTop: 5, paddingBottom: 5, borderRadius: 12 }} onPress={() => { createCard(user.user.id); }} />
                                    :
                                    <TouchableHighlight onPress={() => { setReverse(prev => !prev) }}>
                                        {
                                            reverse ?
                                                <View style={{ width: 320, height: 200, backgroundColor: 'rgba(54, 102, 199, 1)', borderRadius: 23, justifyContent: 'center', marginTop: 10, transform: [{ scaleX: -1 }] }}>
                                                    <Image style={{ width: 60, height: 40, marginBottom: 20, marginLeft: 15 }} source={require('../../../assets/image/MasterCard.png')} />
                                                    <Text onPress={() => { setHide(prev => !prev) }} style={hide ? { textAlign: 'center', letterSpacing: 0.4, color: 'rgba(255, 255, 255, 1)', backgroundColor: 'rgba(47, 89, 173, 1)', fontSize: 21, fontFamily: 'SanFrancisco-Semibold', marginTop: 5 } : { textAlign: 'center', letterSpacing: 0.4, color: 'white', backgroundColor: 'rgba(47, 89, 173, 1)', transform: [{ scaleX: -1 }], fontSize: 21, fontFamily: 'SanFrancisco-Semibold', marginTop: 5 }}>{hide ? '***' : `${Math.floor(Math.random() * (999 - 100) + 100)}`}</Text>
                                                </View>
                                                :
                                                <View style={{ width: 320, height: 180, backgroundColor: 'rgba(107, 184, 255, 0.8)', borderRadius: 23, justifyContent: 'center', marginTop: 10 }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                                                        <Image style={{ width: 60, height: 40, marginLeft: 25 }} source={require('../../../assets/image/MasterCard.png')} />
                                                        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'SanFrancisco-Bold', marginRight: 25 }}>{user.user.userbalance == undefined ? 0 : user.user.userbalance}$</Text>
                                                    </View>
                                                    <Text style={{ textAlign: 'center', letterSpacing: 0.4, color: 'white', fontSize: 21, fontFamily: 'SanFrancisco-Semibold', marginTop: 5 }}>0000 0000 0000 0001</Text>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20 }}>
                                                        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'SanFrancisco-Semibold', marginRight: 30 }}>{date.getMonth() + 1}/{date.getFullYear().toString().slice(2)}</Text>
                                                        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'SanFrancisco-Semibold', marginLeft: 30 }}>{date.getMonth() + 1}/{(date.getFullYear() + 1).toString().slice(2)}</Text>
                                                    </View>
                                                </View>
                                        }
                                    </TouchableHighlight>
                        }
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default Cards;