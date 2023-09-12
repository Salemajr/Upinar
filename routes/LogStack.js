import React from 'react';
import {BackHandler} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../src/Screens/SignInScreen/SignInScreen';
import LandingScreen from '../src/Screens/LandingScreen/LandingScreen';
import ForgetPasswordScreen from '../src/Screens/ForgetPasswordScreen/ForgetPasswordScreen';
import PolicyScreen from '../src/Screens/PolicyScreen/PolicyScreen';
import HomeRoute from '../routes/HomeStack';
import CustomHeader from '../src/components/CustomHeader/CustomHeader';
import MyDrawer from './MyDrawer';
const Stack = createStackNavigator();

const LogStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerTitle: () => <CustomHeader />, headerShown: false}}
      />
      <Stack.Screen
        name="Policy"
        component={PolicyScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Forget Password"
        component={ForgetPasswordScreen}
        options={{headerShown: true, title: 'Forget Password'}}
      />
      <Stack.Screen
        name="MyDrawer"
        component={MyDrawer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default LogStack;
