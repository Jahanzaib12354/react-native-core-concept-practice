
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/Splash';
import LoginScreen from './src/screens/Auth/Login';
import RegisterScreen from './src/screens/Auth/Register'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="splash" component={SplashScreen}  />
        <Stack.Screen name="login" component={LoginScreen}  />
        <Stack.Screen name= "register" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;