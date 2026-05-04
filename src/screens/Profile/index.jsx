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
      {isEditing ? (
        <InputField
  value={user.name}
  onChangeText={(text) => setUser({ ...user, name: text })}
        />
      ) : (
        <Text style={styles.title}>{user.name}</Text>
      )}

<Text style={styles.title}>City</Text>
      {isEditing ? (
        <InputField
          value={user.city}
          onChangeText={(text) => setUser({ ...user, city: text })}
        />

      ) : (
        <Text style={styles.title}>{user.city}</Text>
      )}

      

      <CustomButton
        text={isEditing ? "Save" : "Edit"}
        onPress={toggleEdit}
      />

    </View>
  );
};

export default ProfileScreen;

