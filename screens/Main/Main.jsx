/* React */
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, TouchableOpacity, View, Modal, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';

/* Expo */
import AppLoading from 'expo-app-loading';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as ScreenOrientation from 'expo-screen-orientation';

/* Styles */
import MainStyles from './MainStyles';
import CurrencyStyles from './CurrencyStyles.js';

/* WS */
import { io } from 'socket.io-client';
const socket = io('https://arcane-thicket-38880.herokuapp.com');

/* Modal */
import Options from './Options/ModalOptions.jsx';

/* Context */
import { MainContext } from './mainContext.js'

/* Components */
import CryptoImage from './CurrencyImage.js';

/* Fonts */
let customFonts = {
    'SanFrancisco-Regular': require('../../assets/fonts/SanFrancisco/SanFrancisco-Regular.ttf'),
    'SanFrancisco-Medium': require('../../assets/fonts/SanFrancisco/SanFrancisco-Medium.ttf'),
    'SanFrancisco-Semibold': require('../../assets/fonts/SanFrancisco/SanFrancisco-Semibold.ttf'),
    'SanFrancisco-Bold': require('../../assets/fonts/SanFrancisco/SanFrancisco-Bold.ttf'),
}

function Main() {
    const [fonts, setFonts] = useState(false);
    const [showModal, setModal] = useState(false);
    const [activeOption, setOption] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const [crypt, setCrypt] = useState([]);
    const [currency, setCurrency] = useState({
        circulating_supply: 307790138.599918,
        cmc_rank: 5,
        date_added: "2020-04-10T00:00:00.000Z",
        id: 5426,
        last_updated: "2021-12-16T10:24:06.000Z",
        max_supply: null,
        name: "Solana",
        num_market_pairs: 193,
        platform: null,
        quote: {
            USD: {
                fully_diluted_market_cap: 93607468831.25,
                last_updated: "2021-12-16T10:24:06.000Z",
                market_cap: 56358836822.43277,
                market_cap_dominance: 2.4749,
                percent_change_1h: 0.95176174,
                percent_change_24h: 9.89940411,
                percent_change_30d: -16.2951168,
                percent_change_60d: 10.0357731,
                percent_change_7d: -2.38682358,
                percent_change_90d: 33.83018416,
                price: 183.10800040182895,
                volume_24h: 3820674173.5756764,
                volume_change_24h: 53.4277,
            },
        },
        slug: "solana",
        symbol: "SOL",
        tags: [
            "pos",
            "platform",
            "solana-ecosystem",
            "cms-holdings-portfolio",
            "kenetic-capital-portfolio",
            "alameda-research-portfolio",
            "multicoin-capital-portfolio",
            "k300-ventures-portfolio",
        ],
        total_supply: 511214521.62566984,
    }
    );

    const { showSettings, setShowSettings } = useContext(MainContext);

    const navigation = useNavigation();

    
    socket.on('UpdateCurrency', (arg) => {
        setCrypt(arg.data);
    })

    async function fontsLoad() {
        await Font.loadAsync(customFonts);
        setFonts(true);
    }

    useEffect(() => {
        Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            if (height > width) {
                ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
            }
        })

        fontsLoad();
    }, [crypt]);

    if (!fonts) {
        return <AppLoading />
    } else {
        return (
            <View style={MainStyles.mainContainer}>
                <Modal animationType="slide" transparent={true} visible={showModal} onRequestClose={() => { setModal(false) }}>
                    <View style={MainStyles.modalView}>
                        <View style={MainStyles.chartModalView}>
                            <View style={MainStyles.modalControl}>
                                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'SanFrancisco-Semibold', paddingTop: 9, paddingBottom: 9 }}>{currency.name}</Text>
                                <FontAwesome name="close" size={20} style={MainStyles.modalControlIcon} color="white" onPress={() => { setModal(false) }} />
                            </View>
                            <View style={MainStyles.modalContent}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Trade') }}>
                                    <LineChart
                                        data={{
                                            labels: [`16.09`, `16.10`, `16.11`, `09.12`, `15.12`, `13:25`],
                                            datasets: [
                                                {
                                                    data: [
                                                        currency.quote.USD.percent_change_90d,
                                                        currency.quote.USD.percent_change_60d,
                                                        currency.quote.USD.percent_change_30d,
                                                        currency.quote.USD.percent_change_7d,
                                                        currency.quote.USD.percent_change_24h,
                                                        currency.quote.USD.percent_change_1h
                                                    ]
                                                }
                                            ]
                                        }}
                                        width={340} // from react-native
                                        height={200}
                                        yAxisLabel=""
                                        yAxisSuffix=" %"
                                        yAxisInterval={1} // optional, defaults to 1
                                        chartConfig={{
                                            backgroundColor: "#1a1a1a",
                                            backgroundGradientFrom: "#191919",
                                            backgroundGradientTo: "#212121",
                                            decimalPlaces: 2, // optional, defaults to 2dp
                                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                            style: {
                                                paddingTop: 10,
                                                borderRadius: 16
                                            },
                                            propsForDots: {
                                                r: "4",
                                                strokeWidth: "1",
                                                stroke: "#49beb7"
                                            }
                                        }}
                                        bezier
                                        style={{
                                            borderRadius: 16
                                        }}
                                    />
                                </TouchableOpacity>
                                <View style={MainStyles.buttonsContainer}>
                                    <TouchableHighlight style={activeOption ? MainStyles.buttonControlActive : MainStyles.buttonControl} onPress={() => setOption(prev => !prev)}>
                                        <Text style={{ color: 'white', fontFamily: 'SanFrancisco-Bold', fontSize: 16 }}>H</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={MainStyles.buttonControl}>
                                        <Text style={{ color: 'white', fontFamily: 'SanFrancisco-Bold', fontSize: 16 }}>D</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={MainStyles.buttonControl}>
                                        <Text style={{ color: 'white', fontFamily: 'SanFrancisco-Bold', fontSize: 16 }}>W</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={MainStyles.buttonControl}>
                                        <Text style={{ color: 'white', fontFamily: 'SanFrancisco-Bold', fontSize: 16 }}>M</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={MainStyles.buttonControl}>
                                        <Text style={{ color: 'white', fontFamily: 'SanFrancisco-Bold', fontSize: 16 }}>Y</Text>
                                    </TouchableHighlight>
                                </View>

                                <View style={MainStyles.modalInfo}>
                                    <View style={MainStyles.currencyInfo}>
                                        <View style={CurrencyStyles.currencyTitle}>
                                            <Text style={CurrencyStyles.currencyTitleText}>1 hours %</Text>
                                        </View>
                                        <View style={CurrencyStyles.currencyPrice}>
                                            {
                                                (currency.quote.USD.percent_change_1h) < 0 ?
                                                    <FontAwesome name="caret-down" size={24} color="red" />
                                                    :
                                                    <FontAwesome name="caret-up" size={24} color="green" />
                                            }
                                            <Text style={CurrencyStyles.currencyPriceText}>{(currency.quote.USD.percent_change_1h).toFixed(4)}</Text>
                                        </View>
                                    </View>
                                    <View style={MainStyles.currencyInfo}>
                                        <View style={CurrencyStyles.currencyTitle}>
                                            <Text style={CurrencyStyles.currencyTitleText}>24 hours %</Text>
                                        </View>
                                        <View style={CurrencyStyles.currencyPrice}>
                                            {
                                                (currency.quote.USD.percent_change_24h) < 0 ?
                                                    <FontAwesome name="caret-down" size={24} color="red" />
                                                    :
                                                    <FontAwesome name="caret-up" size={24} color="green" />
                                            }
                                            <Text style={CurrencyStyles.currencyPriceText}>{(currency.quote.USD.percent_change_24h).toFixed(4)}</Text>
                                        </View>
                                    </View>
                                    <View style={MainStyles.currencyInfo}>
                                        <View style={CurrencyStyles.currencyTitle}>
                                            <Text style={CurrencyStyles.currencyTitleText}>7 day %</Text>
                                        </View>
                                        <View style={CurrencyStyles.currencyPrice}>
                                            {
                                                (currency.quote.USD.percent_change_7d) < 0 ?
                                                    <FontAwesome name="caret-down" size={24} color="red" />
                                                    :
                                                    <FontAwesome name="caret-up" size={24} color="green" />
                                            }
                                            <Text style={CurrencyStyles.currencyPriceText}>{(currency.quote.USD.percent_change_7d).toFixed(4)}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                {
                    showSettings ? <Options /> : null
                }

                <View style={MainStyles.containerContent}>
                    <View style={CurrencyStyles.currencyContainer}>
                        {
                            isLoading ?
                                <ActivityIndicator style={{ marginTop: 300 }} size="large" color="#49beb7" />
                                :
                                <ScrollView>
                                    {
                                        crypt.map(cr => (
                                            <TouchableOpacity onPress={() => { setModal(true); setCurrency(cr); }}>
                                                <View style={CurrencyStyles.currency}>
                                                    <View style={CurrencyStyles.currencyTitle}>
                                                        <Image style={{ width: 32, height: 32 }} source={{ uri: CryptoImage[`${cr.symbol}`] }} />
                                                        <Text style={CurrencyStyles.currencyTitleText}>{cr.name}</Text>
                                                    </View>
                                                    <View style={CurrencyStyles.currencyPrice}>
                                                        <Text style={CurrencyStyles.currencyPriceText}>${(cr.quote.USD.price).toFixed(2)}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        ))
                                    }
                                </ScrollView>
                        }
                    </View>
                </View>

                <View style={MainStyles.containerNavigation}>
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
                        <FontAwesome name="github-alt" size={35} color="rgba(255, 255, 255, 0.8)" onPress={() => navigation.navigate('Profile')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Main;