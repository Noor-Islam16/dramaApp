import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const scaleFactor = width / 375;

const BottomTabBar: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    {name: 'Home', icon: 'home'},
    {name: 'Plays', icon: 'theater'},
    // {name: 'Events', icon: 'calendar'},
    // {name: 'Cart', icon: 'cart'},
    {name: 'Halls', icon: 'town-hall'},
    {name: 'Groups', icon: 'google-circles-group'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map(tab => {
          const isActive = route.name === tab.name;
          return (
            <TouchableOpacity
              key={tab.name}
              style={[
                styles.tab,
                isActive ? styles.activeTab : styles.inactiveTab,
              ]}
              onPress={() => navigation.navigate(tab.name as never)}>
              <IconButton
                icon={tab.icon}
                size={24 * scaleFactor}
                iconColor={isActive ? '#fff' : '#000'}
              />
              <Text
                style={[
                  styles.tabText,
                  isActive ? styles.activeText : styles.inactiveText,
                ]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingHorizontal: 12 * scaleFactor,
    paddingVertical: 8 * scaleFactor,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tabContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  tab: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 8 * scaleFactor,
    // paddingVertical: 2 * scaleFactor,
  },
  activeTab: {
    backgroundColor: '#F02831',
  },
  inactiveTab: {
    backgroundColor: 'transparent',
  },
  activeText: {
    color: '#fff',
  },
  inactiveText: {
    color: '#000',
  },
  tabText: {
    fontSize: 12 * scaleFactor,
    fontWeight: '500',
    marginBottom: 8 * scaleFactor,
    // backgroundColor: 'black',
    marginTop: -8 * scaleFactor, // Decreased the marginTop to reduce the gap
  },
});

export default BottomTabBar;
