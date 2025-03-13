import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {images} from '../../../assets/images';

const UpcomingPlays = () => {
  const plays = [
    {title: 'Iccheymoto Parbon', date: '31 Dec 2024, 9:30 pm'},
    {title: 'Iccheymoto Parbon', date: '31 Dec 2024, 9:30 pm'},
  ];
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>UPCOMING PLAYS</Text>
      <ScrollView horizontal>
        {plays.map((play, index) => (
          <View key={index} style={styles.playItem}>
            <Image source={images.banner1} style={styles.image} />
            <Text style={styles.playTitle}>{play.title}</Text>
            <Text style={styles.playDate}>{play.date}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default UpcomingPlays;

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    marginTop: 24,
    height: '40%',
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Aclonica-Regular',
    color: 'black',
    marginBottom: 14,
  },
  playItem: {marginRight: 16, width: 160},
  image: {width: '100%', height: '65%', borderRadius: 8, resizeMode: 'cover'},
  playTitle: {
    marginTop: 8,
    fontSize: 12,
    fontFamily: 'Mukta-SemiBold',
    color: 'black',
  },
  playDate: {fontSize: 12, color: '#919191', fontFamily: 'Mukta-Light'},
});
