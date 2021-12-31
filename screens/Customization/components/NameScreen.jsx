/* React */
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* Expo */
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';

/* Other */
import * as Yup from 'yup';
import { Formik } from 'formik';

/* Styles & Utils */
import NameStyles from '../../Style/Styles/Customization/NameStyles.js';
import { heandlerFontsLoad } from '../../Style/Utils/handleLoadFonts.js';

const NameScreen = () => {
    const [fonts, setFonts] = useState(false);
    const [showModal, setModal] = useState(false);
    const navigation = useNavigation();


    const CheckLogin = Yup.object().shape({
        userName: Yup.string()
            .min(4, 'Введите другой логин, минимум 4 символа!')
            .max(86, 'Логин не может быть длиннее 86-ти символов!')
            .required('Required')
    });


    const handleCheckLogin = async (args) => {
        const response = await fetch("https://arcane-thicket-38880.herokuapp.com/check-login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(args)
        });

        const jsonData = await response.json();

        if (jsonData.status == false) {
            setModal(true);
            setTimeout(() => {
                setModal(false);
            }, 1500);
            return;
        } else {
            await AsyncStorage.setItem('username', JSON.stringify(args));
            return navigation.navigate('Theme');
        }
    }

    useEffect(async () => {
        const res = await heandlerFontsLoad();
        setFonts(res);
    }, []);

    if (!fonts) {
        return <AppLoading />
    } else {
        return (
            <View style={NameStyles.mainContainer}>
                <View style={NameStyles.containerContent}>
                    <Modal animationType="fade" transparent={true} visible={showModal}>
                        <View style={NameStyles.errorView}>
                            <View style={NameStyles.errorModalView}>
                                <Text style={NameStyles.modalText}>Задание почти провалено, такой логин уже занят, может другое подберешь?</Text>
                            </View>
                        </View>
                    </Modal>

                    <Image style={NameStyles.nameCompanyImage} source={require('../../../assets/image/Logo.png')} />
                    <Image style={NameStyles.nameImage} source={require('../../../assets/image/nameCustom.png')} />
                    <Text style={NameStyles.nameText}>Начнём с самого простого, с имени, он же логин.</Text>
                    <Text style={NameStyles.nameText}>Попробуй придумать себе уникальный, неповторимый логин, который в дальнейшем будет использоваться в приложении.</Text>
                    <Text style={NameStyles.nameText}>Выполняй это задание ответственно и с творческим подходом.</Text>
                    <Formik initialValues={{ userName: '' }} validationSchema={CheckLogin} onSubmit={values => handleCheckLogin(values)}>
                        {({ errors, handleChange, handleSubmit, values }) => (
                            <>
                                <TextInput style={NameStyles.nameInput} onChangeText={handleChange('userName')} value={values.userName} placeholder="Необычный логин..." placeholderTextColor={'rgba(70, 179, 80, 0.6)'} />
                                <AntDesign name="arrowright" size={40} color="#46b350" style={{ marginBottom: 40 }} onPress={() => {
                                    handleSubmit();
                                    if (errors.userName) {
                                        return;
                                    }
                                }} />
                            </>
                        )}
                    </Formik>
                </View>
            </View>
        );
    }
}

export default NameScreen;
