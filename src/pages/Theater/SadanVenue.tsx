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
import BottomTabBar from '../../navigation/BottomTabBar';

const {width} = Dimensions.get('window');
const scaleFactor = width / 375;

const SadanVenue = () => {
  const navigation = useNavigation();
  const openMaps = () => {
    const address =
      'Cathedral Rd, Maidan, Park Street area, Kolkata, West Bengal 700071';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;
    Linking.openURL(url).catch(err =>
      console.error('Failed to open maps:', err),
    );
  };
  return (
    <>
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
            source={images.Sadan}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Rabindra Sadan</Text>
            <View style={styles.addressContainer}>
              <IconButton
                icon="map-marker"
                iconColor="#fff"
                size={20 * scaleFactor}
                onPress={openMaps}
                style={styles.inlineMapIcon}
              />
              <Text style={styles.heroSubtitle}>
                Cathedral Rd, Maidan, Park Street area, Kolkata, West Bengal
                700071
              </Text>
            </View>
          </View>
        </View>

        {/* Events Section */}
        <View style={styles.eventsContainer}>
          <Text style={styles.sectionTitle}>Upcoming Events At This Venue</Text>

          {/* No Events Message with Stage Theme */}
          <View style={styles.noEventsContainer}>
            {/* Stage Curtain Animation */}
            {/* <View style={styles.stageCurtain}>
            <View style={styles.stage}> */}
            {/* Spotlight Effect */}
            {/* <View style={styles.spotlight}>
                <View style={styles.spotlightEffect} />
              </View> */}

            {/* Calendar Icon */}
            {/* <View style={{marginTop: 20 * scaleFactor}}>
                <Icon source="calendar" size={64} color="#666" />
              </View> */}
            {/* </View>
          </View> */}

            <Text style={styles.noEventsTitle}>Intermission in Progress</Text>
            <Text style={styles.noEventsText}>
              The stage is taking a brief intermission. Our next performance
              schedule will be announced soon!
            </Text>

            {/* Location Info */}
            <View style={styles.locationInfo}>
              <Icon source="map-marker" size={20} color="#666" />
              <Text style={styles.locationText}>
                Stay tuned for upcoming shows at Rabindra Sadan
              </Text>
            </View>
          </View>
        </View>

        {/* Optional Historical Note */}
        <View style={styles.historicalNote}>
          <Text style={styles.historicalText}>
            Rabindra Sadan, established in 1967, is one of Kolkata's premier
            cultural venues. It has been host to countless memorable
            performances and continues to be a cornerstone of Bengali theatre
            and cultural activities.
          </Text>
        </View>
      </ScrollView>
      <BottomTabBar />
    </>
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
  stageCurtain: {
    width: 200 * scaleFactor,
    height: 200 * scaleFactor,
    backgroundColor: '#F02831',
    borderRadius: 100 * scaleFactor,
    overflow: 'hidden',
    transform: [{scaleY: 0.75}],
  },
  stage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spotlight: {
    position: 'absolute',
    top: -80 * scaleFactor,
    left: '50%',
    transform: [{translateX: -50}],
  },
  spotlightEffect: {
    width: 120 * scaleFactor,
    height: 120 * scaleFactor,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 60 * scaleFactor,
  },
  calendarIcon: {
    marginTop: 20 * scaleFactor,
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
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8 * scaleFactor,
  },
  locationText: {
    fontSize: 14 * scaleFactor,
    fontFamily: 'Mukta-Regular',
    color: '#666',
  },
  historicalNote: {
    backgroundColor: '#f5f5f5',
    padding: 16 * scaleFactor,
  },
  historicalText: {
    fontSize: 14 * scaleFactor,
    fontFamily: 'Mukta-Regular',
    color: '#666',
    textAlign: 'center',
  },
});

export default SadanVenue;
