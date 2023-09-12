import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CustomCourseFile = ({color, tintColor, fileType, fileUse}) => {
  return (
    <TouchableOpacity
      style={[styles.contaienr, {backgroundColor: `${tintColor}`}]}>
      <View style={styles.logoText}>
        <View style={[styles.logo, {backgroundColor: `${color}`}]}>
          <Icon name={`${fileType}`} color="white" size={25} />
        </View>
        <View style={styles.title}>
          <Text style={styles.moduleName}>Module One </Text>
          <Text style={styles.date}>01-05-2022</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Icon name={`${fileUse}`} color={'black'} size={23} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  contaienr: {
    width: '100%',
    height: 55,
    borderRadius: 7,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    marginBottom: 10,
  },
  logo: {
    height: 45,
    width: 45,
    display: 'flex',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginRight: 15,
  },
  logoText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  moduleName: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  date: {
    color: 'black',
  },
});
export default CustomCourseFile;
