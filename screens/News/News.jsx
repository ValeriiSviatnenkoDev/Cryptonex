/* React */
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableHighlight, View, ScrollView, Image, Dimensions } from 'react-native';

/* Expo */
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';

/* Styles & Utils */
import NewsStyles from "./NewsStyles";
import { heandlerFontsLoad } from '../Style/Utils/handleLoadFonts.js';

/* Components */
import ModalNews from "./components/ModalNews";

export default function News() {
    /* state, loading */
    const [isLoading, setLoading] = useState(false);
    const [fonts, setFonts] = useState(false);

    /* control modal */
    const [showModal, setModal] = useState(false);;

    /* data */
    const [artNow, setArtNow] = useState([]);
    const [artYDay, setArtYDay] = useState([]);
    const [news, setNews] = useState([]);

    /* Date */
    const date = new Date();

    /* News API */
    const urls = {
        newsNow: 'https://newsapi.org/v2/everything?' + 'q=cryptocurrency&' + `from=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}&` + 'sortBy=popularity&' + 'apiKey=1d1d2853d2c6466ea0841d8f77c5d879',
        newsYDay: 'https://newsapi.org/v2/everything?' + 'q=cryptocurrency&' + `from=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - 1}&` + 'sortBy=popularity&' + 'apiKey=1d1d2853d2c6466ea0841d8f77c5d879'
    }

    const requests = {
        reqNewsNow: new Request(urls.newsNow),
        reqNewsYDay: new Request(urls.newsYDay)
    }

    async function uploadNews() {
        setLoading(true);

        const responseNewsNow = await fetch(requests.reqNewsNow);
        const responseNewsYDay = await fetch(requests.reqNewsYDay);

        const _newsNowData = await responseNewsNow.json();
        const _newsYdayData = await responseNewsYDay.json();

        setArtNow(_newsNowData.articles);
        setArtYDay(_newsYdayData.articles);

        setLoading(false);
    }

    useEffect(async () => {
        uploadNews();
        const res = await heandlerFontsLoad();
        setFonts(res);
    }, [])

    if (!fonts) {
        return <AppLoading />
    } else {
        return (
            <View style={NewsStyles.mainContainer}>
                <ModalNews showModal={showModal} setModal={setModal} news={news} />

                {
                    isLoading ?
                        <ActivityIndicator size="large" color="#50cc5c" />
                        :
                        <View style={NewsStyles.containerContent}>
                            <View style={NewsStyles.headerTitle}>
                                <Text style={NewsStyles.headerText}>Новости</Text>
                                <AntDesign name="reload1" size={28} color="#50cc5c" onPress={() => { uploadNews() }} />
                            </View>
                            <ScrollView>
                                <View>
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'SanFrancisco-Semibold', paddingTop: 5, paddingBottom: 1 }}>Новости за сегодня</Text>
                                        <Text style={{ width: 140, color: 'rgba(255, 255, 255, 0.6)', fontSize: 12, fontFamily: 'SanFrancisco-Semibold', paddingTop: 2 }}>Подборка популярных новостей за сегодня</Text>
                                    </View>
                                    <ScrollView horizontal={true} decelerationRate={0} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                                        {
                                            artNow.map(art => (
                                                <TouchableHighlight style={{ padding: 10 }} key={art.title} onPress={() => { setModal(true); setNews(art); }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <Image style={{ width: Dimensions.get('window').width - 160, height: 230, marginBottom: 5, borderRadius: 16 }} source={{ uri: art.urlToImage }} />
                                                        <Text style={NewsStyles.newsHeader}>{art.title.split(' ').length > 4 ? art.title.split(' ').slice(0, 3).join(' ') + '...' : art.title}</Text>
                                                    </View>
                                                </TouchableHighlight>
                                            ))
                                        }
                                    </ScrollView>
                                </View>
                                <View>
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'SanFrancisco-Semibold', paddingTop: 5, paddingBottom: 1 }}>Новости за вчера</Text>
                                        <Text style={{ width: 140, color: 'rgba(255, 255, 255, 0.6)', fontSize: 12, fontFamily: 'SanFrancisco-Semibold', paddingTop: 2 }}>Подборка популярных новостей за вчера</Text>
                                    </View>
                                    <ScrollView horizontal={true} decelerationRate={0} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                                        {
                                            artYDay.map(art => (
                                                <TouchableHighlight style={{ padding: 10 }} key={art.title} onPress={() => { setModal(true); setNews(art); }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <Image style={{ width: Dimensions.get('window').width - 160, height: 230, marginBottom: 5, borderRadius: 16 }} source={{ uri: art.urlToImage }} />
                                                        <Text style={NewsStyles.newsHeader}>{art.title.split(' ').length > 4 ? art.title.split(' ').slice(0, 3).join(' ') + '...' : art.title}</Text>
                                                    </View>
                                                </TouchableHighlight>
                                            ))
                                        }
                                    </ScrollView>
                                </View>

                            </ScrollView>
                        </View>
                }
            </View>
        );
    }
}