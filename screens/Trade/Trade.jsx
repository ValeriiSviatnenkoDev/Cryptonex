import React, { useContext, useState, useEffect, cloneElement } from 'react';
import { View, TouchableHighlight, Text, Image, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as ScreenOrientation from 'expo-screen-orientation';

let customFonts = {
    'SanFrancisco-Regular': require('../../assets/fonts/SanFrancisco/SanFrancisco-Regular.ttf'),
    'SanFrancisco-Medium': require('../../assets/fonts/SanFrancisco/SanFrancisco-Medium.ttf'),
    'SanFrancisco-Semibold': require('../../assets/fonts/SanFrancisco/SanFrancisco-Semibold.ttf'),
    'SanFrancisco-Bold': require('../../assets/fonts/SanFrancisco/SanFrancisco-Bold.ttf'),
}

function Trade() {
    const [fonts, setFonts] = useState(false);

    async function fontsLoad() {
        await Font.loadAsync(customFonts);
        setFonts(true);
    }

    const navigation = useNavigation();

    useEffect(() => {
        Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            if (height < width) {
                ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
            }
        })
        fontsLoad();
    });

    if (!fonts) {
        return <AppLoading />
    } else {
        return (
            <View style={{ flex: 1, backgroundColor: '#1a1a1a', alignItems: 'center', justifyContent: 'center', }}>
                <View style={{ marginTop: 10, width: 700, height: 340, backgroundColor: '#151515', borderRadius: 28, justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <Text style={{ color: 'white', fontSize: 21, fontFamily: 'SanFrancisco-Semibold' }}>Bitcoin</Text>
                            <Text style={{ color: 'white', fontSize: 21, fontFamily: 'SanFrancisco-Semibold' }}>48000$</Text>
                        </View>
                        <LineChart
                            data={{
                                labels: [`16.09`, `16.10`, `16.11`, `09.12`, `15.12`, `13:25`],
                                datasets: [
                                    {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100
                                        ]
                                    }
                                ]
                            }}
                            width={660} // from react-native
                            height={320}
                            yAxisLabel=""
                            yAxisSuffix=" $"
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
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 660, height: 220, backgroundColor: '#1a1a1a', marginTop: 10, marginBottom: 10, borderRadius: 16 }}>
                            <View style={{ width: 630, backgroundColor: '#202020', borderRadius: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, margin: 10 }}>
                                <Text style={{ color: 'white', fontSize: 15, fontFamily: 'SanFrancisco-Semibold' }}>17:05</Text>
                                <Text style={{ color: 'red', fontSize: 15, fontFamily: 'SanFrancisco-Semibold' }}>- 47213 $</Text>
                            </View>
                            <View style={{ width: 630, backgroundColor: '#202020', borderRadius: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, margin: 10 }}>
                                <Text style={{ color: 'white', fontSize: 15, fontFamily: 'SanFrancisco-Semibold' }}>17:30</Text>
                                <Text style={{ color: 'green', fontSize: 15, fontFamily: 'SanFrancisco-Semibold' }}>+ 49325 $</Text>
                            </View>
                            <View style={{ width: 630, backgroundColor: '#202020', borderRadius: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, margin: 10 }}>
                                <Text style={{ color: 'white', fontSize: 15, fontFamily: 'SanFrancisco-Semibold' }}>18:05</Text>
                                <Text style={{ color: 'red', fontSize: 15, fontFamily: 'SanFrancisco-Semibold' }}>- 48121 $</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Trade;
