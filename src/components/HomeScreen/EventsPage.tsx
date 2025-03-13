import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {images} from '../../../assets/images';

interface EventCard {
  title: string;
  count: number;
  image: any;
}

const EventsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const headerImages = [images.sangharam4, images.gourerBanner];

  const events: EventCard[] = [
    {
      title: 'ACTION',
      count: 5,
      image: images.action,
    },
    {
      title: 'COMEDY',
      count: 3,
      image: images.comedy,
    },
    {
      title: 'THRILLER',
      count: 4,
      image: images.thriller,
    },
  ];

  const renderHeaderItem = ({item}: {item: any}) => (
    <View style={styles.headerImageContainer}>
      <Image source={item} style={styles.headerImage} />
    </View>
  );

  const renderEventCard = ({item}: {item: EventCard}) => (
    <TouchableOpacity style={styles.eventCard}>
      <Image source={item.image} style={styles.eventImage} />
      <View style={styles.eventTextContainer}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventCount}>{item.count} Events</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Banner Section */}
      <View style={styles.bannerContainer}>
        <Image source={images.Reel} style={styles.bannerImage} />
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerText}>
            Endless Entertainment {'\n'} Anytime. Anywhere!
          </Text>
        </View>
      </View>

      {/* Header Carousel (Horizontal FlatList) */}
      <View style={styles.headerCarouselContainer}>
        <FlatList
          data={headerImages}
          renderItem={renderHeaderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `header-${index}`}
          onMomentumScrollEnd={event => {
            const index = Math.round(
              event.nativeEvent.contentOffset.x /
                Dimensions.get('window').width,
            );
            setActiveIndex(index);
          }}
          extraData={activeIndex} // Ensures FlatList updates when activeIndex changes
        />
      </View>

      {/* Events Section (Horizontal FlatList) */}
      <View style={styles.eventsContainer}>
        <Text style={styles.eventsTitle}>Top Live Shows for Everyone</Text>
        <FlatList
          data={events}
          renderItem={renderEventCard}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `event-${index}`}
          contentContainerStyle={styles.eventsList}
          extraData={events} // Ensures list updates properly
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerContainer: {
    height: Dimensions.get('window').height * 0.1,
    marginBottom: 16,
    marginTop: 10,
    paddingHorizontal: 6,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  bannerTextContainer: {
    position: 'absolute',
    right: '5%',
    top: '50%',
    transform: [{translateY: -25}],
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  bannerText: {
    fontSize: Dimensions.get('window').width * 0.05,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
    lineHeight: 24,
  },
  headerCarouselContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.3,
  },
  headerImageContainer: {
    width: Dimensions.get('window').width,
    height: '100%',
    paddingHorizontal: '2%',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  eventsContainer: {
    paddingHorizontal: '5%',
    marginTop: '5%',
    marginBottom: '10%',
  },
  eventsTitle: {
    fontSize: Dimensions.get('window').width * 0.06,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '3%',
  },
  eventsList: {
    paddingHorizontal: '2%',
  },
  eventCard: {
    width: Dimensions.get('window').width * 0.6,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: Dimensions.get('window').height * 0.2,
  },
  eventTextContainer: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
  },
  eventTitle: {
    fontSize: Dimensions.get('window').width * 0.05,
    fontWeight: 'normal',
    color: 'white',
  },
  eventCount: {
    fontSize: Dimensions.get('window').width * 0.035,
    fontWeight: '500',
    color: 'white',
    textAlign: 'right',
  },
});

export default EventsPage;
