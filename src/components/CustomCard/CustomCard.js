import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import PaintPhoto from '../../../assets/images/paint.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
const CustomCard = ({
  color,
  ButtonColor,
  onPressHandler,
  cousreName,
  Code,
  year,
  src,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, {backgroundColor: `${color}`}]}>
        <Icon
          name="graduation-cap"
          size={110}
          color={`${ButtonColor}`}
          style={{
            position: 'absolute',
            top: 40,
            zIndex: 0,
            right: 20,
            opacity: 0.2,
          }}
        />
        <Text style={styles.cousreName}>{cousreName}</Text>
        <View>
          <Text style={styles.code}>{Code}</Text>
          <Text style={styles.year}>Year {year}</Text>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={onPressHandler}
            style={[styles.button, {backgroundColor: `${ButtonColor}`}]}>
            <Text style={styles.buttonText}>Open</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    height: 190,
    width: '100%',
    borderRadius: 10,
  },
  cousreName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    marginBottom: 4,
  },
  year: {
    fontSize: 12,
    color: 'black',
    fontWeight: '400',
  },
  code: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  button: {
    borderRadius: 5,
    width: '50%',
    height: 50,
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  waterMark: {
    position: 'absolute',
    top: 40,
    zIndex: 0,
    right: 20,
    opacity: 0.2,
  },
});
export default CustomCard;
