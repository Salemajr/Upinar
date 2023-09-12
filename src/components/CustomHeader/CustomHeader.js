import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text>Hello</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CustomHeader;
