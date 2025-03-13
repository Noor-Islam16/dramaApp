import React from 'react';
import {ScrollView, StyleSheet, StatusBar, View} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/HomeScreen/SearchBar';
import Category from '../components/HomeScreen/Category';
import TheaterHallsPage from '../components/HomeScreen/TheaterHallsPage';
import GroupPage from '../components/HomeScreen/GroupPage';
import AboutPage from '../components/HomeScreen/AboutPage';
import BrandPage from '../components/HomeScreen/BrandPage';
import ProductsPage from '../components/HomeScreen/Products';
import BottomTabBar from '../navigation/BottomTabBar';
import UpcomingPlaysPage from '../components/HomeScreen/UpcomingPlaysPage';

export default function HomeScreen() {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" // or "light-content" depending on your UI
      />
      <ScrollView style={styles.container}>
        <Header />
        <SearchBar />
        <Category />
        <UpcomingPlaysPage />
        <TheaterHallsPage />
        <GroupPage />
        <AboutPage />
        <BrandPage />
      </ScrollView>
      <BottomTabBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
