/* React */
import React, { useState, useRef } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView, Animated } from 'react-native';

/* Styles & Utils */
import CreditingStyles from '../../Style/Styles/Profile/ProfileCrediting.js';

/* Animation */
import { translateToBottom, translateToTop, opacityFrom, opacityTo } from '../../Style/Animation/handlerTranslate.js';

const ProfileCrediting = () => {
    const billingContainer = useRef(new Animated.Value(70)).current;
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
            <Text style={CreditingStyles.cashHeaderText}>Зачисление средств</Text>
            <Animated.View style={[CreditingStyles.cashInfoProfile, { height: billingContainer }]} >
                <TouchableOpacity style={longPress ? { opacity: 0.1 } : { opacity: 1 }} onLongPress={() =>
                    longPress ?
                        handlerPress(longPress, billingContainer, opacityContent)
                        :
                        handlerPress(longPress, billingContainer, opacityContent)
                }>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TouchableOpacity style={CreditingStyles.cashsCard} onPress={() => { console.log('Hello!') }}>
                            <View style={CreditingStyles.cashsCardInfo}>
                                <Image style={CreditingStyles.cashsCardImage} source={require('../../../assets/image/money.png')}/>
                                <Text style={CreditingStyles.cashsCardText}>USD</Text>
                            </View>
                            <View style={CreditingStyles.cashsCardCount}>
                                <Text style={CreditingStyles.cashsCardCountText}>+ 2110$</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </TouchableOpacity>
            </Animated.View>

        </>
    );
}

export default ProfileCrediting;