import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import avatar from './assets/images/avatar1.png';
import cover from './assets/images/cover1.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={cover} style={styles.cover}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.title}>
          <Text style={styles.name}>Salem elajrami</Text>
          <Text style={styles.email}>Salemelajrami@gmail.com</Text>
        </View>
      </ImageBackground>

      <View style={styles.list}>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.logout, styles.shadowProp]}>
          <Icon name="log-out" size={20} color={'black'} />
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  cover: {
    marginTop: -5,
    width: '100%',
    height: height * 0.22,
    resizeMode: 'contain',
    backgroundColor: 'dodgerblue',
  },
  avatar: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 90,
    borderWidth: 1,
    borderColor: 'white',
    top: 15,
    left: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  list: {
    marginTop: 20,
    height: height * 0.58,
  },
  title: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  email: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
  },
  container: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  logout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '60%',
    backgroundColor: 'white',
    padding: 13,
    borderRadius: 8,
    position: 'absolute',
    bottom: 49,
  },
  logoutText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  shadowProp: {
    shadowColor: '#52006A',
    elevation: 12,
  },
});
export default CustomDrawer;
