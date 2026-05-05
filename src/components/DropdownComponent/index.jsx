import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './styles';

const DropdownComponent = ({
data 
}) => {
  const [selectorValue, setSelectorValue] = useState(null);
  



  return (
    <View style={styles.dropdownContainer}>

      <Text style={styles.label}>Select Option</Text>

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        iconStyle={styles.iconStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Choose an option"
        value={selectorValue}
        onChange={item => setSelectorValue(item.value)}
        
      />

    </View>
  );
};

export default DropdownComponent;