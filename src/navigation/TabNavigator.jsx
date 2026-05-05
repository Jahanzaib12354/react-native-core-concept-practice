import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home'
import ProfileScreen from '../screens/Profile'
import SettingScreen from '../screens/Setting'
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName, focused, color, size) => {
  let iconName;
  if (routeName === "Home") {
    iconName = focused ? 'home' : 'home-outline';
  }
  else if (routeName === "Profile" ) {
    iconName = focused ? 'person' : 'person-outline';
  }
  else if (routeName === "Settings") {
    iconName = focused ? 'settings' : 'settings-outline';
  }
  return <Icon name={iconName} size={size} color={color} />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
     
      screenOptions={({ route } ) => ({
        tabBarIcon: ({ focused, size, color }) =>
          getTabBarIcon(route.name, focused, color, size),
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',

        tabBarStyle: { backgroundColor: '#fff' },
        tabBarIndicatorStyle: {
          backgroundColor: '#007bff',
          height: 3,
        },
        tabBarLabelStyle: { 
          fontSize: 16 
        },
       
      })
      }
    >
      <Tab.Screen name="Home" options={{ headerShown: false }}  component={HomeScreen} />
      <Tab.Screen name="Profile" options={{ headerShown: true }}  component={ProfileScreen} />
      <Tab.Screen name="Settings" options={{ headerShown: true }} component={SettingScreen}  />
    </Tab.Navigator>

  );
};

export default TabNavigator;

