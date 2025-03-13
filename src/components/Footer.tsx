import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {IconButton} from 'react-native-paper'; // Using react-native-paper icons
import {images} from '../../assets/images';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

const {width} = Dimensions.get('window');

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Use the defined type

  const handleSubmit = () => {
    console.log('Feedback submitted');
  };

  return (
    <View style={styles.footerContainer}>
      {/* Background Image (Centered) */}
      <View style={styles.backgroundImageWrapper}>
        <Image source={images.footerBg} style={styles.backgroundImage} />
      </View>

      {/* Footer Content (Left & Right Sections Start from Top) */}
      <View style={styles.contentContainer}>
        {/* Left Section */}
        <View style={styles.leftSection}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Contact');
            }}>
            <Text style={styles.linkText}>CONTACT US</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('About');
            }}>
            <Text style={styles.linkText}>ABOUT US</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>UPCOMING PLAYS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>THEATRE HALLS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>GROUPS</Text>
          </TouchableOpacity>
        </View>

        {/* Right Section */}
        <View style={styles.rightSection}>
          <Text style={styles.heading}>ADDRESS:</Text>
          <Text style={styles.text}>
            Astra Towers Action Area II, Reckjoani, New Town, West Bengal 700135
          </Text>
          <Text style={styles.heading}>FOR TICKET RELATED QUERY:</Text>
          <Text style={styles.text}>support@alltimeshow.com</Text>
          <Text style={styles.heading}>FOR OTHER QUERY & SUGGESTION:</Text>
          <Text style={styles.text}>enquiry@alltimeshow.com</Text>
        </View>
      </View>

      {/* Feedback Form & Icons (Now Icons Appear Immediately After Feedback) */}
      <View style={styles.feedbackContainer}>
        {/* Feedback Input */}
        <View style={styles.feedbackForm}>
          <TextInput
            placeholder="Your Feedback"
            style={styles.input}
            placeholderTextColor="#000"
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>

        {/* Social Media Icons */}
        <View style={styles.socialIcons}>
          <IconButton icon="earth" size={28} iconColor="#FF201B" />
          <IconButton icon="facebook" size={28} iconColor="#1877F2" />
          <IconButton icon="instagram" size={28} iconColor="#E1306C" />
        </View>
      </View>

      {/* Copyright Bar */}
      <View style={styles.copyrightContainer}>
        <Text style={styles.copyrightText}>
          © {currentYear} All Time Show. All Rights Reserved.
        </Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#262525',
    paddingVertical: 30,
    paddingHorizontal: 16,
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImageWrapper: {
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: -1, // Send background to back
  },
  backgroundImage: {
    width: width * 0.8,
    height: 150,
    opacity: 0.8,
    resizeMode: 'contain',
  },
  contentContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSection: {
    width: '50%',
    justifyContent: 'flex-start',
    marginTop: '2%',
  },
  rightSection: {
    width: '50%',
    justifyContent: 'flex-start',
  },
  linkText: {
    color: 'white',
    fontSize: 16,
    marginBottom: '14%',
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginBottom: 8,
  },
  feedbackContainer: {
    marginTop: 16,
    width: '100%',
  },
  feedbackForm: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#FF201B',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  copyrightContainer: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  copyrightText: {
    color: 'white',
    fontSize: 14,
  },
});
