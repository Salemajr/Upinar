import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import avatar from '../../../assets/images/avatar1.png';
import CustomCard from '../../components/CustomCard/CustomCard';
import {Ionicons} from '../../Icons';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const HomeScreen = ({navigation}) => {
  const OpenOnPress = () => {
    navigation.navigate('HomeStack');
  };
  const {height} = Dimensions.get('screen');
  const {width} = Dimensions.get('screen');
  return (
    <View style={styles.root}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#7A64E1" />
      <View
        style={{
          width: width,
          position: 'absolute',
          height: height * 0.29,
          backgroundColor: '#7A64E1',
        }}></View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Porfile')}>
            <Image source={avatar} style={styles.avatar} />
          </TouchableOpacity>
          <View>
            <Text style={styles.username}>Salem elajrami</Text>
            <Text style={{color: 'white'}}>salemajrami@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Ionicons name="menu-sharp" size={26} color={'white'} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={[styles.Title, {color: 'white'}]}>Dashboard</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <TouchableOpacity style={[styles.squre, {width: width * 0.27}]}>
            <Ionicons name="md-speedometer" size={30} color={'#7A64E1'} />
            <Text style={styles.squreText}>Control</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.squre, {width: width * 0.27}]}>
            <Ionicons name="md-stats-chart" size={30} color={'#7A64E1'} />
            <Text style={styles.squreText}>Grades</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.squre, {width: width * 0.27}]}>
            <Ionicons name="user" size={30} color={'#7A64E1'} />
            <Text style={styles.squreText}>Grades</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.courseHeader}>
          <Text style={styles.Title}>Courses</Text>
          <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{height: '70%'}}>
          <CustomCard
            color={'#FEF7E7'}
            ButtonColor={'#FBC632'}
            cousreName="mobile programming "
            Code="SWE2123"
            year=" 2021 - 2022"
            onPressHandler={OpenOnPress}
          />
          <CustomCard
            color={'#EAE6F8'}
            ButtonColor={'#542ABD'}
            cousreName="Web Programming "
            Code="SWE4123"
            year=" 2021 - 2022"
            onPressHandler={OpenOnPress}
          />
          <CustomCard
            color={'#EFF7E4'}
            ButtonColor={'#79C026'}
            cousreName="Web Programming "
            Code="SWE4123"
            year=" 2021 - 2022"
            onPressHandler={OpenOnPress}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    padding: 20,
    backgroundColor: 'white',
    height: '100%',
  },
  avatar: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white',
  },
  username: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  squre: {
    width: 20,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    shadowColor: '#52006A',
    elevation: 20,
  },
  squreText: {
    color: '#7A64E1',
    fontSize: 16,
  },
  Title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  courseHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeAll: {
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
  },
});
export default HomeScreen;
