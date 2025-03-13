import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Animated, Text, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {images} from '../../assets/images';
import {RootStackParamList} from '../../App';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const scaleValue = new Animated.Value(0.1);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Start animation
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start(() => {
      // Show text after animation completes
      setShowText(true);
      // Navigate to SignUp page after 1 additional second
      setTimeout(() => {
        navigation.navigate('Login');
      }, 1000);
    });
  }, [navigation]);

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" // or "light-content" depending on your UI
      />
      <LinearGradient colors={['#FF232D', '#8A171C']} style={styles.container}>
        <Animated.Image
          source={images.transparentLogo}
          style={[styles.logo, {transform: [{scale: scaleValue}]}]}
        />
        {/* {showText && <Text style={styles.text}></Text>} */}
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    // marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 24,
    // fontStyle: 'italic',
    fontFamily: 'Kanit-SemiBold',
  },
});

export default SplashScreen;
