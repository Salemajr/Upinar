import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import loginPhoto from '../../../assets/images/loginScreen.png';
import {Ionicons} from '../../Icons';

const SignInScreen = ({navigation}) => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginOnPress = () => {
    if (Username === 'root' && password === '1234') {
      navigation.navigate('MyDrawer');
    } else {
      Alert.alert('error', 'login info are not corect');
    }
  };

  const {height} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image
        source={loginPhoto}
        style={[styles.logo, {height: height * 0.35}]}
        resizeMode="contain"
      />
      <Text style={styles.title}>LOGIN</Text>
      {/*  ================ first input =============== */}
      <View style={{width: '100%', position: 'relative'}}>
        <Ionicons
          name="person"
          size={23}
          color={'#7A64E1'}
          style={styles.iconUser}
        />
        <CustomInput
          placeholder="Username"
          secureTextEntry={false}
          value={Username}
          setValue={setUsername}
        />
      </View>

      {/*  ================ first input =============== */}
      <View style={{width: '100%', position: 'relative'}}>
        <Ionicons
          name="lock-closed"
          size={23}
          color={'#7A64E1'}
          style={styles.iconUser}
        />
        <CustomInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />
      </View>
      <Text style={styles.termCondtion}>
        by singing in you accept
        <Text
          style={styles.marked}
          onPress={() => {
            navigation.navigate('Policy');
          }}>
          {' '}
          Terms and condtions
        </Text>
      </Text>
      <View style={{width: '100%'}}>
        <CustomButton
          ButtonText="Login"
          color={'#7A64E1'}
          PressHandler={loginOnPress}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Forget Password');
        }}>
        <Text style={styles.forget}>Forget your password ?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    color: '#7A64E1',
    fontSize: 23,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  iconUser: {
    position: 'absolute',
    top: 13,
    right: 20,
  },
  termCondtion: {
    width: '100%',
    textAlign: 'left',
    fontSize: 14,
    color: '#BDABC5',
  },
  marked: {
    color: '#7A64E1',
  },
  forget: {
    marginTop: 10,
    color: '#7A64E1',
  },
});
export default SignInScreen;
