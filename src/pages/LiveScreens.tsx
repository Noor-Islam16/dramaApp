import React from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const LiveShowsScreen = () => {
  const categories = [
    {
      title: 'ACTION',
      events: '5 Events',
      image:
        'https://i.ibb.co/jPL2fb7K/highly-serious-young-man-suit-as-nicholas-ii-isolated-dark-green-1.png',
    },
    {
      title: 'COMEDY',
      events: '3 Events',
      image:
        'https://i.ibb.co/zhw8ZSGV/happy-mime-standing-front-red-curtain-holding-hat-flexing-his-muscle-1.png',
    },
    {
      title: 'THRILLER',
      events: '4 Events',
      image: 'https://i.ibb.co/XZxQRn9W/close-up-woman-with-make-up-1.png',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Page Title */}
      <Text style={styles.sectionTitle}>Top Live Shows for Everyone</Text>

      {/* Show Categories */}
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => console.log(`${item.title} Clicked`)}>
            <ImageBackground
              source={{uri: item.image}}
              style={styles.cardImage}
              imageStyle={{borderRadius: 10}}>
              <View style={styles.overlay}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.eventCount}>{item.events}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => console.log('FAB Clicked')}>
        <Text style={styles.fabText}>↑</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  sectionTitle: {
    fontFamily: 'sans-serif-light',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 240,
    justifyContent: 'flex-end',
  },
  overlay: {
    left: 280,
    bottom: 20,
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  eventCount: {
    fontSize: 14,
    color: '#ddd',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: 'red',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default LiveShowsScreen;
