import React from 'react';
import { Image } from 'react-native';

export default function LogoCompany() {
    return (
        <Image
            style={{ width: 150, height: 50, aspectRatio: 4, }}
            source={require('../../assets/image/Logo.png')}
        />
    );
}
