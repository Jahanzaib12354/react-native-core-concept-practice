
import { View, Text , FlatList} from 'react-native';
import React, { useEffect, useState, } from 'react';
import styles from './styles'; 
import {getPosts} from '../../services/api'



const HomeScreen = () => {
 const [userData,setUserData]= useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setUserData(data);
        
      } catch (error) {
        console.log("Error:", error);
      } 
    };

    fetchData();
  }, []);

    const renderItem =({item})=>{
      return(
      <View style={styles.card}>
         <Text>{item.userId}</Text>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
      
      </View>
    )};

  return (
    <View style={styles.container}> 
         <Text style={styles.title}> User</Text>
         <FlatList 
         data={userData}
         renderItem={renderItem}
         keyExtractor={(item) =>item.id.toString()}
        
             />

      
     
       </View>
);
};

export default HomeScreen;
