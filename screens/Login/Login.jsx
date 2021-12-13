import React, { useContext, useState } from 'react';
import { Image, Text, TextInput, TouchableHighlight, View, Modal, Alert } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

/* Style */
import LoginStyles from './LoginStyles.js';
import FormStyles from './FormStyles.js';

/* Context */
import { StartContext, StartProvider } from '../startContext.js';

/* Custom Fonts */
let customFonts = {
  'SanFrancisco-Regular': require('../../assets/fonts/SanFrancisco/SanFrancisco-Regular.ttf'),
  'SanFrancisco-Medium': require('../../assets/fonts/SanFrancisco/SanFrancisco-Medium.ttf'),
}


function AuthAccount() {
  const [fonts, setFonts] = useState(false);

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const { showSignIn, setShowSignIn } = useContext(StartContext);

  const submitLogin = () => {
    try {
      alert('Submit!');
    } catch (error) {

    }
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
        <Modal animationType="slide" transparent={true} visible={showSignIn} onRequestClose={() => { Alert.alert("Modal has been closed."); setModalVisible(!modalVisible); }}>
          <View style={LoginStyles.centeredView}>
            <View style={LoginStyles.modalView}>
              <Image style={FormStyles.conatinerImage} source={require('../../assets/image/Logo.png')} />
              <Text style={FormStyles.titleText}>Начните формировать свой криптовалютный портфель</Text>
              <Text style={FormStyles.titleText}>Cryptonex — самая удобная площадка для купли и продажи криптовалюты. Зарегистрируйтесь и начните прямо сегодня.</Text>
              <TextInput style={FormStyles.inputData} onChangeText={setUserName} placeholder="Логин" placeholderTextColor={'rgba(56, 156, 150, 0.3)'} />
              <TextInput secureTextEntry={true} style={FormStyles.inputData} onChangeText={setUserPassword} placeholder="Пароль" placeholderTextColor={'rgba(56, 156, 150, 0.3)'} />
              <TouchableHighlight style={FormStyles.buttonLogin} onPress={submitLogin}>
                <Text style={FormStyles.textButtonLogin}>Войти</Text>
              </TouchableHighlight>
              <TouchableHighlight style={FormStyles.buttonBack} onPress={() => { setShowSignIn(false) }}>
                <Text style={FormStyles.textButtonBack}>Вернутсья</Text>
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
