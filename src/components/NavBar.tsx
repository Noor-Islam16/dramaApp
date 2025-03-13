import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {IconButton, Menu} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {images} from '../../assets/images';
import {RootStackParamList} from '../../App';

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Use the defined type

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <View style={styles.navContainer}>
      {/* Left Side - Logo */}
      <Image source={images.logo} style={styles.logo} />

      {/* Menu Icon */}
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={
          <IconButton
            icon="menu"
            size={28}
            iconColor="white"
            onPress={openMenu}
          />
        }>
        <Menu.Item
          onPress={() => {
            navigation.navigate('Home');
            closeMenu();
          }}
          title="Home"
        />
        <Menu.Item
          onPress={() => {
            // navigation.navigate('About');
            closeMenu();
          }}
          title="About Us"
        />
        <Menu.Item
          onPress={() => {
            navigation.navigate('Play');
            closeMenu();
          }}
          title="Active Shows"
        />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F02831',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default NavBar;
