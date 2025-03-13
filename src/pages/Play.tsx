import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import NavBar from '../components/NavBar';
import UpcomingPlays from '../components/Plays/UpcomingPlays';
import Footer from '../components/Footer';

const PlayScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <UpcomingPlays />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bgGray: {
    backgroundColor: '#373737',
    paddingVertical: 20,
  },
});

export default PlayScreen;
