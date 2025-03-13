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
    name: 'মুক্তাঙ্গন রঙ্গালয়',
    image: images.muktangan, // Adjust the path as needed
    slug: 'Muktangan',
  },
  {
    id: 2,
    name: 'একাডেমি অফ ফাইন আর্টস',
    image: images.finearts, // Adjust the path as needed
    slug: 'Academy',
  },
  {
    id: 3,
    name: 'জি ডি বিড়লা সভাঘর',
    image: images.birla, // Adjust the path as needed
    slug: 'Birla',
  },
  {
    id: 4,
    name: 'রবীন্দ্র সদন',
    image: images.sadan, // Adjust the path as needed
    slug: 'Sadan',
  },
];

const TheaterHalls = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
          <Text style={styles.headerText}>Halls</Text>
        </View>

        {/* Cards Grid */}
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {groups.map(group => (
            <TouchableOpacity
              key={group.id}
              onPress={() =>
                navigation.navigate(group.slug as keyof RootStackParamList)
              }>
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
    backgroundColor: '#F8C341',
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
    color: '#333',
    textAlign: 'center',
  },
});

export default TheaterHalls;
