import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {images} from '../../../assets/images';

const CategorySection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryItem}>
          <Image source={images.romance} style={styles.icon} />
          <Text style={styles.label}>Romance</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={images.comedy} style={styles.icon} />
          <Text style={styles.label}>Comedy</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={images.horror} style={styles.icon} />
          <Text style={styles.label}>Horror</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={images.drama} style={styles.icon} />
          <Text style={styles.label}>Drama</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Aclonica-Regular',
    color: 'black',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginHorizontal: 12,
  },
  categoryItem: {
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  label: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: 'Kanit-ExtraLight',
    color: 'black',
  },
});

export default CategorySection;
