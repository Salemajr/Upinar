import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const CustomCourseTilte = ({Title, color, year, code}) => {
  return (
    <View style={[styles.cover, {backgroundColor: `${color}`}]}>
      <Text style={styles.Title}>{Title}</Text>
      <Text style={styles.year}>{year}</Text>
      <Text style={styles.code}>{code}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: 120,
    backgroundColor: '#FBC632',
    borderRadius: 7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  Title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    overflow: 'hidden',
  },
  year: {
    color: 'white',
    fontSize: 14,
  },
  code: {
    color: 'white',
    fontSize: 14,
  },
});

export default CustomCourseTilte;
