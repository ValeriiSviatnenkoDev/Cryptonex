/* React */
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableHighlight, View, ScrollView, Image } from 'react-native';

/* Expo */
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';

/* Styles & Utils */
import NewsStyles from "../Style/Styles/News/NewsStyle.js";
import NewsCard from "../Style/Styles/News/NewsCard.js";
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

        const response = {
            newsNow: await fetch(requests.reqNewsNow),
            newsYDAy: await fetch(requests.reqNewsYDay)
        }

        const jsonData ={
            newsNow: await response.newsNow.json(),
            newsYDay: await response.newsYDAy.json()
        }

        setArtNow(jsonData.newsNow.articles);
        setArtYDay(jsonData.newsYDay.articles);

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
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View>
                                    <View style={NewsCard.headerNews}>
                                        <Text style={NewsCard.headerNewsText}>Новости за сегодня</Text>
                                        <Text style={NewsCard.headerTextTitle}>Подборка популярных новостей за сегодня</Text>
                                    </View>
                                    <ScrollView horizontal={true} decelerationRate={0} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                                        {
                                            artNow.map((art, id) => (
                                                <TouchableHighlight style={NewsCard.newsCard} key={id} onPress={() => { setModal(true); setNews(art); }}>
                                                    <View style={NewsCard.newsCardContent}>
                                                        <Image style={NewsCard.newsCardImage} source={{ uri: art.urlToImage }} />
                                                        <Text style={NewsCard.newsCardText}>{art.title.split(' ').length > 4 ? art.title.split(' ').slice(0, 3).join(' ') + '...' : art.title}</Text>
                                                    </View>
                                                </TouchableHighlight>
                                            ))
                                        }
                                    </ScrollView>
                                </View>
                                <View>
                                    <View style={NewsCard.headerNews}>
                                        <Text style={NewsCard.headerNewsText}>Новости за вчера</Text>
                                        <Text style={NewsCard.headerTextTitle}>Подборка популярных новостей за вчера</Text>
                                    </View>
                                    <ScrollView horizontal={true} decelerationRate={0} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                                        {
                                            artYDay.map((art, id) => (
                                                <TouchableHighlight style={NewsCard.newsCard} key={id} onPress={() => { setModal(true); setNews(art); }}>
                                                    <View style={NewsCard.newsCardContent}>
                                                        <Image style={NewsCard.newsCardImage} source={{ uri: art.urlToImage }} />
                                                        <Text style={NewsCard.newsCardText}>{art.title.split(' ').length > 4 ? art.title.split(' ').slice(0, 3).join(' ') + '...' : art.title}</Text>
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