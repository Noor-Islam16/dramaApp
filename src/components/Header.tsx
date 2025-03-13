import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Modal} from 'react-native';
import {Icon, Text, Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/store'; // Import RootState
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App'; // Adjust this import as needed

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const userName = useSelector((state: RootState) => state.user.name); // Fetch user name
  const profilePicture = useSelector(
    (state: RootState) => state.user.profilePicture,
  ); // Fetch profile picture

  const handleLogout = async () => {
    try {
      await auth().signOut();
      // You might want to clear the Redux store here
      // dispatch(clearUser()); // Implement this action in your userSlice

      // Close modal and navigate to Login screen
      setLogoutModalVisible(false);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headerText}>Welcome {userName || 'Guest'} 👋</Text>
        <Text style={styles.subText}>Book your favourite movie</Text>
      </View>

      <TouchableOpacity onPress={() => setLogoutModalVisible(true)}>
        {profilePicture ? (
          <Image source={{uri: profilePicture}} style={styles.profileImage} />
        ) : (
          <Icon source="account-circle" size={60} color="red" />
        )}
      </TouchableOpacity>

      {/* Logout Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Did you want to log out?</Text>

            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setLogoutModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleLogout}>
                <LinearGradient
                  colors={['#FF232D', '#8A171C']}
                  style={styles.logoutButton}>
                  <Text style={styles.logoutButtonText}>Log Out</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    padding: 24,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Kanit-SemiBold',
    color: '#000',
  },
  subText: {
    color: '#595858',
    fontFamily: 'Kanit-Light',
    fontSize: 14,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Kanit-Medium',
    color: '#000',
    marginBottom: 20,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Kanit-Regular',
  },
  logoutButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Kanit-Medium',
  },
});
