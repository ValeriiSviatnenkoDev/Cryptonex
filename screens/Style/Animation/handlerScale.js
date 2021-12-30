
import { Animated } from "react-native";

export const scaleToSmall = (anim) => {
    Animated.timing(anim, {
        toValue: 0.7,
        duration: 250,
        useNativeDriver: false
    }).start();
}
