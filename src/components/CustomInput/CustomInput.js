import React from 'react';
import {Text, TextInput, View, StyleSheet, Image} from 'react-native';

const CustomInput = ({placeholder, secureTextEntry, value, setValue}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor="#BDABC5"
        style={[styles.input, {height: 50}]}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#BDABC5',
    borderRadius: 7,
    color: 'red',
  },
});
export default CustomInput;
