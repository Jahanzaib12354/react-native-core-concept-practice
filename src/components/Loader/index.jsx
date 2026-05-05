import { View, Text } from 'react-native';
import React from 'react';
import { LoaderKitView } from 'react-native-loader-kit';
import styles from '../InputField/styles';

const LoaderScreen = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <LoaderKitView style={{ width: 50, height: 50 }} />
      <Text>Loader</Text>
    </View>
  );
};

export default LoaderScreen;