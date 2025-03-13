import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Linking,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../../assets/images';
import {IconButton} from 'react-native-paper';
import BottomTabBar from '../../navigation/BottomTabBar';
const {width} = Dimensions.get('window');
const scaleFactor = width / 375;

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  genre: string;
  language: string;
  image: any; // Use 'any' for image source in React Native
}

const MuktanganVenue = () => {
  const navigation = useNavigation();
  const openMaps = () => {
    const address = 'AJC Bose Road, Taltala, Kolkata, West Bengal 700014';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;
    Linking.openURL(url).catch(err =>
      console.error('Failed to open maps:', err),
    );
  };

  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: 'পূর্বরঙ্গ - Day1 Shows',
      date: '18 Jan, 2025',
      time: '5:30 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'Bengali',
      image: images.banner1,
    },
    {
      id: 2,
      title: 'পূর্বরঙ্গ - Day2 Shows',
      date: '19 Jan, 2025',
      time: '5:00 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'Bengali',
      image: images.Banner2,
    },
    {
      id: 3,
      title: 'পূর্বরঙ্গ - Day3 Shows',
      date: '20 Jan, 2025',
      time: '6:00 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'Bengali',
      image: images.Banner3,
    },
    {
      id: 4,
      title: 'পূর্বরঙ্গ - Day4 Shows',
      date: '21 Jan, 2025',
      time: '6:00 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'Hindi',
      image: images.Banner4,
    },
    {
      id: 5,
      title: 'পূর্বরঙ্গ - Day5 Shows',
      date: '22 Jan, 2025',
      time: '6:00 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'English',
      image: images.Banner5,
    },
    {
      id: 6,
      title: 'পূর্বরঙ্গ - Day6 Shows',
      date: '23 Jan, 2025',
      time: '5:00 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'Bengali',
      image: images.Banner6,
    },
    {
      id: 7,
      title: 'পূর্বরঙ্গ - Day7 Shows',
      date: '24 Jan, 2025',
      time: '6:00 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'Bengali',
      image: images.Banner7,
    },
  ];

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
            source={images.MuktanganBanner}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Muktangan Rangalaya</Text>
            <View style={styles.addressContainer}>
              <IconButton
                icon="map-marker"
                iconColor="#fff"
                size={20 * scaleFactor}
                onPress={openMaps}
                style={styles.inlineMapIcon}
              />
              <Text style={styles.heroSubtitle}>
                AJC Bose Road, Taltala, Kolkata, West Bengal 700014
              </Text>
            </View>
          </View>
        </View>

        {/* Events Section */}
        <View style={styles.eventsContainer}>
          <Text style={styles.sectionTitle}>Upcoming Events At This Venue</Text>

          {/* Horizontal Scroll for Events */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.eventsScrollContainer}>
            {upcomingEvents.map(event => (
              <TouchableOpacity
                key={event.id}
                style={styles.eventCard}
                //   onPress={() => handleEventClick(event)}
              >
                {/* Event Image */}
                <Image source={event.image} style={styles.eventImage} />

                {/* Event Details */}
                <View style={styles.eventDetails}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <View style={styles.eventInfo}>
                    <Text style={styles.eventText}>📅 {event.date}</Text>
                    <Text style={styles.eventText}>⏰ {event.time}</Text>
                    <Text style={styles.eventText}>📍 {event.venue}</Text>
                    <Text style={styles.eventText}>
                      🎭 {event.genre} • {event.language}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
  eventsScrollContainer: {
    flexDirection: 'row',
    gap: 12 * scaleFactor,
  },
  eventCard: {
    width: width - 32 * scaleFactor, // Full width minus padding
    borderRadius: 12 * scaleFactor,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  eventImage: {
    width: '100%',
    height: 200 * scaleFactor,
  },
  eventDetails: {
    padding: 12 * scaleFactor,
  },
  eventTitle: {
    fontSize: 18 * scaleFactor,
    fontFamily: 'Mukta-SemiBold',
    color: '#2B2D42',
    marginBottom: 8 * scaleFactor,
  },
  eventInfo: {
    gap: 6 * scaleFactor,
  },
  eventText: {
    fontSize: 14 * scaleFactor,
    fontFamily: 'Mukta-Regular',
    color: '#666',
  },
});

export default MuktanganVenue;
