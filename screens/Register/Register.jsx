/* React */
import React, { useEffect, useState } from 'react';
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
import { StartProvider } from '../context/startContext.js';

const RegisterAccount = () => {
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
                <View style={NameStyles.mainContainer}>
                    <View style={NameStyles.containerContent}>
                        <RegisterError errorModal={errorModal} errorText={errorText} />


                        <Image style={NameStyles.nameCompanyImage} source={require('../../assets/image/Logo.png')} />
                        <Image style={NameStyles.nameImage} source={require('../../assets/image/regCustomForm.png')} />
                        <Text style={NameStyles.nameText}>Начнём с самого простого, с имени, он же логин.</Text>
                        <Text style={NameStyles.nameText}>Попробуй придумать себе уникальный, неповторимый логин, который в дальнейшем будет использоваться в приложении.</Text>
                        <Text style={NameStyles.nameText}>Выполняй это задание ответственно и с творческим подходом.</Text>
                        <Formik initialValues={{ userEmail: '', userPassword: '' }} validationSchema={SignUpSchema} onSubmit={values => submitForm(values)}>
                            {({ errors, handleChange, handleSubmit, values }) => (
                                <View>
                                    <TextInput style={RegisterForm.containerInput} onChangeText={handleChange('userName')} value={values.userName} placeholder="Логин" placeholderTextColor={'rgba(80, 204, 92, 0.3)'} />
                                    <TextInput style={RegisterForm.containerInput} onChangeText={handleChange('userEmail')} value={values.userEmail} placeholder="Эл. почта" placeholderTextColor={'rgba(80, 204, 92, 0.3)'} />
                                    <TextInput secureTextEntry={true} style={RegisterForm.containerInput} onChangeText={handleChange('userPassword')} value={values.userPassword} placeholder="Пароль" placeholderTextColor={'rgba(80, 204, 92, 0.3)'} />
                                    <TouchableHighlight style={RegisterForm.containerButtonRegister} onPress={() => {
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
                                    }}>
                                        <Text style={RegisterForm.containerTextInButton}>Погнали</Text>
                                    </TouchableHighlight>
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
