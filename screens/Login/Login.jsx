/* React */
import React, { useContext, useState } from 'react';
import { Image, Text, TextInput, TouchableHighlight, View, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

/* Expo */
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

/* Other */
import * as Yup from 'yup';
import { Formik } from 'formik';

/* Style */
import ErrorStyles from './ErrorStyle.js';
import LoginStyles from './LoginStyles.js';
import FormStyles from './FormStyles.js';

/* Context */
import { StartContext, StartProvider } from '../startContext.js';

/* Custom Fonts */
let customFonts = {
  'SanFrancisco-Regular': require('../../assets/fonts/SanFrancisco/SanFrancisco-Regular.ttf'),
  'SanFrancisco-Medium': require('../../assets/fonts/SanFrancisco/SanFrancisco-Medium.ttf'),
  'SanFrancisco-Semibold': require('../../assets/fonts/SanFrancisco/SanFrancisco-Semibold.ttf'),
  'SanFrancisco-Bold': require('../../assets/fonts/SanFrancisco/SanFrancisco-Bold.ttf'),
}


function AuthAccount() {
  const { showSignIn, setShowSignIn } = useContext(StartContext);

  const [errorModal, setModal] = useState(false);
  const [errorText, setError] = useState('');
  const [fonts, setFonts] = useState(false);

  const navigation = useNavigation();

  const SigninSchema = Yup.object().shape({
    userEmail: Yup.string().email('Введите корректную электронную почту!').required('Required'),
    userPassword: Yup.string()
      .min(7, 'Ведённый пароль должен содержать минимум 7 символов!')
      .max(86, 'Ну слушай, куда ты там погнал, максимум 86 символов!')
      .required('Required')
  });

  async function submitForm(args) {
    const response = await fetch("http://10.0.2.2:5000/user-login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(args)
    });

    const jsonData = await response.json();

    await AsyncStorage.setItem('user', JSON.stringify(jsonData));

    setError(jsonData.message);
    navigation.navigate('Main');
    return setShowSignIn(false);
  }

  async function fontsLoad() {
    await Font.loadAsync(customFonts);
    setFonts(true);
  }

  fontsLoad();

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

        <Modal animationType="slide" transparent={true} visible={showSignIn} onRequestClose={() => { setShowSignIn(false) }}>
          <View style={LoginStyles.centeredView}>
            <View style={LoginStyles.modalView}>
              <Image style={FormStyles.conatinerImage} source={require('../../assets/image/Logo.png')} />
              <Text style={FormStyles.titleText}>Начните формировать свой криптовалютный портфель</Text>
              <Text style={FormStyles.titleText}>Cryptocloud — самая удобная площадка для купли и продажи криптовалюты. Зарегистрируйтесь и начните прямо сегодня.</Text>
              <Formik initialValues={{ userEmail: '', userPassword: '' }} validationSchema={SigninSchema} onSubmit={values => submitForm(values)}>
                {({ errors, handleChange, handleSubmit, values }) => (
                  <View>
                    <TextInput style={FormStyles.inputData} onChangeText={handleChange('userEmail')} value={values.userEmail} placeholder="Эл. почта" placeholderTextColor={'rgba(56, 156, 150, 0.3)'} />
                    <TextInput secureTextEntry={true} style={FormStyles.inputData} onChangeText={handleChange('userPassword')} placeholder="Пароль" placeholderTextColor={'rgba(56, 156, 150, 0.3)'} />
                    <TouchableHighlight style={FormStyles.buttonLogin} onPress={() => {
                      handleSubmit()
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
