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
import {images} from '../../../assets/images';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';

interface TheaterHall {
  name: string;
  image: any;
  slug: string;
}

const {width, height} = Dimensions.get('window');

const TheaterHallsPage = () => {
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const initialTheaters: TheaterHall[] = [
    {name: 'Muktangan Rangalaya', image: images.muktangan, slug: 'Muktangan'},
    {name: 'Academy of Fine Arts', image: images.finearts, slug: 'Academy'},
    {name: 'GD Birla Sabhaghar', image: images.birla, slug: 'Birla'},
    {name: 'Rabindra Sadan', image: images.sadan, slug: 'Sadan'},
  ];

  const theaters = [...initialTheaters, ...initialTheaters];

  let currentOffset = 0;

  return (
    <View style={styles.container}>
      {/* Header with "VIEW ALL" text */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>THEATRE HALLS</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Halls')}>
          <Text style={styles.viewAllText}>VIEW ALL</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList as Carousel */}
      <FlatList
        ref={flatListRef}
        data={theaters}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate(item.slug as any)}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.overlay}>
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

export default TheaterHallsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    // paddingHorizontal: 24,
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
    marginHorizontal: 20,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: height * 0.3,
    borderRadius: 12,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F8C341',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Mukta-Bold',
    color: 'black',
  },
  viewAllText: {
    fontSize: 14,
    fontFamily: 'Aclonica-Regular',
    color: '#2B2D42', // Changed to match the header color
    // marginHorizontal: 24,
  },
});
