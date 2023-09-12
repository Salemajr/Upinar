import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CourseDetails from '../src/Screens/CourseDetails/CourseDetails';
import HomeScreen from '../src/Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../src/Screens/ProfileScreen/ProfileScreen';
import MyDrawer from '../routes/MyDrawer';
import HomeStack from './HomeStack';
import LogStack from './LogStack';
import Icon from 'react-native-vector-icons/Ionicons';
const tab = createBottomTabNavigator();
const Tab = () => {
  return (
    <tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = 'home-sharp';
          } else if (route.name === 'HomeStack') {
            iconName = 'school-sharp';
          } else if (route.name === 'ProfileScreen') {
            iconName = 'person';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#7A64E1',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <tab.Screen name="HomeScreen" component={HomeScreen} />
      <tab.Screen name="HomeStack" component={HomeStack} />
      <tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </tab.Navigator>
  );
};

export default Tab;
