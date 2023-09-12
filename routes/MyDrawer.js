import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import {
  HomeScreen,
  CoursesScreen,
  ProfileScreen,
  PolicyScreen,
} from '../src/Screens/index';

import HomeStack from './HomeStack';
import LogStack from './LogStack';
import Tab from './Tab';
import CustomDrawer from '../CustomDrawer';
const Drawer = createDrawerNavigator();

const MyDrawer = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#7A64E1',
        drawerActiveTintColor: 'white',
        headerShown: false,
        drawerLabelStyle: {marginLeft: -21},
      }}>
      <Drawer.Screen
        name="Home"
        component={Tab}
        options={{
          drawerIcon: ({color}) => (
            <Icon1 name="home-sharp" size={20} color={color} />
          ),
          drawerLabel: 'Home',
        }}
      />

      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          drawerIcon: ({color}) => (
            <Icon2 name="graduation-cap" size={20} color={color} />
          ),
          drawerLabel: 'Courses',
        }}
      />
      <Drawer.Screen
        name="Porfile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon1 name="person" size={20} color={color} />
          ),
          drawerLabel: 'Profile',
        }}
      />
      <Drawer.Screen
        name="setting"
        component={() => {
          Linking.openURL('https://www.facebook.com');
        }}
        options={{
          drawerIcon: ({color}) => (
            <Icon1 name="settings-sharp" size={20} color={color} />
          ),
          drawerLabel: 'Setting',
        }}
      />
      <Drawer.Screen
        name="PolicyScreen"
        component={PolicyScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon3 name="policy" size={20} color={color} />
          ),
          drawerLabel: 'Privacy Policy',
        }}
      />

      <Drawer.Screen
        name="help"
        component={() => {
          Linking.openURL('https://www.facebook.com');
        }}
        options={{
          drawerIcon: ({color}) => (
            <Icon1 name="md-help-circle" size={20} color={color} />
          ),
          drawerLabel: 'Help',
        }}
      />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
