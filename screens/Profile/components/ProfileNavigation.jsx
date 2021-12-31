/* React */
import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* Expo */
import { FontAwesome } from '@expo/vector-icons';

/* Styles */
import NavigationStyles from '../../Style/Styles/Profile/ProfileNavigation.js'

/* Context */
import { MainContext } from '../../Main/mainContext.js';

const ProfileNavigation = () => {
    const { setShowSettings } = useContext(MainContext);
    const navigation = useNavigation();


    return (
        <View style={NavigationStyles.containerNavigation}>
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
                <FontAwesome name="bitcoin" size={24} size={35} color="rgba(255, 255, 255, 0.8)" onPress={() => navigation.navigate('Main')} />
            </TouchableOpacity>
        </View>
    );
}

export default ProfileNavigation;