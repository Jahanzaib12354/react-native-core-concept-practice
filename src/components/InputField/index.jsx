import React from "react";
import styles from "./styles";
import { TextInput } from "react-native";


const InputField = ({
  value,
  onChangeText,
  placeholder = "something",
  customStyle,
  secureTextEntry

}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={[styles.container, {...customStyle}]}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default InputField;