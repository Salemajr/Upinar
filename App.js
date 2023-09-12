/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './routes/MyDrawer';
import TabNav from './TabNav';
import LogStack from './routes/LogStack';
import ProfileScreen from './src/Screens/ProfileScreen/ProfileScreen';
import CustomDrawer from './CustomDrawer';
import HomeStack from './routes/HomeStack';
import Main from './routes/Main';
import Tab from './routes/Tab';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LogStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
