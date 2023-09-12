import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton/CustomButton';
import SignInScreen from '../SignInScreen/SignInScreen';

const PolicyScreen = ({navigation}) => {
  const DoneOnPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TERMS AND CONDITION </Text>
      <ScrollView style={styles.scroll}>
        <Text style={styles.PolicyText}>
          1- Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor
          at Hampden-Sydney College in Virginia, looked up one of the more
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature discovered
          the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" {'\n\n'}
          2- The Extremes of Good and Evil by Cicero, written in 45 BC. This
          book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" {'\n\n'} 3- by Cicero are also reproduced in their exact
          original form, accompanied by English versions from the 1914
          translation by H. Rackham. Contrary to popular belief, Lorem Ipsum is
          not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, {'\n\n'}4-discovered the undoubtable source.
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC. This book is a treatise on the theory of ethics, very
          popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
          ipsum dolor sit amet..", comes from a line in section 1.10.32. The
          standard chunk of Lorem Ipsum used since the 1500s is reproduced below
          for those interested. {'\n\n'}5- Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </Text>
      </ScrollView>

      <CustomButton
        color={'#662583'}
        ButtonText="Done"
        PressHandler={DoneOnPress}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    backgroundColor: 'white',
    height: '100%',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
  },
  scroll: {
    backgroundColor: '#F0F0F0',
    borderRadius: 13,
    padding: 10,
  },
  PolicyText: {
    textAlign: 'justify',
    color: 'black',
    fontSize: 16,
  },
});
export default PolicyScreen;
