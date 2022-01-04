/* React */
import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableHighlight, View, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

/* Expo */
import AppLoading from 'expo-app-loading';

/* Other */
import { Formik } from 'formik';

/* Schema */
import SignInSchema from './SignInSchema.js';

/* Components */
import LoginError from './components/LoginError.jsx';

/* Style & Utils */
import LoginStyles from '../Style/Styles/Login/Styles.js';
import FormStyles from '../Style/Styles/Login/Form.js';
import { heandlerFontsLoad } from '../Style/Utils/handleLoadFonts.js';

/* Context */
import { StartContext, StartProvider } from '../context/startContext.js';


const AuthAccount = (props) => {
  const [fonts, setFonts] = useState(false);
  const [errorModal, setModal] = useState(false);
  const [errorText, setError] = useState('');

  const { showSignIn, setShowSignIn } = useContext(StartContext);

  const navigation = useNavigation();

  async function submitForm(args) {
    const response = await fetch("https://arcane-thicket-38880.herokuapp.com/user-login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(args)
    });

    const jsonData = await response.json();

    switch (jsonData.status) {
      case false:
        setError(jsonData.error.message);
        setModal(true);
        setTimeout(() => {
          setModal(false);
        }, 1500);
        break;

      case true:
        await AsyncStorage.setItem('user', JSON.stringify(jsonData));
        navigation.navigate('Main');
        setShowSignIn(false);
        break;

      default:
        setError('Перезагрузите приложение и попробуйте заново!');
        break;
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
        <LoginError errorModal={errorModal} errorText={errorText} />

        <Modal animationType="slide" transparent={true} visible={showSignIn} onRequestClose={() => { setShowSignIn(false) }}>
          <View style={LoginStyles.centeredView}>
            <View style={LoginStyles.modalView}>
              <Image style={FormStyles.conatinerImage} source={require('../../assets/image/Logo.png')} />
              <Text style={FormStyles.titleText}>Начните формировать свой криптовалютный портфель</Text>
              <Text style={FormStyles.titleText}>Cryptocloud — самая удобная площадка для купли и продажи криптовалюты. Зарегистрируйтесь и начните прямо сегодня.</Text>
              <Formik initialValues={{ userEmail: '', userPassword: '' }} validationSchema={SignInSchema} onSubmit={values => submitForm(values)}>
                {({ errors, handleChange, handleSubmit, values }) => (
                  <View>
                    <TextInput style={FormStyles.inputData} onChangeText={handleChange('userEmail')} value={values.userEmail} placeholder="Эл. почта" placeholderTextColor={'rgba(80, 204, 92, 0.3)'} />
                    <TextInput secureTextEntry={true} style={FormStyles.inputData} onChangeText={handleChange('userPassword')} placeholder="Пароль" placeholderTextColor={'rgba(80, 204, 92, 0.3)'} />
                    <TouchableHighlight style={FormStyles.buttonLogin} onPress={() => {
                      handleSubmit()
                      if (errors.userEmail) {
                        setModal(true);
                        setError('Введите корректную электронную почту!');
                        setTimeout(() => {
                          props.setModal(false);
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
                      <Text style={FormStyles.textButtonLogin}>Войти</Text>
                    </TouchableHighlight>
                  </View>
                )}
              </Formik>
              <TouchableHighlight style={FormStyles.buttonBack} onPress={() => { setShowSignIn(false) }}>
                <Text style={FormStyles.textButtonBack}>Вернуться</Text>
              </TouchableHighlight>
              <Text style={FormStyles.companyYear}>Cryptonex 2021</Text>
            </View>
          </View>
        </Modal>
      </StartProvider>
    );
  }
}

export default AuthAccount;
