/* React */
import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

/* Expo */
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';

/* Other */
import { Formik } from 'formik';

/* Schema */
import SignUpSchema from './SignUpSchema.js';

/* Styles & Utils */
import RegisterForm from '../Style/Styles/Register/Form.js';
import RegisterStyles from '../Style/Styles/Register/Styles.js';
import { heandlerFontsLoad } from '../Style/Utils/handleLoadFonts.js';

/* Components */
import RegisterError from './components/RegisterError.jsx';

/* Context */
import { StartProvider } from '../context/startContext.js';

const RegisterAccount = () => {
    const [fonts, setFonts] = useState(false);
    const [errorModal, setModal] = useState(false);
    const [errorText, setError] = useState('');

    const navigation = useNavigation();

    const submitForm = async (args) => {
        let userName = await AsyncStorage.getItem('username');
        userName = JSON.parse(userName);

        const data = { 
            userEmail: args.userEmail,
            userPassword: args.userPassword,
            userName: userName.userName
         };

        const response = await fetch("https://arcane-thicket-38880.herokuapp.com/user-register", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const jsonData = await response.json();

        if (jsonData.status == false) {
            setError(jsonData.errors.message);
            setModal(true);
            setTimeout(() => {
                setModal(false);
            }, 1500);
            return;
        }

        await AsyncStorage.setItem('user', JSON.stringify(jsonData.user))
        navigation.navigate('Home');
    }

    useEffect(async () => {
        const res = await heandlerFontsLoad();
        setFonts(res);
    }, []);

    if (!fonts) {
        return <AppLoading />
    } else {
        return (
            <StartProvider>
                <View style={RegisterStyles.mainContainer}>
                    <View style={RegisterStyles.containerContent}>
                        <RegisterError errorModal={errorModal} errorText={errorText} />

                        <Image style={RegisterStyles.registerCompanyImage} source={require('../../assets/image/Logo.png')} />
                        <Image style={RegisterStyles.registerImage} source={require('../../assets/image/regCustomForm.png')} />
                        <Text style={RegisterStyles.registerText}>Мы на финише, осталось лишь указать электронную почту, а также придумать пароль.</Text>
                        <Text style={RegisterStyles.registerText}>Задание не из лёгких, но если что я помогу, чем-то...</Text>
                        <Text style={RegisterStyles.registerText}>Отнесись к этому заданию с ответственностью, от этого зависит будущее нашего убежище! Вроде как...</Text>
                        <Formik initialValues={{ userEmail: '', userPassword: '' }} validationSchema={SignUpSchema} onSubmit={values => submitForm(values)}>
                            {({ errors, handleChange, handleSubmit, values }) => (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <TextInput style={RegisterForm.containerInput} onChangeText={handleChange('userEmail')} value={values.userEmail} placeholder="Эл. почта" placeholderTextColor={'rgba(70, 179, 80, 0.6)'}/>
                                    <TextInput secureTextEntry={true} style={RegisterForm.containerInput} onChangeText={handleChange('userPassword')} value={values.userPassword} placeholder="Пароль" placeholderTextColor={'rgba(70, 179, 80, 0.6)'} />
                                    <AntDesign name="arrowright" size={40} color="#46b350" style={{ marginBottom: 40 }} onPress={() => {
                                        handleSubmit();
                                        if (errors.userEmail) {
                                            setModal(true);
                                            setError('Введите корректную электронную почту!');
                                            setTimeout(() => {
                                                setModal(false);
                                            }, 1500);
                                            return;
                                        }

                                        if (errors.userPassword) {
                                            setModal(true);
                                            setError('Ведённый пароль должен содержать минимум 7 символов!');
                                            setTimeout(() => {
                                                setModal(false);
                                            }, 1500);
                                            return;
                                        }
                                    }} />
                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
            </StartProvider>
        );
    }
}

export default RegisterAccount;
