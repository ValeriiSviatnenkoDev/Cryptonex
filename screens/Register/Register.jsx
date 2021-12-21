/* React */
import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableHighlight, View, Modal } from 'react-native';

/* Expo */
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

/* Other */
import * as Yup from 'yup';
import { Formik } from 'formik';

/* Styles */
import ErrorStyles from './ErrorStyle.js';
import RegisterStyles from './RegisterStyles.js';

/* Context */
import { StartContext, StartProvider } from '../startContext.js';

/* Custom Fonts */
let customFonts = {
    'SanFrancisco-Regular': require('../../assets/fonts/SanFrancisco/SanFrancisco-Regular.ttf'),
    'SanFrancisco-Medium': require('../../assets/fonts/SanFrancisco/SanFrancisco-Medium.ttf'),
    'SanFrancisco-Semibold': require('../../assets/fonts/SanFrancisco/SanFrancisco-Semibold.ttf'),
    'SanFrancisco-Bold': require('../../assets/fonts/SanFrancisco/SanFrancisco-Bold.ttf'),
}

function RegisterAccount() {
    const { showSignUp, setShowSignUp } = useContext(StartContext)

    const [fonts, setFonts] = useState(false);
    const [errorModal, setModal] = useState(false);
    const [errorText, setError] = useState('');

    async function fontsLoad() {
        await Font.loadAsync(customFonts);
        setFonts(true);
    }

    const SignupSchema = Yup.object().shape({
        userName: Yup.string()
            .min(4, 'Введите другой логин, минимум 4 символа!')
            .max(86, 'Логин не может быть длиннее 86-ти символов!')
            .required('Required'),
        userEmail: Yup.string().email('Введите корректную электронную почту!').required('Required'),
        userPassword: Yup.string()
            .min(7, 'Ведённый пароль должен содержать минимум 7 символов!')
            .max(86, 'Ну слушай, куда ты там погнал, максимум 86 символов!')
            .required('Required')
    });

    async function submitForm(args) {
        await fetch("https://arcane-thicket-38880.herokuapp.com/user-register", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(args)
        });

        return setShowSignUp(false);
    }

    useEffect(() => {
        fontsLoad();
    }, []);

    if (!fonts) {
        return <AppLoading />
    } else {
        return (
            <StartProvider>
                <Modal animationType="fade" transparent={true} visible={errorModal} onRequestClose={() => { setModal(false) }}>
                    <View style={ErrorStyles.errorView}>
                        <View style={ErrorStyles.errorModalView}>
                            <Text style={ErrorStyles.modalText}>{errorText}</Text>
                        </View>
                    </View>
                </Modal>

                <Modal animationType="slide" transparent={true} visible={showSignUp} onRequestClose={() => { setShowSignUp(false) }}>
                    <View style={RegisterStyles.centeredView}>
                        <View style={RegisterStyles.modalView}>
                            <Image style={RegisterStyles.conatinerImage} source={require('../../assets/image/Logo.png')} />
                            <Text style={RegisterStyles.titleText}>Начните формировать свой криптовалютный портфель</Text>
                            <Formik initialValues={{ userName: '', userEmail: '', userPassword: '' }} validationSchema={SignupSchema} onSubmit={values => submitForm(values)}>
                                {({ errors, touched, handleChange, handleSubmit, values }) => (
                                    <View>
                                        <TextInput style={RegisterStyles.containerInput} onChangeText={handleChange('userName')} value={values.userName} placeholder="Логин" placeholderTextColor={'rgba(56, 156, 150, 0.3)'} />
                                        <TextInput style={RegisterStyles.containerInput} onChangeText={handleChange('userEmail')} value={values.userEmail} placeholder="Эл. почта" placeholderTextColor={'rgba(56, 156, 150, 0.3)'} />
                                        <TextInput secureTextEntry={true} style={RegisterStyles.containerInput} onChangeText={handleChange('userPassword')} value={values.userPassword} placeholder="Пароль" placeholderTextColor={'rgba(56, 156, 150, 0.3)'} />
                                        <TouchableHighlight style={RegisterStyles.containerButtonRegister} onPress={() => {
                                            handleSubmit();
                                            if (errors.userName) {
                                                setModal(true);
                                                setError('Введите другой логин, минимум 4 символа!');
                                                setTimeout(() => {
                                                    setModal(false);
                                                }, 1500);
                                                return;
                                            }

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
                                        }}>
                                            <Text style={RegisterStyles.containerTextInButton}>Погнали</Text>
                                        </TouchableHighlight>
                                    </View>
                                )}
                            </Formik>
                            <TouchableHighlight style={RegisterStyles.containerButtonBack} onPress={() => { setShowSignUp(false) }}>
                                <Text style={RegisterStyles.containerTextButtonBack}>Вернуться</Text>
                            </TouchableHighlight>
                            <Text style={RegisterStyles.companyYear}>Cryptonex 2021</Text>
                        </View>
                    </View>
                </Modal>
            </StartProvider>
        );
    }
}

export default RegisterAccount;
