import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {images} from '../../../assets/images';

const ProductsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PRODUCT</Text>
      <Image source={images.productLogo} style={styles.productImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productImage: {
    width: 150,
    height: 80,
    resizeMode: 'contain',
  },
});

export default ProductsPage;
