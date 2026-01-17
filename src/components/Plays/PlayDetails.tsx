import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Button, Card, IconButton, Chip, Divider} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const scaleFactor = width / 375;

const PlayDetails = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const selectedShow = useSelector(
    (state: RootState) => state.plays.selectedShow,
  );

  // Redirect if no show is selected
  if (!selectedShow) {
    navigation.navigate('Plays');
    return null;
  }

  // Function to open Google Maps for a venue
  const openInGoogleMaps = (venue: string) => {
    const encodedVenue = encodeURIComponent(venue);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedVenue}`;
    Linking.openURL(mapsUrl).catch(() =>
      Alert.alert('Failed to open Google Maps'),
    );
  };

  // Function to share show details
  const shareShow = () => {
    const message = `Check out ${selectedShow.title} on ${selectedShow.date} at ${selectedShow.time}, ${selectedShow.venue}! It's going to be a great show!`;

    Linking.canOpenURL('whatsapp://send').then(supported => {
      if (supported) {
        return Linking.openURL(
          `whatsapp://send?text=${encodeURIComponent(message)}`,
        );
      } else {
        Alert.alert('Share', message, [
          {text: 'Copy', onPress: () => {}},
          {text: 'Close', style: 'cancel'},
        ]);
      }
    });
  };

  // Function to handle booking navigation based on venue
  const handleBookTickets = () => {
    if (
      selectedShow.venue === 'Academy of Fine Arts2, Cathedral Road Kolkata'
    ) {
      navigation.navigate('AFCSeating');
    } else if (selectedShow.venue === 'Muktangan Rangalaya') {
      navigation.navigate('MuktanganSeating');
    } else {
      Alert.alert('Error', 'Invalid venue. Cannot proceed with booking.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="light-content" /> */}

      {/* Header with Back Button */}
      <View style={styles.headerContainer}>
        <IconButton
          icon="arrow-left"
          size={28 * scaleFactor}
          iconColor="#FFFFFF"
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        />
        <IconButton
          icon="share-variant"
          size={24 * scaleFactor}
          iconColor="#FFFFFF"
          onPress={shareShow}
          style={styles.shareButton}
        />
      </View>

      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        {/* Hero Image Section with Gradient Overlay */}
        <View style={styles.heroContainer}>
          <Image source={selectedShow.image} style={styles.heroImage} />
          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
            style={styles.gradient}
          />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>{selectedShow.title}</Text>
            <View style={styles.genreRow}>
              <Chip style={styles.genreChip} textStyle={styles.chipText}>
                {selectedShow.genre}
              </Chip>
              <Chip style={styles.languageChip} textStyle={styles.chipText}>
                {selectedShow.language}
              </Chip>
            </View>
          </View>
        </View>

        {/* Rating and Book Now Section */}
        <View style={styles.actionSection}>
          <View style={styles.ratingContainer}>
            <IconButton
              icon="star"
              size={24 * scaleFactor}
              iconColor="#FFD700"
            />
            <View>
              <Text style={styles.ratingText}>8.1/10</Text>
              <Text style={styles.voteText}>(2 Votes)</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.rateNowButton}
            onPress={() => Alert.alert('Rate', 'Rate this show')}>
            <Text style={styles.rateNowText}>Rate Now</Text>
          </TouchableOpacity>
        </View>

        <Divider style={styles.divider} />

        {/* Show Details Section */}
        <Card style={styles.detailsCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Show Details</Text>

            <View style={styles.detailItem}>
              <IconButton
                icon="calendar"
                size={24 * scaleFactor}
                iconColor="#F02831"
              />
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailLabel}>Date</Text>
                <Text style={styles.detailText}>{selectedShow.date}</Text>
              </View>
            </View>

            <View style={styles.detailItem}>
              <IconButton
                icon="clock"
                size={24 * scaleFactor}
                iconColor="#F02831"
              />
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailLabel}>Time</Text>
                <Text style={styles.detailText}>{selectedShow.time}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.detailItem}
              onPress={() => openInGoogleMaps(selectedShow.venue)}>
              <IconButton
                icon="map-marker"
                size={24 * scaleFactor}
                iconColor="#F02831"
              />
              <View style={styles.detailTextContainer}>
                <Text style={styles.detailLabel}>Venue</Text>
                <Text style={styles.detailText} numberOfLines={2}>
                  {selectedShow.venue}
                </Text>
                <Text style={styles.getDirections}>Get Directions</Text>
              </View>
            </TouchableOpacity>
          </Card.Content>
        </Card>

        {/* About Section */}
        <Card style={styles.aboutCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.synopsis}>
              {selectedShow.synopsis || 'No synopsis available'}
            </Text>
            <Text style={styles.description}>
              {selectedShow.description || 'No description available'}
            </Text>
          </Card.Content>
        </Card>

        {/* Social Media Section */}
        <Card style={styles.socialCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Follow Us</Text>
            <View style={styles.socialLinks}>
              <IconButton
                icon="google"
                size={30 * scaleFactor}
                onPress={() => Linking.openURL('https://google.com')}
                iconColor="#DB4437"
                style={styles.socialIcon}
              />
              <IconButton
                icon="facebook"
                size={30 * scaleFactor}
                onPress={() => Linking.openURL('https://facebook.com')}
                iconColor="#4267B2"
                style={styles.socialIcon}
              />
              <IconButton
                icon="instagram"
                size={30 * scaleFactor}
                onPress={() => Linking.openURL('https://instagram.com')}
                iconColor="#E1306C"
                style={styles.socialIcon}
              />
              <IconButton
                icon="whatsapp"
                size={30 * scaleFactor}
                onPress={() => Linking.openURL('https://whatsapp.com')}
                iconColor="#25D366"
                style={styles.socialIcon}
              />
            </View>
          </Card.Content>
        </Card>

        {/* Spacing for bottom button */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Book Ticket Button - Fixed at Bottom */}
      <View style={styles.bookButtonContainer}>
        <Button
          mode="contained"
          style={styles.bookButton}
          labelStyle={styles.bookButtonText}
          onPress={handleBookTickets}>
          BOOK TICKETS
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60 * scaleFactor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
    paddingTop: StatusBar.currentHeight,
  },
  backButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginLeft: 10 * scaleFactor,
    marginTop: 10 * scaleFactor,
  },
  shareButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginRight: 10 * scaleFactor,
    marginTop: 10 * scaleFactor,
  },
  heroContainer: {
    position: 'relative',
    height: height * 0.5,
    width: '100%',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
  heroContent: {
    position: 'absolute',
    bottom: 20 * scaleFactor,
    left: 16 * scaleFactor,
    right: 16 * scaleFactor,
  },
  heroTitle: {
    fontSize: 28 * scaleFactor,
    fontFamily: 'Mukta-Bold',
    color: 'white',
    marginBottom: 10 * scaleFactor,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  genreRow: {
    flexDirection: 'row',
    marginBottom: 10 * scaleFactor,
  },
  genreChip: {
    backgroundColor: 'rgba(240, 40, 49, 0.8)',
    marginRight: 10 * scaleFactor,
  },
  languageChip: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  chipText: {
    color: 'white',
    fontFamily: 'Mukta-Medium',
  },
  actionSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16 * scaleFactor,
    paddingVertical: 10 * scaleFactor,
    backgroundColor: 'white',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 18 * scaleFactor,
    fontFamily: 'Mukta-Bold',
    color: '#333',
  },
  voteText: {
    fontSize: 12 * scaleFactor,
    fontFamily: 'Mukta-Regular',
    color: '#666',
  },
  rateNowButton: {
    backgroundColor: '#F02831',
    paddingHorizontal: 16 * scaleFactor,
    paddingVertical: 8 * scaleFactor,
    borderRadius: 20 * scaleFactor,
  },
  rateNowText: {
    color: 'white',
    fontFamily: 'Mukta-Medium',
    fontSize: 14 * scaleFactor,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  detailsCard: {
    marginHorizontal: 16 * scaleFactor,
    marginTop: 16 * scaleFactor,
    borderRadius: 12 * scaleFactor,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20 * scaleFactor,
    fontFamily: 'Mukta-Bold',
    color: '#333',
    marginBottom: 16 * scaleFactor,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16 * scaleFactor,
  },
  detailTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  detailLabel: {
    fontSize: 14 * scaleFactor,
    fontFamily: 'Mukta-Regular',
    color: '#666',
  },
  detailText: {
    fontSize: 16 * scaleFactor,
    fontFamily: 'Mukta-Medium',
    color: '#333',
    flexShrink: 1,
  },
  getDirections: {
    fontSize: 14 * scaleFactor,
    fontFamily: 'Mukta-Medium',
    color: '#F02831',
    marginTop: 4 * scaleFactor,
  },
  aboutCard: {
    marginHorizontal: 16 * scaleFactor,
    marginTop: 16 * scaleFactor,
    borderRadius: 12 * scaleFactor,
    elevation: 2,
  },
  synopsis: {
    fontSize: 18 * scaleFactor,
    fontFamily: 'Mukta-Medium',
    color: '#333',
    marginBottom: 12 * scaleFactor,
  },
  description: {
    fontSize: 16 * scaleFactor,
    fontFamily: 'Mukta-Regular',
    color: '#555',
    lineHeight: 24 * scaleFactor,
  },
  socialCard: {
    marginHorizontal: 16 * scaleFactor,
    marginTop: 16 * scaleFactor,
    borderRadius: 12 * scaleFactor,
    elevation: 2,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8 * scaleFactor,
  },
  socialIcon: {
    backgroundColor: '#f9f9f9',
  },
  bottomPadding: {
    height: 80 * scaleFactor,
  },
  bookButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingHorizontal: 16 * scaleFactor,
    paddingVertical: 12 * scaleFactor,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bookButton: {
    backgroundColor: '#F02831',
    borderRadius: 8 * scaleFactor,
    paddingVertical: 6 * scaleFactor,
  },
  bookButtonText: {
    fontSize: 16 * scaleFactor,
    fontFamily: 'Mukta-Bold',
    letterSpacing: 1,
  },
});

export default PlayDetails;
