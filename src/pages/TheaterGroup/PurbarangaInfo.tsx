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

const PurbarangaInfo = () => {
  const navigation = useNavigation();

  const galleryImages = [
    images.Purbaranga3,
    images.Purbaranga4,
    images.Purbaranga5,
    images.Purbaranga6,
    images.Purbaranga7,
    images.Purbaranga8,
  ];

  const shows: Show[] = [
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
    {
      id: 8,
      title: 'পূর্বরঙ্গ - Day8 Shows',
      date: '25 Jan, 2025',
      time: '6:45 PM - 9:00 PM',
      venue: 'Academy of Fine Arts2, Cathedral Road Kolkata',
      genre: 'Drama',
      language: 'Bengali',
      image: images.Banner8,
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
        {/* Logo and Title Section */}
        <View style={styles.logoContainer}>
          <Image
            source={images.purborongo}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>PURBARANGA</Text>
        </View>

        {/* About Section */}
        <View style={styles.aboutContainer}>
          <Text style={styles.sectionTitle}>About Purbaranga</Text>
          <View style={styles.aboutContent}>
            <Text style={styles.paragraph}>
              পূর্বরঙ্গ একটি প্রগতিশীল নাট্যদল যা বাংলা থিয়েটারের ক্ষেত্রে নতুন
              দিগন্ত উন্মোচন করে চলেছে। দলটি পশ্চিমবঙ্গের নাট্যাঙ্গনে একটি বিশেষ
              স্থান করে নিয়েছে তাদের অভিনব উপস্থাপনা এবং বিষয়বস্তুর
              বৈচিত্র্যের জন্য। সমকালীন সামাজিক বিষয়গুলিকে নিজস্ব দৃষ্টিভঙ্গি
              থেকে তুলে ধরার চেষ্টা করে পূর্বরঙ্গ।
            </Text>
            <Text style={styles.paragraph}>
              প্রতিটি নাটক নির্বাচনে পূর্বরঙ্গ অত্যন্ত সচেতন। তারা এমন সব নাটক
              বেছে নেয় যা সমাজের বিভিন্ন স্তরের মানুষের কাছে পৌঁছে যায়। তাদের
              প্রযোজনাগুলি সামাজিক-রাজনৈতিক বার্তা বহন করে, একই সঙ্গে বজায় রাখে
              শিল্পগত মান। পূর্বরঙ্গের নাটকগুলি দর্শকদের চিন্তার জগতে নাড়া দেয়
              এবং সমাজ পরিবর্তনের দিকে এগিয়ে নিয়ে যায়।
            </Text>
            <Text style={styles.paragraph}>
              দলটি নিয়মিত নতুন প্রতিভা অন্বেষণ করে এবং তাদের উৎসাহিত করে।
              পূর্বরঙ্গের কর্মশালা ও প্রশিক্ষণ কার্যক্রমগুলি নবীন নাট্যকর্মীদের
              জন্য একটি শক্তিশালী ভিত্তি তৈরি করে। তারা বিশ্বাস করে যে থিয়েটার
              শুধু বিনোদনের মাধ্যম নয়, এটি সামাজিক পরিবর্তনের একটি শক্তিশালী
              হাতিয়ার।
            </Text>
            <Text style={styles.paragraph}>
              পূর্বরঙ্গের যাত্রা শুধু মঞ্চ নাটকের মধ্যেই সীমাবদ্ধ নয়। তারা
              বিভিন্ন সামাজিক আন্দোলনে সক্রিয় অংশগ্রহণ করে এবং সাংস্কৃতিক
              কর্মকাণ্ডের মাধ্যমে সমাজের উন্নয়নে অবদান রাখে। তাদের প্রতিটি
              প্রযোজনা সমাজের প্রতি দায়বদ্ধতার প্রতিফলন।
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

export default PurbarangaInfo;
