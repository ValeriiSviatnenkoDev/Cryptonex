import React from 'react';

import StartScreen from './screens/StartScreen.jsx';
import { StartProvider } from './screens/startContext.js';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <StartProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1a1a1a'}, headerTintColor: 'white', headerTitleAlign: 'left', headerTitleStyle: { fontSize: 25, fontFamily: 'SanFrancisco-Medium' }}}>
        <Stack.Screen name="Home" component={StartScreen}  options={{ title: 'Auth Page' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </StartProvider>
  );
}

export default App;