import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {images} from '../../../assets/images';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';

const {width} = Dimensions.get('window');

interface Show {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  genre: string;
  language: string;
  image: any;
  isSoldOut?: boolean;
}

const UpcomingPlaysPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const flatListRef = useRef<FlatList>(null);

  const shows: Show[] = [
    {
      id: 1,
      title: 'ছোট গল্প',
      date: 'TBD',
      time: 'TBD',
      venue: 'Academy of Fine Arts2, Cathedral Road Kolkata',
      genre: 'Drama',
      language: 'Bengali',
      image: images.sangharam8,
    },
    {
      id: 2,
      title: 'গৌরের কবচ',
      date: '18 Jan, 2025',
      time: '6:30 PM',
      venue: 'Academy of Fine Arts2, Cathedral Road Kolkata',
      genre: 'Drama',
      language: 'Bengali',
      image: images.banner9,
    },
    {
      id: 3,
      title: 'পূর্বরঙ্গ - Day1 Shows',
      date: '18 Jan, 2025',
      time: '5:30 PM - 9:00 PM',
      venue: 'Muktangan Rangalaya',
      genre: 'Drama',
      language: 'Bengali',
      image: images.banner1,
      isSoldOut: true,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header with title and VIEW ALL button */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>UPCOMING PLAYS</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Plays')}>
          <Text style={styles.viewAllText}>VIEW ALL</Text>
        </TouchableOpacity>
      </View>

      {/* Carousel */}
      <View style={styles.carouselContainer}>
        <FlatList
          ref={flatListRef}
          data={shows}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.card} disabled={item.isSoldOut}>
              <Image source={item.image} style={styles.cardImage} />

              {/* "Sold Out" Overlay */}
              {item.isSoldOut && <View style={styles.soldOutOverlay} />}

              {/* Show Details (Bottom-Centered Text) */}
              <View style={styles.cardDetails}>
                <Text style={styles.showTitle}>{item.title}</Text>
                <Text style={styles.showDate}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default UpcomingPlaysPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2D42',
    paddingVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: 'Aclonica-Regular',
    color: 'white',
  },
  carouselContainer: {
    width: '100%',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  card: {
    width: width * 0.9,
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
  },
  soldOutOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    borderRadius: 15,
  },
  cardDetails: {
    position: 'absolute',
    bottom: 0, // Align at the bottom
    left: 0,
    right: 0,
    alignItems: 'center', // Center text horizontally
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Background for readability
    paddingVertical: 12,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  showTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2B2D42',
    textAlign: 'center',
  },
  showDate: {
    fontSize: 14,
    color: '#2B2D42',
    textAlign: 'center',
  },
  viewAllText: {
    fontSize: 16,
    fontFamily: 'Aclonica-Regular',
    color: 'white', // Changed to match the header color
    // marginHorizontal: 24,
  },
});
