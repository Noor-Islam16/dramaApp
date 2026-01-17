import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Card, IconButton} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native'; // Navigation hook
import {images} from '../../assets/images';
import {RootStackParamList} from '../../App';
import BottomTabBar from '../navigation/BottomTabBar';

const {width} = Dimensions.get('window');
const scaleFactor = width / 375;

const groups = [
  {
    id: 1,
    name: 'পূর্ববঙ্গ',
    image: images.purborongo, // Adjust the path as needed
    slug: 'Purborongo',
  },
  {
    id: 2,
    name: 'সংস্তব',
    image: images.samstab, // Adjust the path as needed
    slug: 'Samstab',
  },
  {
    id: 3,
    name: 'হাতিবাগান সংগ্রাম',
    image: images.sanghram, // Adjust the path as needed
    slug: 'Sanghram',
  },
  {
    id: 4,
    name: 'নারকেলডাঙ্গা স্বপ্নিল সাংস্কৃতিক সংস্থা',
    image: images.swapnil, // Adjust the path as needed
    slug: 'Swapnil',
  },
];

const TheaterHalls = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Access navigation

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
          <Text style={styles.headerText}>Groups</Text>
        </View>

        {/* Cards Grid */}
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {groups.map(group => (
            <TouchableOpacity
              key={group.id}
              onPress={() => navigation.navigate(group.slug as any)}>
              <Card style={styles.card}>
                <Card.Cover source={group.image} style={styles.cardImage} />
                <Card.Content style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{group.name}</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
  cardsContainer: {
    padding: 8 * scaleFactor,
  },
  card: {
    width: width - 16 * scaleFactor, // Full width minus padding
    marginBottom: 16 * scaleFactor,
    overflow: 'hidden',
    backgroundColor: '#F02831',
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: {
    height: 200 * scaleFactor, // Fixed height for the image
  },
  cardContent: {
    padding: 12 * scaleFactor,
    height: 60 * scaleFactor, // Fixed height for content
    justifyContent: 'center', // Center text vertically
  },
  cardTitle: {
    fontSize: 18 * scaleFactor,
    fontFamily: 'Mukta-Bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default TheaterHalls;
