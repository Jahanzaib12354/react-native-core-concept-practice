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
 
 const handleLogin = () => {
    navigation.navigate('login')
  }

  const handleRegister = () => {
 
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }


    Alert.alert('Success', 'User Registered Successfully');

    setName('');
    setEmail('');
    setPassword('');

    
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
         onPress={handleLogin}
      />
    </View>
  );
};

export default RegisterScreen;