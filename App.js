/* React */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* Components */
import StartScreen from './screens/StartScreen.jsx';
import Main from './screens/Main/Main.jsx';
import News from './screens/News/News.jsx';
import Profile from './screens/Profile/Profile.jsx';
import Trade from './screens/Trade/Trade.jsx'
import WelcomeScreen from './screens/Customization/WelcomeScreen.jsx';
import NameScreen from './screens/Customization/components/NameScreen.jsx';
import ChoiseTheme from './screens/Customization/components/ChoiseTheme.jsx';
import ChoiseLang from './screens/Customization/components/ChoiseLang.jsx';
import RegisterAccount from './screens/Register/Register.jsx';

/* HeaderComponents */
import LogoCompany from './header/Logo/LogoCompany.jsx';

/* Context */
import { StartProvider } from './screens/context/startContext.js';
import { MainProvider } from './screens/Main/mainContext.js';
import { ProfileProvider } from './screens/Profile/profileContext.js';

const Stack = createStackNavigator();

const App = () => {
  return (
      <StartProvider>
        <MainProvider>
          <ProfileProvider>
            <NavigationContainer theme={DefaultTheme}>
              <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1a1a1a' }, headerTitleAlign: 'left', headerTitleStyle: { fontSize: 21, fontFamily: 'SanFrancisco-Bold' } }}>
                <Stack.Screen name="Home" component={StartScreen} options={{ headerTitle: (props) => <LogoCompany {...props} /> }} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Name" component={NameScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Theme" component={ChoiseTheme} options={{ headerShown: false }} />
                <Stack.Screen name="Lang" component={ChoiseLang} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterAccount} options={{ headerShown: false }} />
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