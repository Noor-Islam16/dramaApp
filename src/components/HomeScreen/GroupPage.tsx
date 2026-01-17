import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import {IconButton} from 'react-native-paper'; // Using Paper Icons
import {images} from '../../../assets/images';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';
interface Group {
  name: string;
  image: any;
  slug: string;
}

const {width, height} = Dimensions.get('window');

const GroupPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const flatListRef = useRef<FlatList>(null);

  const initialGroups: Group[] = [
    {name: 'পূর্ববঙ্গ', image: images.purborongo, slug: 'Purborongo'},
    {name: 'সংস্তব', image: images.samstab, slug: 'Samstab'},
    {name: 'হাতিবাগান সংগ্রাম', image: images.sanghram, slug: 'Sanghram'},
    {
      name: 'নারকেলডাঙ্গা স্বপ্নিল সাংস্কৃতিক সংস্থা',
      image: images.swapnil,
      slug: 'Swapnil',
    },
  ];

  const groups = [...initialGroups, ...initialGroups];

  const scrollToPrev = () => {
    flatListRef.current?.scrollToOffset({
      offset: Math.max(0, currentOffset - width * 0.8),
      animated: true,
    });
  };

  const scrollToNext = () => {
    flatListRef.current?.scrollToOffset({
      offset: currentOffset + width * 0.8,
      animated: true,
    });
  };

  let currentOffset = 0;

  return (
    <View style={styles.container}>
      {/* Header with "VIEW ALL" text */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>GROUPS</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Groups')}>
          <Text style={styles.viewAllText}>VIEW ALL</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList as Carousel */}
      <FlatList
        ref={flatListRef}
        data={groups}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate(item.slug as any)}>
              <View style={styles.cardOverlay}>
                <View style={styles.imageWrapper}>
                  <Image source={item.image} style={styles.cardImage} />
                </View>
              </View>
              <View style={styles.bottomBar}>
                <Text style={styles.cardTitle}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        onScroll={event => {
          currentOffset = event.nativeEvent.contentOffset.x;
        }}
      />
    </View>
  );
};

export default GroupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    // paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 24,
  },
  headerTitle: {
    fontSize: 14,
    fontFamily: 'Aclonica-Regular',
    color: '#2B2D42',
    textAlign: 'left',
  },
  cardContainer: {
    width: width * 0.8,
    // paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
  },
  cardOverlay: {
    backgroundColor: '#382F2F',
    width: '100%',
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: height * 0.15,
    height: height * 0.15,
    borderRadius: height * 0.075,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  bottomBar: {
    backgroundColor: '#FF201B',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Mukta-Bold',
    color: 'white',
  },
  viewAllText: {
    fontSize: 14,
    fontFamily: 'Aclonica-Regular',
    color: '#2B2D42', // Changed to match the header color
    // marginHorizontal: 20,
  },
});
