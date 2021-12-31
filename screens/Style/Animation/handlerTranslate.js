
import { Animated } from "react-native";

export const translateToBottom = (anim) => {
    Animated.timing(anim, {
        toValue: 350,
        duration: 1100,
        useNativeDriver: false
    }).start();
}

export const translateToTop = (anim) => {
    Animated.timing(anim, {
        toValue: 70,
        duration: 650,
        useNativeDriver: false
    }).start();
}

export const translateToLeft = (anim, value) => {
    Animated.timing(anim, {
        toValue: value,
        duration: 650,
        useNativeDriver: false
    }).start();
}

export const translateToRight = (anim, value) => {
    Animated.timing(anim, {
        toValue: value,
        duration: 1100,
        useNativeDriver: false
    }).start();
}

export const opacityTo = (anim) => {
    Animated.timing(anim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false
    }).start();
}

export const opacityFrom = (anim) => {
    Animated.timing(anim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
    }).start();
}