import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomCourseTilte from '../../components/CustomCourseTilte/CustomCourseTilte';
import CustomCourseFile from '../../components/CustomCourseFile/CustomCourseFile';
import Icon4 from 'react-native-vector-icons/Ionicons';

const CourseDetails = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon4 name="arrow-back" size={26} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon4 name="menu-sharp" size={26} color={'black'} />
        </TouchableOpacity>
      </View>
      <CustomCourseTilte
        Title="Mobile Programing"
        year="year 2021 - 2022"
        code="SWE332"
        color="#FBC632"
      />
      <View style={styles.Title}>
        <Text style={styles.TitleText}>Course Description</Text>
      </View>
      <View style={styles.desc}>
        <Text style={styles.descText}>
          أهلاً بكم طلابي الأعزاء في مساق برمجة الموبايل سوف نقوم بشرح رياكت
          نيتف ولا واحد يستعجل على رزقه نتمتى لكم عام مميز وكل عام وانتم بخير
          مدرسة المساق الدكتورة فاطمة الرباعي تقبلو مروري
        </Text>
      </View>
      <View style={styles.Title}>
        <Text style={styles.TitleText}>1 Octobar - 7 Octobar</Text>
      </View>
      <CustomCourseFile
        color={'#FBC632'}
        tintColor={'#FEF7E7'}
        fileType={'file'}
        fileUse={'download'}
      />
      <CustomCourseFile
        color={'#542ABD'}
        tintColor={'#EAE6F8'}
        fileType={'video'}
        fileUse={'link-2'}
      />
      <CustomCourseFile
        color={'#542ABD'}
        tintColor={'#EAE6F8'}
        fileType={'video'}
        fileUse={'link-2'}
      />
      <View style={styles.Title}>
        <Text style={styles.TitleText}>1 Octobar - 7 Octobar</Text>
      </View>
      <CustomCourseFile
        color={'#FBC632'}
        tintColor={'#FEF7E7'}
        fileType={'file'}
        fileUse={'download'}
      />
      <CustomCourseFile
        color={'#542ABD'}
        tintColor={'#EAE6F8'}
        fileType={'video'}
        fileUse={'link-2'}
      />
      <CustomCourseFile
        color={'#542ABD'}
        tintColor={'#EAE6F8'}
        fileType={'video'}
        fileUse={'link-2'}
      />
      <View style={styles.Title}>
        <Text style={styles.TitleText}>1 Octobar - 7 Octobar</Text>
      </View>
      <CustomCourseFile
        color={'#FBC632'}
        tintColor={'#FEF7E7'}
        fileType={'file'}
        fileUse={'download'}
      />
      <CustomCourseFile
        color={'#542ABD'}
        tintColor={'#EAE6F8'}
        fileType={'video'}
        fileUse={'link-2'}
      />
      <CustomCourseFile
        color={'#542ABD'}
        tintColor={'#EAE6F8'}
        fileType={'video'}
        fileUse={'link-2'}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
  },
  desc: {
    width: '100%',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#EFF7E4',
  },
  descText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
  },
  Title: {
    marginTop: 15,
    marginBottom: 10,
  },
  TitleText: {
    fontSize: 17,
    color: 'black',
    fontWeight: '500',
  },
});

export default CourseDetails;
