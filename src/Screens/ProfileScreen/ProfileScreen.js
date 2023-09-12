import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import cover from '../../../assets/images/cover1.png';
import avatar from '../../../assets/images/avatar1.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}
const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="Light-content" backgroundColor="#7A64E1" />
      <ImageBackground source={cover} style={styles.cover}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon4 name="arrow-back" size={26} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Icon4 name="menu-sharp" size={26} color={'white'} />
          </TouchableOpacity>
        </View>
        <Image source={avatar} style={styles.avatar} />
      </ImageBackground>
      <View style={styles.info}>
        <Text style={styles.infoText}>Salem Majed Elajrmi</Text>
        <Text style={styles.infoCollege}>
          Engineering and Urban Planing College
        </Text>
      </View>
      <View style={styles.someInfo}>
        <View style={styles.oneInfo}>
          <Icon name="graduation-cap" size={20} color={'#7A64E1'} />
          <Text style={styles.year}>4</Text>
        </View>
        <View style={styles.oneInfo}>
          <Icon4 name="ios-ribbon-sharp" size={20} color={'#7A64E1'} />
          <Text style={styles.year}>99</Text>
        </View>
        {/* <View style={styles.oneInfo}>
          <Icon2 name="qrcode" size={20} color={'#7A64E1'} />
          <Text style={styles.year}>QR</Text>
        </View> */}
      </View>
      {/* <View style={{width: '100%', padding: 20}}>
        <TouchableOpacity style={styles.links}>
          <Text style={{fontSize: 16, color: 'black'}}>Show progress</Text>
          <Icon3 name="chevron-right" size={20} color={'#7A64E1'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.links}>
          <Text style={{fontSize: 16, color: 'black'}}>Show Grades</Text>
          <Icon3 name="chevron-right" size={20} color={'#7A64E1'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.links}>
          <Text style={{fontSize: 16, color: 'black'}}>Use QR code</Text>
          <Icon2 name="qrcode" size={20} color={'#7A64E1'} />
        </TouchableOpacity>
      </View> */}

      <TouchableOpacity style={[styles.qr, styles.shadowProp]}>
        <Text style={{fontSize: 16, color: 'black'}}>Change Profile Photo</Text>
        <Icon3 name="chevron-right" size={20} color={'#7A64E1'} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.qr, styles.shadowProp]}>
        <Text style={{fontSize: 16, color: 'black'}}>Show Overall status</Text>
        <Icon3 name="chevron-right" size={20} color={'#7A64E1'} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.qr, styles.shadowProp]}>
        <Text style={{fontSize: 16, color: 'black'}}>Show Grades</Text>
        <Icon3 name="chevron-right" size={20} color={'#7A64E1'} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.qr, styles.shadowProp]}>
        <Text style={{fontSize: 16, color: 'black'}}>Scan QR code</Text>
        <Icon4 name="qr-code" size={20} color={'#7A64E1'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.qr, styles.shadowProp]}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={{fontSize: 16, color: 'black'}}>Log out</Text>
        <Icon3 name="log-out" size={20} color={'#7A64E1'} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  cover: {
    width: '100%',
    resizeMode: 'cover',
    height: height * 0.24,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 120,
    position: 'absolute',
    bottom: -60,
    right: width / 2 - 75,
  },
  info: {
    width: '100%',
    alignItems: 'center',
    marginTop: 70,
  },
  infoText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoCollege: {
    color: 'grey',
  },
  someInfo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 40,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  oneInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  year: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  qr: {
    padding: 17,
    width: '90%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginBottom: 10,
  },
  shadowProp: {
    shadowColor: '#52006A',
    elevation: 20,
  },
});
export default ProfileScreen;
