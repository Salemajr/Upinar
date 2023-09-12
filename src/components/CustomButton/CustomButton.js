import React from 'react';
import {Button, Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const CustomButton = ({ButtonText, PressHandler, color}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: `${color}`}]}
      onPress={PressHandler}>
      <Text style={styles.title}>{ButtonText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#7A64E1',
    backgroundColor: '#7A64E1',
    borderRadius: 7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});
export default CustomButton;
