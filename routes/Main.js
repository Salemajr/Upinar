import React from 'react';
import HomeStack from './HomeStack';
import LogStack from './LogStack';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LogStack" component={LogStack} />
    </Stack.Navigator>
  );
};

export default Main;
