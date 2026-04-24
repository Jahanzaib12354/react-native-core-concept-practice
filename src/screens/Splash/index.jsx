// import React, { useEffect } from 'react';
// import { View, Text, ImageBackground, ActivityIndicator } from 'react-native';
// import styles from './styles';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const SplashScreen = ({ navigation }) => {

//   useEffect(() => {
//     setTimeout(() => {
//       navigation.replace('Home'); 
//     }, 2500); 
//   }, []);

//   return (
//     <ImageBackground
//      source={{ uri: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7' }}
//       style={styles.bg}
//     >

//       <View style={styles.overlay}>

//         <Text style={styles.title}> My App</Text>

//         <ActivityIndicator size="large" color="#f70d0d" />

//         <Text style={styles.loading}>Loading...</Text>

//       </View>

//     </ImageBackground>
//   );
// };

// export default SplashScreen;


// 

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
