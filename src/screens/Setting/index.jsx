import { View, Text, Switch} from 'react-native'

import styles from './styles'
import CustomButton from '../../components/CustomButton'
import React, { Activity, useState } from 'react';
import InputField from '../../components/InputField';

import DropdownComponent from '../../components/DropdownComponent';

const SettingScreen = () => {

  const [isEditing, setIsEditing] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previous => !previous);
     const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  const abc=[
    { label: 'Item 10', value: '10' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];


  const [user, setUser] = useState({
    name: "Ali",
    city: "Karachi",
    
  });

  const toggleEdit = () => {
    setIsEditing(prev => !prev)
  }
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Name</Text>
         
        <InputField style={styles.input}
         
          value={user.name}
          onChangeText={(text) => setUser({ ...user, name: text,  })}
          editable={isEditing? true:false}
          
          
        />
       <Text style={styles.title}>City</Text>
        <InputField style={styles.input}
          value={user?.city}
          onChangeText={(text) => setUser({ ...user, city: text })}
          editable={isEditing? true:false}
        />

      

      <View style={styles.switchs}>
        <Text style={styles.switchtext}>Enable</Text>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
        />
      </View>
      
   
  

  <DropdownComponent
  data={abc}
  />
   <DropdownComponent
     data={data}
   />
  
      <View style={styles.buttonContainer}>
      <CustomButton
        text={isEditing  ?"Save" : "Edit"}
        onPress={toggleEdit}
        
      />
       </View>
    </View>
  )
}


export default SettingScreen;




