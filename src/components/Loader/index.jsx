import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { LoaderKitView } from 'react-native-loader-kit';
import styles  from './styles';
const Loader = ({ visible = false }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <LoaderKitView
            style={{ width: 60, height: 60 }}
            name={'BallPulse'}
            color={'#ffffff'}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

