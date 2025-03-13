import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Avatar, Modal, Portal, Provider} from 'react-native-paper';
import {images} from '../../../assets/images';

const LoginDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userName = 'Guest'; // Default name

  return (
    <Provider>
      <View style={styles.container}>
        {/* Profile Button */}
        <TouchableOpacity
          onPress={() => setIsOpen(true)}
          style={styles.profileButton}>
          <Avatar.Image size={50} source={images.avatar} />
          <Text style={styles.userName}>{userName}</Text>
        </TouchableOpacity>

        {/* Profile Modal */}
        <Portal>
          <Modal
            visible={isOpen}
            onDismiss={() => setIsOpen(false)}
            contentContainerStyle={styles.modalContainer}>
            <Avatar.Image size={80} source={images.avatar} />
            <Text style={styles.modalText}>{userName}</Text>
            <TouchableOpacity
              onPress={() => setIsOpen(false)}
              style={styles.closeButton}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  userName: {
    color: 'black',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '300',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  closeText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginDialog;
