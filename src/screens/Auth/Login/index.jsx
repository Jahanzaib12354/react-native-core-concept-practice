import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import InputField from '../../../components/InputField';
import CustomButton from '../../../components/CustomButton';
import Loader from '../../../components/Loader';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleLogin = () => {

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

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('Login Successful');
      navigation.navigate('TabNavigator');
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>

        <Text style={styles.title}>Login</Text>

        <Image
          style={styles.img}
          resizeMode='contain'
          source={require('../../../assets/react-3.png')}
        />

        <InputField
          value={email}
          onChangeText={setEmail}
          placeholder='Enter email'
        />

        <InputField
          value={password}
          onChangeText={setPassword}
          placeholder='Password'
          secureTextEntry
        />

        <CustomButton
          text="Login"
          onPress={handleLogin}
        />

        <CustomButton
          customStyle={styles.registerBtn}
          text={'Create new account'}
          onPress={() => navigation.navigate('register')}
        />

        {/* 🔥 FULL SCREEN LOADER */}
        <Loader visible={loading} />

      </View>
    </ScrollView>
  );
};

export default LoginScreen;