import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-paper';
import {images} from '../../../assets/images';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';

const {width, height} = Dimensions.get('window');

const HeroSection = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <ImageBackground
      source={images.theater} // Replace with your actual image path
      style={styles.background}>
      {/* Profile Button */}
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <View style={styles.profileContainer}>
          <Image
            source={images.avatar} // Replace with your actual profile image path
            style={styles.profileImage}
          />
          <Text style={styles.profileText}>Profile</Text>
        </View>
      </TouchableOpacity>

      {/* Theatre Title */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Theatre</Text>
      </View>
    </ImageBackground>
  );
};

export default HeroSection;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5, // For shadow effect on Android
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  profileText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  textContainer: {
    position: 'absolute',
    bottom: height * 0.4, // Adjusted positioning for exact match
  },
  title: {
    fontSize: 60, // Adjust to match the Gothic style
    fontFamily: 'serif', // You can replace this with a custom Gothic font if needed
    color: '#333', // Dark gray color matching the image
    textAlign: 'center',
  },
});
