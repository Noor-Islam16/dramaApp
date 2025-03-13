import React from 'react';
import {StyleSheet, TouchableOpacity, View, TextInput} from 'react-native';
import {Icon} from 'react-native-paper';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      {/* Wrapping Icon inside a View to apply styles */}
      <View style={styles.iconWrapper}>
        <Icon source="search-web" size={36} color="black" />
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#000"
      />

      <TouchableOpacity>
        <View style={styles.iconTune}>
          <Icon source="tune" size={36} color="#FF232D" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginHorizontal: 16,
    height: 48, // Set a fixed height for the container
  },
  searchInput: {
    fontFamily: 'Kanit-Light',
    fontSize: 14,
    flex: 1,
    paddingHorizontal: 8,
    color: 'black',
  },
  iconWrapper: {
    marginHorizontal: 8, // Adds spacing around icons
  },
  iconTune: {
    backgroundColor: '#FFDF7E',
    height: '100%', // Make the height match the container
    justifyContent: 'center', // Center the icon vertically
    alignItems: 'center', // Center the icon horizontally
    paddingHorizontal: 12, // Add some horizontal padding
    borderTopRightRadius: 20, // Rounded edge on the right top
    borderBottomRightRadius: 20, // Rounded edge on the right bottom
  },
});
