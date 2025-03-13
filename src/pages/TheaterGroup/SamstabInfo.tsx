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

const SamstabInfo = () => {
  const navigation = useNavigation();

  const galleryImages = [images.Samstab1, images.Samstab2];

  // Complete show data
  const shows: Show[] = [
    {
      id: 1,
      title: 'গৌরের কবচ',
      date: '18 Feb, 2025',
      time: '6:30 PM',
      venue: 'Academy of Fine Arts2, Cathedral Road Kolkata',
      genre: 'Drama',
      language: 'Bengali',
      image: images.SamstabShow2,
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
            source={images.samstab}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>SAMSTAB</Text>
        </View>

        {/* About Section */}
        <View style={styles.aboutContainer}>
          <Text style={styles.sectionTitle}>About Samstab</Text>
          <View style={styles.aboutContent}>
            <Text style={styles.paragraph}>
              সংস্তব একটি অগ্রণী থিয়েটার গ্রুপ যা কলকাতা ভিত্তিক, বাংলা
              নাট্যকলার সীমানা প্রসারিত করতে নিবেদিত। বাংলা থিয়েটারের ঐতিহ্য
              সংরক্ষণ এবং নতুনত্ব আনয়নের লক্ষ্য নিয়ে প্রতিষ্ঠিত, এই গ্রুপটি
              চিরায়ত কাহিনীগুলিকে সমসাময়িক প্রাসঙ্গিকতা প্রদানে গুরুত্বপূর্ণ
              ভূমিকা পালন করে আসছে। বেশ কয়েক বছরের সমৃদ্ধ ইতিহাস নিয়ে, সমষ্টব
              বাংলার জীবন্ত নাট্য পরিমণ্ডলের একটি মূল স্তম্ভ হিসেবে নিজেকে
              প্রতিষ্ঠিত করেছে।
            </Text>
            <Text style={styles.paragraph}>
              এই গ্রুপটি বাংলা ক্লাসিকাল সাহিত্য এবং সমসাময়িক সামাজিক
              বিষয়গুলিকে শক্তিশালী নাট্য প্রযোজনায় রূপান্তরিত করতে বিশেষজ্ঞ।
              তাদের অনন্য পদ্ধতি ঐতিহ্যবাহী নাট্য উপাদান এবং আধুনিক গল্প বলার
              কৌশলগুলিকে সংমিশ্রিত করে, যা সব বয়সের দর্শকদের সাথে সংযোগ স্থাপন
              করে এমন প্রযোজনা তৈরি করে। তাদের প্রযোজনার মাধ্যমে, সংস্তব বাংলা
              থিয়েটারের শিল্পগত সততা এবং সাংস্কৃতিক সমৃদ্ধি বজায় রেখে জরুরি
              সামাজিক বিষয়গুলি নিয়ে আলোচনা করে।
            </Text>
            <Text style={styles.paragraph}>
              সংস্তব-এর প্রতিটি প্রযোজনা নাট্যকলায় তাদের শ্রেষ্ঠত্বের প্রতি
              অঙ্গীকারের প্রমাণ। গ্রুপের রেপার্টরিতে রয়েছে ক্লাসিক বাংলা
              সাহিত্যের অভিযোজন, সমসাময়িক বিষয় নিয়ে মৌলিক প্রযোজনা, এবং
              পরম্পরাগত থিয়েটারের সীমানা অতিক্রম করে যাওয়া পরীক্ষামূলক কাজ।
              তাদের পরিবেশনাগুলি উদ্ভাবনী মঞ্চায়ন, শক্তিশালী আখ্যান এবং
              আকর্ষণীয় অভিনয় দ্বারা চিহ্নিত যা দর্শকদের মনে স্থায়ী ছাপ রেখে
              যায়।
            </Text>
            <Text style={styles.paragraph}>
              যা সংস্তব-কে আলাদা করে তা হল তরুণ প্রতিভা লালন এবং নাট্য শিক্ষা
              প্রচারে তাদের নিবেদন। কর্মশালা, প্রশিক্ষণ কর্মসূচি এবং সহযোগী
              প্রকল্পের মাধ্যমে তারা ভবিষ্যত প্রজন্মের জন্য এই শিল্পরূপটি
              সংরক্ষণ এবং বিকশিত করতে সক্রিয়ভাবে কাজ করে। তাদের প্রতিশ্রুতি
              মঞ্চের বাইরেও প্রসারিত, যেখানে তারা সমসাময়িক সমাজে থিয়েটারকে আরও
              সুলভ এবং প্রাসঙ্গিক করে তোলার জন্য সম্প্রদায়ের সাথে যুক্ত হয়।
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

export default SamstabInfo;
