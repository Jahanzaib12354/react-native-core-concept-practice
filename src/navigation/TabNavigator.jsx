import { View, Text , Button,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
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

const TabNavigator = (navigation) => {
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
      <Tab.Screen 
      name="Home"  
      component={HomeScreen} />
      
     <Tab.Screen 
  name="Profile"
  component={ProfileScreen}
  options={({ navigation }) => ({   
    headerLeft: () => (
      <TouchableOpacity  
        onPress={() => navigation.goBack()}  
        style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}  
      >  
        <Icon name="arrow-back" size={24} color="black" />  
        <Text style={{ marginLeft: 8, fontSize: 16 }}></Text>  
      </TouchableOpacity>  
    ),
  })}
/>

      
      <Tab.Screen name="Settings"  component={SettingScreen} 
       options={({ navigation }) => ({  
      headerLeft: () => (
      <TouchableOpacity  
        onPress={() => navigation.navigate('Profile')}  
        style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}  
      >  
        <Icon name="arrow-back" size={24} color="black" />  
        <Text style={{ marginLeft: 8, fontSize: 16 }}></Text>  
      </TouchableOpacity>  
    ),
  })}
      />
    </Tab.Navigator>

  );
};

export default TabNavigator;

