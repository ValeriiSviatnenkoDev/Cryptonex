/* React */
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableHighlight, View, Modal, ScrollView, Image } from 'react-native';

/* Expo */
import AppLoading from 'expo-app-loading';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';

/* Styles */
import NewsStyles from "./NewsStyles";

/* Fonts */
let customFonts = {
    'SanFrancisco-Regular': require('../../assets/fonts/SanFrancisco/SanFrancisco-Regular.ttf'),
    'SanFrancisco-Medium': require('../../assets/fonts/SanFrancisco/SanFrancisco-Medium.ttf'),
    'SanFrancisco-Semibold': require('../../assets/fonts/SanFrancisco/SanFrancisco-Semibold.ttf'),
    'SanFrancisco-Bold': require('../../assets/fonts/SanFrancisco/SanFrancisco-Bold.ttf'),
}

export default function News() {
    const [showModal, setModal] = useState(false);
    const [articles, setArticles] = useState([]);
    const [fonts, setFonts] = useState(false);
    const [news, setNews] = useState([]);
    const [isLoading, setLoading] = useState(false);

    /* News API */
    var url = 'https://newsapi.org/v2/everything?' + 'q=Bitcoin&' + 'from=2021-12-15&' + 'sortBy=popularity&' + 'apiKey=1d1d2853d2c6466ea0841d8f77c5d879';
    var req = new Request(url);
    let imageUrl = { uri: news.urlToImage };

    async function uploadNews() {
        setLoading(true);
        const response = await fetch(req);
        const jsonData = await response.json();
        setArticles(jsonData.articles)
        setLoading(false);
    }

    async function fontsLoad() {
        await Font.loadAsync(customFonts);
        setFonts(true);
    }

    useEffect(() => {
        uploadNews();
        fontsLoad();
    }, [])

    if (!fonts) {
        return <AppLoading />
    } else {
        return (
            <View style={NewsStyles.mainContainer}>
                <Modal animationType="slide" transparent={true} visible={showModal} onRequestClose={() => { setModal(false) }}>
                    <View style={NewsStyles.modalView}>
                        <View style={NewsStyles.chartModalView}>
                            <View style={NewsStyles.modalControl}>
                                <FontAwesome name="angle-down" size={36} style={NewsStyles.modalControlIcon} color="#49beb7" onPress={() => { setModal(false) }} />
                            </View>
                            <View>
                                <Text style={{ width: 320, fontSize: 18, fontFamily: 'SanFrancisco-Semibold', color: 'white', textAlign: 'center', borderRadius: 18, padding: 10, backgroundColor: '#1a1a1a' }}>{news.title}</Text>
                                <Image style={{ width: 320, height: 200, marginTop: 10, marginBottom: 10, borderRadius: 20 }} source={imageUrl} />
                                <Text style={{ width: 320, fontSize: 15, fontFamily: 'SanFrancisco-Medium', color: 'white', textAlign: 'center', borderRadius: 18, padding: 10, backgroundColor: '#1a1a1a' }}>{news.description}</Text>
                                <Text style={{ width: 320, fontSize: 13, fontFamily: 'SanFrancisco-Medium', color: 'white', textAlign: 'center', borderRadius: 18, padding: 10, backgroundColor: '#1a1a1a', marginTop: 10, marginBottom: 10 }}>{news.content}</Text>
                                <Text style={{ width: 320, fontSize: 12, fontFamily: 'SanFrancisco-Medium', color: 'white', textAlign: 'center', borderRadius: 18, padding: 10, backgroundColor: '#1a1a1a' }}>{news.publishedAt}</Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                {
                    isLoading ?
                        <ActivityIndicator size="large" color="#49beb7" />
                        :
                        <View style={NewsStyles.containerContent}>
                            <ScrollView style={{ borderRadius: 20 }}>
                                <Text style={{ marginLeft: 20, fontSize: 30, color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'SanFrancisco-Semibold', textAlign: 'center', width: 320, padding: 10, backgroundColor: 'rgba(73, 190, 183, 0.1)', borderRadius: 20, marginTop: 10, }}>News</Text>
                                {
                                    articles.map(art => (
                                        <TouchableHighlight onPress={() => { setModal(true); setNews(art); }}>
                                            <View style={NewsStyles.newsContainer}>
                                                <Text style={NewsStyles.newsHeader}>{art.title}</Text>
                                            </View>
                                        </TouchableHighlight>
                                    ))
                                }
                            </ScrollView>
                        </View>
                }
            </View>
        );
    }
}