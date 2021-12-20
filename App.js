/* React */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* Expo */
import * as Font from 'expo-font';

/* Components */
import StartScreen from './screens/StartScreen.jsx';
import Main from './screens/Main/Main.jsx';
import News from './screens/News/News.jsx';
import Profile from './screens/Profile/Profile.jsx';
import Trade from './screens/Trade/Trade.jsx'

/* HeaderComponents */
import LogoCompany from './header/Logo/LogoCompany.jsx';

/* Context */
import { StartProvider } from './screens/startContext.js';
import { MainProvider } from './screens/Main/mainContext.js';
import { ProfileProvider } from './screens/Profile/profileContext.js';

const Stack = createStackNavigator();
let customFonts = {
  'SanFrancisco-Regular': require('./assets/fonts/SanFrancisco/SanFrancisco-Regular.ttf'),
  'SanFrancisco-Medium': require('./assets/fonts/SanFrancisco/SanFrancisco-Medium.ttf'),
  'SanFrancisco-Semibold': require('./assets/fonts/SanFrancisco/SanFrancisco-Semibold.ttf'),
  'SanFrancisco-Bold': require('./assets/fonts/SanFrancisco/SanFrancisco-Bold.ttf'),
}

function App() {
  async function fontsLoad() {
    await Font.loadAsync(customFonts);
  }

  useEffect(() => {
    fontsLoad();
  }, []);

  return (
    <StartProvider>
      <MainProvider>
        <ProfileProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1a1a1a' }, headerTintColor: 'white', headerTitleAlign: 'left', headerTitleStyle: { fontSize: 21, fontFamily: 'SanFrancisco-Bold' } }}>
              <Stack.Screen name="Home" component={StartScreen} options={{ headerTitle: (props) => <LogoCompany {...props} /> }} />
              <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
              <Stack.Screen name="News" component={News} options={{ headerShown: false }} />
              <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
              <Stack.Screen name="Trade" component={Trade} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </ProfileProvider>
      </MainProvider>
    </StartProvider>
  );
}

export default App;