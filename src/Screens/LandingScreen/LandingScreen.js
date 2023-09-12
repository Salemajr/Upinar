import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import Background from '../../../assets/images/Login1.png';
import UpLogo from '../../../assets/images/logo.png';
import right from '../../../assets/images/Vector.png';

const LandingScreen = ({navigation}) => {
  const {height} = useWindowDimensions();
  const onPressFun = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.container}>
      <Image
        source={UpLogo}
        style={[styles.logo, {height: height * 0.4}]}></Image>
      <View>
        <Text style={styles.title}>WELCOME TO UPINAR </Text>
        <Text style={styles.desc}>
          here you can do your home work and more than this
        </Text>
      </View>

      <View style={styles.father}>
        <View>
          <Pressable onPressIn={onPressFun}>
            <View style={styles.CircleButton}>
              <Image source={right} style={styles.rigthVector}></Image>
            </View>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#85B0F5',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    resizeMode: 'contain',
    maxWidth: 250,
  },
  title: {
    fontWeight: '900',
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
  },
  desc: {
    fontSize: 19,
    color: 'white',
    fontWeight: '300',
    marginLeft: '11%',
    marginRight: '11%',
    textAlign: 'center',
    lineHeight: 25,
  },
  CircleButton: {
    width: 70,
    height: 70,
    backgroundColor: '#0C23C7',
    borderRadius: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  father: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    height: 85,
    borderWidth: 1,
    borderColor: '#5169D4',
    borderRadius: 100,
  },
});
export default LandingScreen;
