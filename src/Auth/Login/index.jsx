


import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import abc from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      alert('Login Successful');
    } else {
      alert('Enter email & password');
    }
  };

  return (
    <View style={abc.container}>
      
      <TextInput
        style={abc.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={abc.input}
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={abc.button} onPress={handleLogin}>
        <Text style={abc.buttonText}>Login</Text>
      </TouchableOpacity>

    </View>
  );
};

export default LoginScreen;