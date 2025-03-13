import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
  Alert,
  StatusBar,
} from 'react-native';
import {Card, Button, Icon, IconButton} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import BottomTabBar from '../../navigation/BottomTabBar';
import {RootState} from '../../redux/store';
import {RootStackParamList} from '../../../App';
import {setSelectedShow} from '../../redux/playsSlice'; // Import the action

const {width} = Dimensions.get('window');
const scaleFactor = width / 375;

const UpcomingPlays = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch(); // Add dispatch
  const plays = useSelector((state: RootState) => state.plays.plays);

  interface Play {
    id: number;
    title: string;
    date: string;
    time: string;
    venue: string;
    genre: string;
    language: string;
    image: any; // Use require for local images
    type: string;
  }

  const handlePlaySelection = (playId: number) => {
    // Dispatch action to update selected show in Redux
    dispatch(setSelectedShow(playId));
    // Navigate to PlayDetails screen
    navigation.navigate('PlayDetails');
  };

  const handleBooking = (play: Play) => {
    const message = `🎭 *Booking Request* 🎭
    
🎭 *Show Name:* ${play.title}
📅 *Date:* ${play.date}
⏰ *Time:* ${play.time}
📍 *Venue:* ${play.venue}

📝 Number of Tickets (wanted to book): `;

    const phoneNumber = '+919836365640'; // Replace with the desired WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    Linking.openURL(url).catch(() => {
      Alert.alert('WhatsApp is not installed or an error occurred.');
    });
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <IconButton
            icon="arrow-left"
            size={24 * scaleFactor}
            iconColor="#000"
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          />
          <Text style={styles.headerText}>Upcoming Plays</Text>
        </View>

        {/* Horizontal Scrollable Cards */}
        <FlatList
          data={plays}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Card style={styles.card}>
              <Card.Cover source={item.image} style={styles.cardImage} />
              <Card.Content style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>

                <View style={styles.cardDetail}>
                  <Icon
                    source="calendar"
                    size={16 * scaleFactor}
                    color="#666"
                  />
                  <Text style={styles.cardText}>{item.date}</Text>
                </View>

                <View style={styles.cardDetail}>
                  <Icon source="clock" size={16 * scaleFactor} color="#666" />
                  <Text style={styles.cardText}>{item.time}</Text>
                </View>

                <View style={styles.cardDetail}>
                  <Icon
                    source="map-marker"
                    size={16 * scaleFactor}
                    color="#666"
                  />
                  <Text style={styles.cardText}>{item.venue}</Text>
                </View>

                <View style={styles.cardDetail}>
                  <Icon
                    source="drama-masks"
                    size={16 * scaleFactor}
                    color="#666"
                  />
                  <Text style={styles.cardText}>{item.genre}</Text>
                </View>

                <Button
                  mode="contained"
                  style={styles.bookButton}
                  labelStyle={styles.bookButtonText}
                  onPress={() => handlePlaySelection(item.id)}>
                  BOOK NOW
                </Button>
              </Card.Content>
            </Card>
          )}
        />
      </View>
      <BottomTabBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20 * scaleFactor,
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 10 * scaleFactor,
  },
  headerText: {
    fontSize: 24 * scaleFactor,
    color: '#000',
    fontFamily: 'Mukta-Bold',
  },
  card: {
    height: '95%',
    width: width - 32 * scaleFactor, // Full width minus padding
    marginHorizontal: 16 * scaleFactor, // Add horizontal margin
    marginBottom: 16 * scaleFactor,
    borderRadius: 12 * scaleFactor,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: {
    height: '60%',
    borderTopLeftRadius: 12 * scaleFactor,
    borderTopRightRadius: 12 * scaleFactor,
  },
  cardContent: {
    padding: 12 * scaleFactor,
  },
  cardTitle: {
    fontSize: 18 * scaleFactor,
    fontFamily: 'Mukta-Bold',
    color: '#333',
    marginBottom: 4 * scaleFactor,
  },
  cardDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2 * scaleFactor,
  },
  cardText: {
    fontSize: 14 * scaleFactor,
    color: '#666',
    marginLeft: 4 * scaleFactor,
    fontFamily: 'Mukta-Regular',
    marginBottom: 4 * scaleFactor,
  },
  bookButton: {
    marginTop: 12 * scaleFactor,
    backgroundColor: '#F02831',
    borderRadius: 8 * scaleFactor,
    elevation: 3, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14 * scaleFactor,
  },
});

export default UpcomingPlays;
