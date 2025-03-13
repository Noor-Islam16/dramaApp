import React, {useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const {width} = Dimensions.get('window');

const EventScreen = () => {
  const scrollRef = useRef<ScrollView | null>(null);

  const events = [
    {
      id: '1',
      image:
        'https://i.ibb.co/HL9vQtQk/Whats-App-Image-2025-02-07-at-16-36-21-656415dd.jpg',
    },
    {
      id: '2',
      image:
        'https://i.ibb.co/HL9vQtQk/Whats-App-Image-2025-02-07-at-16-36-21-656415dd.jpg',
    },
    {
      id: '3',
      image:
        'https://i.ibb.co/HL9vQtQk/Whats-App-Image-2025-02-07-at-16-36-21-656415dd.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollRef}>
        {/* Header Banner */}
        <ImageBackground
          source={{
            uri: 'https://i.ibb.co/67Lk3frh/13306827-Kerfin7-NEA-2191-1-2.png',
          }}
          style={styles.banner}>
          <Text style={styles.bannerText}>
            Endless Entertainment
            {'\n'}
            Anytime. Anywhere!
          </Text>
        </ImageBackground>

        {/* Event Slider */}
        <FlatList
          data={events}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({item}) => (
            <View style={styles.eventCard}>
              <FastImage source={{uri: item.image}} style={styles.eventImage} />
            </View>
          )}
        />
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() =>
          scrollRef.current &&
          scrollRef.current.scrollTo({y: 0, animated: true})
        }>
        <Text style={styles.fabText}>↑</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  eventCard: {
    width: width - 100,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  eventImage: {},
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default EventScreen;
