/* React */
import React, { useState, useRef } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView, Animated } from 'react-native';

/* Styles & Utils */
import TradesStyles from '../../Style/Styles/Profile/ProfileTrades.js';

/* Animation */
import { translateToBottom, translateToTop, opacityFrom, opacityTo } from '../../Style/Animation/handlerTranslate.js';

const ProfileTrades = () => {
    const tradeContainer = useRef(new Animated.Value(70)).current;
    const opacityContent = useRef(new Animated.Value(0)).current;
    const [longPress, setLongPress] = useState(true);

    const handlerPress = (status, translateAnim, opacityAnim) => {
        if (status) {
            translateToBottom(translateAnim);
            opacityTo(opacityAnim);
            setLongPress(false);
        } else {
            translateToTop(translateAnim)
            opacityFrom(opacityAnim);
            setLongPress(true);
        }
    }

    return (
        <>
            <Text style={TradesStyles.tradesHeaderText}>Последние трейды</Text>
            <Animated.View style={[TradesStyles.tradeInfoProfile, { height: tradeContainer }]} >
                <TouchableOpacity style={longPress ? { opacity: 0.1 } : { opacity: 1 }} onLongPress={() =>
                    longPress ?
                        handlerPress(longPress, tradeContainer, opacityContent)
                        :
                        handlerPress(longPress, tradeContainer, opacityContent)
                }>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TouchableOpacity style={TradesStyles.tradesCard} onPress={() => { console.log('Hello!') }}>
                            <View style={TradesStyles.tradesCardInfo}>
                                <Image style={TradesStyles.tradesCardImage} source={require('../../../assets/image/1.png')}/>
                                <Text style={TradesStyles.tradesCardText}>Bitcoin</Text>
                            </View>
                            <View style={TradesStyles.tradesCardCount}>
                                <Text style={TradesStyles.tradesCardCountText}>+ 0.045</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </TouchableOpacity>
            </Animated.View>

        </>
    );
}

export default ProfileTrades;