import { View, Text, Switch} from 'react-native'

import styles from './styles'
import CustomButton from '../../components/CustomButton'
import React, {useState} from 'react';

const  SettingScreen= () => {

const [isEnabled, setIsEnabled]= useState(false)
 const toggleSwitch = () => setIsEnabled(previous => !previous);

 const userScreen =()=>{
  console.log("btton press")
 }

 const user={
  name:"Ali",
  city:"karachi"

 }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name</Text>
      <Text style={styles.Value}>{user.name}</Text>
       <Text style={styles.title}>City</Text>
      <Text style={styles.Value}>{user.city}</Text>
 
 <View style={styles.switch}>
  <Text style={styles.switchtext}>Enable</Text>
  <Switch
    value={isEnabled}
          onValueChange={toggleSwitch}
  />
 </View>
  <Text style={styles.option}>Dark Mode </Text>
      <Text style={styles.option}>Language: English</Text>

      <CustomButton
      text="Edit"
      onPress={userScreen}
      />
    </View>
  )
}

export default SettingScreen;