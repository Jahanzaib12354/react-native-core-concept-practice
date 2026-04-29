import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import InputField from '../../../components/InputField';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const navigation = useNavigation();
 
 const handleRegister = () => {
   

 
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
     if (!email.endsWith('@gmail.com')) {
    Alert.alert('Email must be @gmail.com');
    return;
  }
  if (password.length < 6) {
    Alert.alert('Password must be at least 6 characters');
    return;
  }
    Alert.alert('Success', 'User Registered Successfully');

    setName('');
    setEmail('');
    setPassword('');

      navigation.navigate('login')
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Register</Text>

      <InputField
        placeholder="Name"
        value={name}
        onChangeText={setName}
        
      />

      <InputField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        
      />
      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
    
      />

      <CustomButton
      customStyle={styles.loginBtn}
      text={'Register'}
         onPress={handleRegister}
      />
    </View>
  );
};

export default RegisterScreen;