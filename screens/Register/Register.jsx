/* React */
import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableHighlight, View, Modal } from 'react-native';

/* Expo */
import AppLoading from 'expo-app-loading';

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
import { StartContext, StartProvider } from '../context/startContext.js';

const RegisterAccount = () => {
    const { showSignUp, setShowSignUp } = useContext(StartContext)

    const [fonts, setFonts] = useState(false);
    const [errorModal, setModal] = useState(false);
    const [errorText, setError] = useState('');

    async function submitForm(args) {
        const response = await fetch("https://arcane-thicket-38880.herokuapp.com/user-register", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(args)
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
                <RegisterError errorModal={errorModal} errorText={errorText} />

                <Modal animationType="slide" transparent={true} visible={showSignUp} onRequestClose={() => { setShowSignUp(false) }}>
                    <View style={RegisterStyles.centeredView}>
                        <View style={RegisterStyles.modalView}>
                            <Image style={RegisterForm.conatinerImage} source={require('../../assets/image/Logo.png')} />
                            <Text style={RegisterForm.titleText}>Начните формировать свой криптовалютный портфель</Text>
                            <Formik initialValues={{ userName: '', userEmail: '', userPassword: '' }} validationSchema={SignUpSchema} onSubmit={values => submitForm(values)}>
                                {({ errors, handleChange, handleSubmit, values }) => (
                                    <View>
                                        <TextInput style={RegisterForm.containerInput} onChangeText={handleChange('userName')} value={values.userName} placeholder="Логин" placeholderTextColor={'rgba(80, 204, 92, 0.3)'} />
                                        <TextInput style={RegisterForm.containerInput} onChangeText={handleChange('userEmail')} value={values.userEmail} placeholder="Эл. почта" placeholderTextColor={'rgba(80, 204, 92, 0.3)'} />
                                        <TextInput secureTextEntry={true} style={RegisterForm.containerInput} onChangeText={handleChange('userPassword')} value={values.userPassword} placeholder="Пароль" placeholderTextColor={'rgba(80, 204, 92, 0.3)'} />
                                        <TouchableHighlight style={RegisterForm.containerButtonRegister} onPress={() => {
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
                                            <Text style={RegisterForm.containerTextInButton}>Погнали</Text>
                                        </TouchableHighlight>
                                    </View>
                                )}
                            </Formik>
                            <TouchableHighlight style={RegisterForm.containerButtonBack} onPress={() => { setShowSignUp(false) }}>
                                <Text style={RegisterForm.containerTextButtonBack}>Вернуться</Text>
                            </TouchableHighlight>
                            <Text style={RegisterForm.companyYear}>Cryptonex 2021</Text>
                        </View>
                    </View>
                </Modal>
            </StartProvider>
        );
    }
}

export default RegisterAccount;
