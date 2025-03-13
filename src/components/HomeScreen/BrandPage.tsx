import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {images} from '../../../assets/images';
const BrandPage = () => {
  return (
    <View style={styles.container}>
      {/* Decorative top-right image - Hidden on small screens */}
      <View style={styles.decorativeImageContainer}>
        <Image source={images.decorative} style={styles.decorativeImage} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.gridContainer}>
          {/* Left side - Drama Club Poster */}
          {/* Right side content */}
          <View style={styles.textContent}>
            <Text style={styles.brandTitle}>BRAND</Text>
            <View style={styles.posterContainer}>
              <Image source={images.dramaClub} style={styles.posterImage} />
            </View>

            {/* Text content with background image */}
            <View style={styles.textBackgroundContainer}>
              <Image
                source={images.textBg}
                style={styles.textBackgroundImage}
              />
              <View style={styles.textOverlay}>
                <Text style={styles.showTitle}>All Time Show</Text>
                <Text style={styles.showDescription}>
                  envisions to perform stage plays and encourage the next
                  generation both, on and off stage. This will enable reviving
                  the theatre culture.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2D42',
  },
  decorativeImageContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'none', // Hidden on small screens
  },
  decorativeImage: {
    width: 128, // Adjust based on your design
    height: 128, // Adjust based on your design
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  gridContainer: {
    width: '100%',
  },
  posterContainer: {
    width: '100%',
    alignItems: 'center',
  },
  posterImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1, // Adjust based on your image aspect ratio
    borderRadius: 10,
    marginBottom: 10,
  },
  textContent: {
    marginTop: 6,
  },
  brandTitle: {
    fontSize: 40,
    fontFamily: 'Aclonica-Regular', // Ensure you have this font loaded
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
  },
  textBackgroundContainer: {
    width: '100%',
    position: 'relative',
  },
  textBackgroundImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.5, // Adjust based on your image aspect ratio
  },
  textOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  showTitle: {
    fontSize: 28,
    fontFamily: 'Mukta-SemiBold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
  },
  showDescription: {
    fontSize: 18,
    fontFamily: 'Mukta-Regular',
    color: 'black',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default BrandPage;
