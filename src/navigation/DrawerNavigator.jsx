
import React from 'react'

import { createBottomDrawerNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home'
import ProfileScreen from '../screens/Profile'
import SettingScreen from '../screens/Setting'

const Tab = createBottomDrawerNavigator ();
const DrawerNavigator = () => {
  return (

   <DrawerNavigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Setting" component={SettingScreen} />
   </DrawerNavigator>
   
  );
};

export default DrawerNavigator;