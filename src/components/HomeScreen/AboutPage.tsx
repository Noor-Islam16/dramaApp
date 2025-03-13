import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {images} from '../../../assets/images';

const {width} = Dimensions.get('window');

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        {/* Spotlights Image with Text Overlay */}
        <Image source={images.spotlight} style={styles.spotlight} />
        <View style={styles.textOverlay}>
          {/* <Text style={styles.title}>About Us</Text> */}
          <Text style={styles.description}>
            'All Time Show' - Day Dream is a stage drama troupe, where the
            creative writing from the director is illuminated on stage to give a
            magical experience.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373737',
    alignItems: 'center',
    padding: 0,
  },
  overlay: {
    position: 'relative',
    alignItems: 'center',
  },
  spotlight: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  textOverlay: {
    position: 'absolute',
    top: '30%',
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    marginTop: 20,
    fontSize: width * 0.045,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 16,
    fontFamily: 'Mukta-Regular',
  },
});

export default AboutPage;
