import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AboutScreen from '../components/About';

const AboutScreens = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <NavBar />
      <AboutScreen />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  bgGray: {
    backgroundColor: '#373737',
    paddingVertical: 20,
  },
});

export default AboutScreens;
