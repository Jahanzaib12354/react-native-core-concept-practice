import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import InputField from '../../components/InputField';

const ProfileScreen = () => {

  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Ali",
    city: "Karachi",
  
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
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
 <View style={styles.buttonContainer}>
      <CustomButton
        text={isEditing ? "Save" : "Edit"}
        onPress={toggleEdit}
      />
</View>
    </View>
  );
};

export default ProfileScreen;

