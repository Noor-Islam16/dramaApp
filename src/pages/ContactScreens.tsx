import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactScreen from '../components/Contact';

const ContactScreens = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <NavBar />
      <ContactScreen />
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

export default ContactScreens;
