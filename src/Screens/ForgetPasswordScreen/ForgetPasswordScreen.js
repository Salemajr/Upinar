import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SignInScreen from '../SignInScreen/SignInScreen';
import forgetPhoto from '../../../assets/images/forgetPasswordPhoto.png';
import emailIcon from '../../../assets/images/Vector3.png';

const ForgetPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const {height} = useWindowDimensions();
  const SubmitOnPress = () => {
    navigation.navigate('SignInScreen');
  };
  return (
    <View style={styles.root}>
      <Image
        source={forgetPhoto}
        style={{width: '100%', height: height * 0.4, resizeMode: 'contain'}}
      />
      <Text style={styles.title}>Forget Your Password</Text>
      <Text style={styles.label}>E-mail to recover </Text>
      <View style={{width: '100%'}}>
        <Image source={emailIcon} style={styles.icon} />
        <CustomInput
          placeholder="YourEmail@exmple.com"
          secureTextEntry={false}
          value={email}
          setValue={setEmail}
        />
      </View>
      <CustomButton
        ButtonText="Submit"
        color={'#662583'}
        PressHandler={SubmitOnPress}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: '100%',
    padding: 20,
  },
  icon: {
    position: 'absolute',
    top: 16,
    right: 20,
  },
  label: {
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 7,
    paddingHorizontal: 1,
    color: '#662583',
  },
  title: {
    width: '100%',
    color: '#662583',
    fontSize: 23,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 10,
  },
});

export default ForgetPasswordScreen;
