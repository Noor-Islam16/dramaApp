import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Linking,
} from 'react-native';
import {images} from '../../../assets/images';
import {Icon, IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const scaleFactor = width / 375;

const Birla = () => {
  const navigation = useNavigation();
  const openMaps = () => {
    const address =
      '29 Ashutosh Chowdhury Avenue, Ballygunge, Near Birla Mandir, Kolkata, West Bengal 700019';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;
    Linking.openURL(url).catch(err =>
      console.error('Failed to open maps:', err),
    );
  };
  return (
    <ScrollView style={styles.container}>
      <IconButton
        icon="arrow-left"
        size={24 * scaleFactor}
        iconColor="#000"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      />
      {/* Hero Banner Section */}
      <View style={styles.heroContainer}>
        <Image
          source={images.Birla}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>GD Birla Sabhaghar</Text>
          <View style={styles.addressContainer}>
            <IconButton
              icon="map-marker"
              iconColor="#fff"
              size={20 * scaleFactor}
              onPress={openMaps}
              style={styles.inlineMapIcon}
            />
            <Text style={styles.heroSubtitle}>
              29 Ashutosh Chowdhury Avenue, Ballygunge, Near Birla Mandir,
              Kolkata, West Bengal 700019
            </Text>
          </View>
        </View>
      </View>

      {/* Events Section */}
      <View style={styles.eventsContainer}>
        <Text style={styles.sectionTitle}>Upcoming Events At This Venue</Text>

        {/* No Events Message with Custom Illustration */}
        <View style={styles.noEventsContainer}>
          {/* Paper stack effect */}
          <View style={styles.paperStack}>
            <View style={[styles.paperLayer, styles.paperLayer1]}></View>
            <View style={[styles.paperLayer, styles.paperLayer2]}></View>
            <View style={styles.paperContent}>
              {/* Sad face emoji with animation */}
              <Text style={styles.sadEmoji}>😢</Text>
              <View style={styles.line1}></View>
              <View style={styles.line2}></View>
            </View>
          </View>

          <Text style={styles.noEventsTitle}>No Shows Right Now</Text>
          <Text style={styles.noEventsText}>
            We're currently preparing some amazing performances! Check back soon
            for new shows at GD Birla Sabhaghar.
          </Text>

          {/* Search Suggestion */}
          <View style={styles.searchSuggestion}>
            <Icon source="search-web" size={20} color="#F02831" />
            <Text style={styles.searchText}>Try exploring other venues</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 36 * scaleFactor,
    left: 6 * scaleFactor,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  heroContainer: {
    height: 300 * scaleFactor,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 16 * scaleFactor,
  },
  heroTitle: {
    fontSize: 28 * scaleFactor,
    fontFamily: 'Mukta-Bold',
    color: '#fff',
    marginBottom: 4 * scaleFactor,
  },
  heroSubtitle: {
    fontSize: 14 * scaleFactor,
    fontFamily: 'Mukta-Regular',
    color: '#fff',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineMapIcon: {
    margin: -10 * scaleFactor,
    padding: 0,
    marginRight: scaleFactor,
  },
  eventsContainer: {
    padding: 16 * scaleFactor,
  },
  sectionTitle: {
    fontSize: 24 * scaleFactor,
    fontFamily: 'Mukta-SemiBold',
    color: '#2B2D42',
    marginBottom: 16 * scaleFactor,
  },
  noEventsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40 * scaleFactor,
  },
  paperStack: {
    width: 120 * scaleFactor,
    height: 120 * scaleFactor,
    position: 'relative',
    marginBottom: 20 * scaleFactor,
  },
  paperLayer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12 * scaleFactor,
  },
  paperLayer1: {
    backgroundColor: '#f0f0f0',
    transform: [{rotate: '6deg'}],
  },
  paperLayer2: {
    backgroundColor: '#f8f8f8',
    transform: [{rotate: '-3deg'}],
  },
  paperContent: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 12 * scaleFactor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16 * scaleFactor,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sadEmoji: {
    fontSize: 36 * scaleFactor,
    marginBottom: 8 * scaleFactor,
  },
  line1: {
    width: 64 * scaleFactor,
    height: 2 * scaleFactor,
    backgroundColor: '#e0e0e0',
    marginBottom: 4 * scaleFactor,
  },
  line2: {
    width: 48 * scaleFactor,
    height: 2 * scaleFactor,
    backgroundColor: '#e0e0e0',
  },
  noEventsTitle: {
    fontSize: 24 * scaleFactor,
    fontFamily: 'Mukta-SemiBold',
    color: '#2B2D42',
    marginBottom: 8 * scaleFactor,
    textAlign: 'center',
  },
  noEventsText: {
    fontSize: 14 * scaleFactor,
    fontFamily: 'Mukta-Regular',
    color: '#666',
    textAlign: 'center',
    marginBottom: 16 * scaleFactor,
    maxWidth: 300 * scaleFactor,
  },
  searchSuggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8 * scaleFactor,
  },
  searchText: {
    fontSize: 14 * scaleFactor,
    fontFamily: 'Mukta-SemiBold',
    color: '#F02831',
  },
});

export default Birla;
