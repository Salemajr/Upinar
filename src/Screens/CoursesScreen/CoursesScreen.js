import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CustomCard from '../../components/CustomCard/CustomCard';
import PaintPhoto from '../../../assets/images/paint.png';
import webPhoto from '../../../assets/images/web.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';

const OpenOnPress = () => {};
const CoursesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon1 name="arrow-back" size={26} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon1 name="menu-sharp" size={26} color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>My Courses</Text>
        <TouchableOpacity>
          <Icon name="cloud-download" color={'black'} size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{height: '100%'}}>
        <CustomCard
          color={'#FEF7E7'}
          ButtonColor={'#FBC632'}
          cousreName="mobile programming for bitches"
          Code="SWE2123"
          year=" 2021 - 2022"
          onPressHandler={() => navigation.navigate('courseDetails')}
          src={PaintPhoto}
        />
        <CustomCard
          color={'#EAE6F8'}
          ButtonColor={'#542ABD'}
          cousreName="Web Programming for men"
          Code="SWE4123"
          year=" 2021 - 2022"
          onPressHandler={() => navigation.navigate('courseDetails')}
          src={webPhoto}
        />
        <CustomCard
          color={'#EFF7E4'}
          ButtonColor={'#79C026'}
          cousreName="Web Programming for men"
          Code="SWE4123"
          year=" 2021 - 2022"
          onPressHandler={() => navigation.navigate('courseDetails')}
          src={webPhoto}
        />
        <CustomCard
          color={'#FEF7E7'}
          ButtonColor={'#FBC632'}
          cousreName="mobile programming for bitches"
          Code="SWE2123"
          year=" 2021 - 2022"
          onPressHandler={() => navigation.navigate('courseDetails')}
          src={PaintPhoto}
        />
        <CustomCard
          color={'#EAE6F8'}
          ButtonColor={'#542ABD'}
          cousreName="Web Programming for men"
          Code="SWE4123"
          year=" 2021 - 2022"
          onPressHandler={() => navigation.navigate('courseDetails')}
          src={webPhoto}
        />
        <CustomCard
          color={'#EFF7E4'}
          ButtonColor={'#79C026'}
          cousreName="Web Programming for men"
          Code="SWE4123"
          year=" 2021 - 2022"
          onPressHandler={() => navigation.navigate('courseDetails')}
          src={webPhoto}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
});
export default CoursesScreen;
