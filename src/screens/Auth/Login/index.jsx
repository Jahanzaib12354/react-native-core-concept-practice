
import { View, Text, TouchableOpacity, Image,ScrollView } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import InputField from '../../../components/InputField'
import CustomButton from '../../../components/CustomButton'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('register')
  }
  const handleLogin = () => {
    // if (email && password) {
    //   alert('Login Successful');
      // navigation.navigate('register')
     
  if (!email || !password) {
    alert('Enter email & password');
    return;
  }
  if (!email.endsWith('@gmail.com')) {
    alert('Email must be @gmail.com');
    return;
  }
  if (password.length < 6) {
    alert('Password must be at least 6 characters');
    return;
  }

  alert('Login Successful');
};

  return (
    <ScrollView contentContainerStyle={styles.scroll}
      
>
    <View style={styles.container}>

        <Text style={styles.title}>Login</Text>
      <Image
      
      style={styles.img}   resizeMode='contain' source={require('../../../assets/react-3.png')}/>
      

      <InputField
        value={email}
        onChangeText={setEmail}
        placeholder='Enter email '
      />

      <InputField

        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomButton
        // customStyle={styles.button}
        text={'Login'}
        onPress={handleLogin}
      />

      <CustomButton
        customStyle={styles.registerBtn}
        text={'Create new account'}
        // customTxtSyle={}
        onPress={handleRegister}
      />
    
    </View>
</ScrollView>
  );
};

export default LoginScreen;



