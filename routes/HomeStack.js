import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {CourseDetails, CoursesScreen} from '../src/Screens/index';
import LogStack from './LogStack';
import Tab from './Tab';
import MyDrawer from './MyDrawer';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CoursesScreen"
        component={CoursesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="courseDetails"
        component={CourseDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
