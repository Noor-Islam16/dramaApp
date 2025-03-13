import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Switch,
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

const SangharamInfo = () => {
  const navigation = useNavigation();
  const [language, setLanguage] = useState('bengali'); // Default language is Bengali

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(language === 'bengali' ? 'english' : 'bengali');
  };

  // Images array
  const galleryImages = [
    images.Sangharam1,
    images.Sangharam3,
    images.Sangharam4,
    images.Sangharam5,
    images.Sangharam6,
    images.Sangharam7,
    images.Sangharam8,
    images.Sangharam9,
  ];

  const shows: Show[] = [
    {
      id: 1,
      title: 'ছোট গল্প',
      date: 'TBD',
      time: 'TBD',
      venue: 'Academy of Fine Arts2, Cathedral Road Kolkata',
      genre: 'Drama',
      language: 'Bengali',
      image: images.SangharamShow1,
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
            source={images.sanghram}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>HATIBAGAN SANGHARAM</Text>
        </View>

        {/* About Section */}
        <View style={styles.aboutContainer}>
          <View style={styles.aboutHeader}>
            <Text style={styles.sectionTitle}>About Hatibagan Sangharam</Text>

            {/* Language Toggle */}
            <View style={styles.languageToggleContainer}>
              <Text
                style={[
                  styles.languageLabel,
                  language === 'bengali'
                    ? styles.activeLanguage
                    : styles.inactiveLanguage,
                ]}>
                বাংলা
              </Text>
              <Switch
                value={language === 'english'}
                onValueChange={toggleLanguage}
                trackColor={{false: '#D1D1D1', true: '#D1D1D1'}}
                thumbColor={language === 'english' ? '#2B2D42' : '#2B2D42'}
                ios_backgroundColor="#D1D1D1"
                style={styles.switch}
              />
              <Text
                style={[
                  styles.languageLabel,
                  language === 'english'
                    ? styles.activeLanguage
                    : styles.inactiveLanguage,
                ]}>
                English
              </Text>
            </View>
          </View>

          {/* Conditional rendering based on selected language */}
          {language === 'bengali' ? (
            <View style={styles.languageSection}>
              <Text style={styles.paragraph}>
                সঙ্ঘারাম গড়ে উঠেছিল ২০১১ সালে। আমরা ঠিক করেছিলাম নাটকের নতুন
                আরেকটা দল নয়, বরং এমন একটা মিলনক্ষেত্র গড়ে তোলার যেখানে সবাই
                সদস্য হয়ে না থেকে, বন্ধু হিসেবেই একসাথে কাজ করবো। অর্থনৈতিক
                সীমাবদ্ধতা সেই শুরু থেকেই রয়েছে, তার মধ্যেই আমরা কিছু মাঝারি বা
                বড় মাপের নাটক মঞ্চস্থ করেছি।
              </Text>
              <Text style={styles.paragraph}>
                আমাদের মঞ্চস্থ নাটকগুলির মধ্যে, "কতটা পথ পেরোলে"
                (নির্দেশনা-তথাগত চৌধুরী)," গুরু" (নির্দেশনা-অনির্বাণ
                ভট্টাচার্য), "তিন পয়সার পালা" (নির্দেশনা-তথাগত চৌধুরী),"
                চৌমাথা" (নির্দেশনা-অনির্বাণ ভট্টাচার্য), "উদরনীতি"
                (নির্দেশনা-অনির্বাণ ভট্টাচার্য)," হস্তগত" (নির্দেশনা-মধুরিমা
                গোস্বামী) "পন্তু লাহা ২.০" (নির্দেশনা-অনির্বাণ ভট্টাচার্য্য),
                "বেরোবার পথ নেই" (নির্দেশনা-অনির্বাণ ভট্টাচার্য্য), "ছোটগল্প"
                (নির্দেশনা-তথাগত চৌধুরী), "একটা ডিব্লু ডিলু টিমটু টিলু ডুব"
                (নির্দেশনা-অর্পণ গড়াই)।
              </Text>
              <Text style={styles.paragraph}>
                তবে সঙ্ঘারামের এই মুক্ত পরিসর নিয়েও প্রশ্ন উঠছে নিজেদের মধ্যে।
                একটা নির্দিষ্ট কাঠামো ও কিছু দলীয় নির্দেশ মেনে চলার
                প্রয়োজনীয়তা বেশ ভাল ভাবেই অনুভূত হচ্ছে। যাই হোক, সঙ্ঘারাম
                যতদিন থাকবে, রক্ত-মাংসে, ঘামে-শ্রমে, বন্ধুত্ব-বিবাদে, এবং
                সর্বোপরি ভাল নাটক করতে পারার তীব্র বাসনা নিয়েই থাকবে।
              </Text>
            </View>
          ) : (
            <View style={styles.languageSection}>
              <Text style={styles.paragraph}>
                Sangharam was established in the year 2011. We decided just not
                to form another theatre group, but to celebrate theatre through
                our friendship. We have faced financial crunches since our
                inception, still we have managed to stage a few productions.
              </Text>
              <Text style={styles.paragraph}>
                Some of our productions worth mentioning are - 'Kotota Poth
                Perole' (dir. Tathagata Chaudhuri), 'Guru' (dir. Anirban
                Bhattacharya), 'Tin Poishar Pala' (dir. Tathagata Chaudhuri),
                'Choumatha' (dir. Anirban Bhattacharya), 'Udorneeti' (dir.
                Anirban Bhattacharya), 'Hostogoto' (dir. Madhurima Goswami),
                'Pontu Laha 2.0' (dir. Anirban Bhattacharya), 'Berobar Poth Nei'
                (dir. Anirban Bhattacharya), 'Chhoto Golpo' (dir. Tathagata
                Chaudhuri), 'Ekta Diblu Dilu Timtu Tilu Dub' (dir. Arpan Garai),
                'Last Local' (dir. Tathagata Chaudhuri) and 'Proshakha' (dir.
                Madhurima Goswami).
              </Text>
              <Text style={styles.paragraph}>
                Now, in these tumultuous times, the need of regimentation is
                being felt. But Sangharam will continue to strive for excellence
                and celebrate theatre through friendship, love and diligence in
                the years to come.
              </Text>
            </View>
          )}
        </View>

        {/* Ongoing Shows Section */}
        <View style={styles.showsContainer}>
          <Text style={styles.sectionTitle}>Ongoing Shows</Text>
          <View style={styles.showsGrid}>
            {shows.map(show => (
              <TouchableOpacity
                key={show.id}
                style={styles.showCard}
                //   onPress={() => handleShowSelect(show)}
              >
                <Image source={show.image} style={styles.showImage} />
                <TouchableOpacity
                  style={styles.bookButton}
                  // onPress={() => handleShowSelect(show)}
                >
                  <Text style={styles.bookButtonText}>Book Ticket</Text>
                  <Icon source="arrow-down" size={16} color="#fff" />
                </TouchableOpacity>
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
  aboutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16 * scaleFactor,
  },
  sectionTitle: {
    fontSize: 24 * scaleFactor,
    fontFamily: 'Mukta-SemiBold',
    color: '#2B2D42',
    flex: 1,
  },
  languageToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageLabel: {
    fontSize: 14 * scaleFactor,
    fontFamily: 'Mukta-Medium',
  },
  activeLanguage: {
    color: '#2B2D42',
    fontFamily: 'Mukta-Bold',
  },
  inactiveLanguage: {
    color: '#777777',
  },
  switch: {
    marginHorizontal: 8 * scaleFactor,
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
  languageSection: {
    marginBottom: 20 * scaleFactor,
  },
  languageTitle: {
    fontSize: 20 * scaleFactor,
    fontFamily: 'Mukta-SemiBold',
    color: '#2B2D42',
    marginBottom: 8 * scaleFactor,
  },
  paragraph: {
    fontSize: 14 * scaleFactor,
    fontFamily: 'Mukta-Regular',
    color: '#333',
    lineHeight: 20 * scaleFactor,
    marginBottom: 12 * scaleFactor,
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
    width: width - 32 * scaleFactor,
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
  bookButton: {
    backgroundColor: '#F02831',
    paddingVertical: 8 * scaleFactor,
    paddingHorizontal: 16 * scaleFactor,
    borderRadius: 8 * scaleFactor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8 * scaleFactor,
    margin: 12 * scaleFactor,
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
    width: width - 32 * scaleFactor,
    height: 200 * scaleFactor,
    borderRadius: 12 * scaleFactor,
    overflow: 'hidden',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
  },
});

export default SangharamInfo;
