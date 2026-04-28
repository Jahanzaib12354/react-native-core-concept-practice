

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('login'); 
    }, 3000);
  }, []);

  return (
    <View style={styles.container} >
      <Text style={styles.title}>My App Splash</Text>
    </View>
  );
};

export default SplashScreen;
