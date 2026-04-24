
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/Splash';
import LoginScreen from './src/Auth/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="login" component={LoginScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;