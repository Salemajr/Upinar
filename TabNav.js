import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import PolicyScreen from './src/Screens/PolicyScreen/PolicyScreen';
import MyDrawer from './routes/MyDrawer';
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Policy" component={PolicyScreen} />
      <Tab.Screen name="  " component={MyDrawer} />
    </Tab.Navigator>
  );
};

export default TabNav;
