import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../../assets/images';
import {Icon, IconButton} from 'react-native-paper';
import BottomTabBar from '../../navigation/BottomTabBar';

const {width} = Dimensions.get('window');
const scaleFactor = width / 375;

interface Show {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  genre: string;
  language: string;
  image: any; // Use 'any' for image source in React Native
}

const SwapnilInfo = () => {
  const navigation = useNavigation();

  const galleryImages = [images.Swapnil1, images.Swapnil2];
  const shows = [
    {id: 1, image: images.SwapnilShow1},
    {id: 2, image: images.SwapnilShow2},
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
        {/* Logo and Title Section */}
        <View style={styles.logoContainer}>
          <Image
            source={images.swapnil}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>
            NARKELDANGA SWAPNIL SANSKRITIK SANSATHA
          </Text>
        </View>

        {/* About Section */}
        <View style={styles.aboutContainer}>
          <Text style={styles.sectionTitle}>About Narkeldanga Swapnil</Text>
          <View style={styles.aboutContent}>
            <Text style={styles.paragraph}>
              নারকেলডাঙ্গা স্বপ্নিল সাংস্কৃতিক সংস্থা উত্তর কলকাতার একটি
              প্রতিশ্রুতিশীল নাট্যগোষ্ঠী। এই সংস্থাটি স্থানীয় সাংস্কৃতিক ঐতিহ্য
              এবং আধুনিক নাট্যচর্চার সমন্বয়ে একটি অনন্য ধারা সৃষ্টি করেছে।
              বাংলা রঙ্গমঞ্চে নতুন দিগন্ত উন্মোচনের লক্ষ্যে তারা নিরলসভাবে কাজ
              করে চলেছে।
            </Text>
            <Text style={styles.paragraph}>
              সংস্থাটি বিভিন্ন ধরনের নাটক মঞ্চস্থ করে থাকে, যার মধ্যে রয়েছে
              সামাজিক নাটক, ঐতিহাসিক নাটক এবং সমসাময়িক বিষয়ভিত্তিক নাটক।
              প্রতিটি প্রযোজনায় তারা সমাজের বিভিন্ন দিক তুলে ধরার চেষ্টা করে,
              যা দর্শকদের ভাবতে বাধ্য করে এবং সামাজিক পরিবর্তনের দিকে এগিয়ে
              নিয়ে যায়।
            </Text>
            <Text style={styles.paragraph}>
              নারকেলডাঙ্গা স্বপ্নিল শুধু নাটক মঞ্চায়নই নয়, নাট্যশিল্পের প্রতি
              আগ্রহী তরুণদের প্রশিক্ষণ দিয়ে থাকে। তাদের কর্মশালা এবং প্রশিক্ষণ
              কার্যক্রমের মাধ্যমে নতুন প্রজন্মের মধ্যে থিয়েটারের প্রতি আগ্রহ
              বৃদ্ধি পাচ্ছে। এছাড়াও সংস্থাটি বিভিন্ন সামাজিক কর্মকাণ্ডে সক্রিয়
              অংশগ্রহণ করে থাকে।
            </Text>
            <Text style={styles.paragraph}>
              এই নাট্যগোষ্ঠীর বিশেষত্ব হল এর সামাজিক দায়বদ্ধতা। প্রতিটি নাটকের
              মাধ্যমে তারা সমাজের বিভিন্ন সমস্যা তুলে ধরে এবং সেগুলির সমাধানের
              দিকে ইঙ্গিত করে। তাদের প্রযোজনাগুলি শুধু বিনোদনের জন্য নয়,
              সামাজিক সচেতনতা বৃদ্ধির একটি মাধ্যম হিসেবেও কাজ করে।
            </Text>
          </View>
        </View>

        {/* Ongoing Shows Section */}
        <View style={styles.showsContainer}>
          <Text style={styles.sectionTitle}>Ongoing Shows</Text>
          <View style={styles.showsGrid}>
            {shows.map(show => (
              <TouchableOpacity
                key={show.id}
                style={styles.showCard}
                // onPress={() => handleShowSelect(show)}
              >
                <Image source={show.image} style={styles.showImage} />
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.bookButton}
                    // onPress={() => handleShowSelect(show)}
                  >
                    <Text style={styles.bookButtonText}>Book Ticket</Text>
                    <Icon source="arrow-down" size={16} color="#fff" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Gallery Section */}
        <View style={styles.galleryContainer}>
          <Text style={styles.sectionTitle}>Performance Gallery</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.galleryScrollContainer}>
            {galleryImages.map((image, index) => (
              <View key={index} style={styles.galleryImageContainer}>
                <Image source={image} style={styles.galleryImage} />
              </View>
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
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20 * scaleFactor,
  },
  logo: {
    width: 120 * scaleFactor,
    height: 120 * scaleFactor,
  },
  title: {
    fontSize: 28 * scaleFactor,
    fontFamily: 'Mukta-Bold',
    color: '#2B2D42',
    marginTop: 10 * scaleFactor,
  },
  aboutContainer: {
    backgroundColor: '#D9D9D9',
    padding: 16 * scaleFactor,
    borderRadius: 12 * scaleFactor,
    marginHorizontal: 16 * scaleFactor,
    marginBottom: 20 * scaleFactor,
  },
  sectionTitle: {
    fontSize: 24 * scaleFactor,
    fontFamily: 'Mukta-SemiBold',
    color: '#2B2D42',
    marginBottom: 12 * scaleFactor,
  },
  aboutContent: {
    gap: 12 * scaleFactor,
  },
  paragraph: {
    fontSize: 14 * scaleFactor,
    fontFamily: 'Mukta-Regular',
    color: '#333',
    lineHeight: 20 * scaleFactor,
  },
  showsContainer: {
    marginHorizontal: 16 * scaleFactor,
    marginBottom: 20 * scaleFactor,
  },
  showsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12 * scaleFactor,
  },
  showCard: {
    width: width * 0.48 - 16 * scaleFactor,
    borderRadius: 12 * scaleFactor,
    overflow: 'hidden',
    backgroundColor: '#F02831',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  showImage: {
    width: '100%',
    height: 200 * scaleFactor,
  },
  buttonContainer: {
    padding: 2 * scaleFactor,
    alignItems: 'center',
  },
  bookButton: {
    backgroundColor: '#F02831',
    paddingVertical: 8 * scaleFactor,
    paddingHorizontal: 16 * scaleFactor,
    borderRadius: 8 * scaleFactor,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8 * scaleFactor,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 14 * scaleFactor,
    fontFamily: 'Mukta-SemiBold',
  },
  galleryContainer: {
    marginHorizontal: 16 * scaleFactor,
    marginBottom: 20 * scaleFactor,
  },
  galleryScrollContainer: {
    flexDirection: 'row',
    gap: 12 * scaleFactor,
  },
  galleryImageContainer: {
    width: width - 32 * scaleFactor, // Full width minus horizontal padding
    height: 200 * scaleFactor,
    borderRadius: 12 * scaleFactor,
    overflow: 'hidden',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
  },
});

export default SwapnilInfo;
