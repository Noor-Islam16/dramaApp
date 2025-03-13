import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../../assets/images';
import {auth} from '../api/firebaseConfig'; // ✅ Using the correct Firebase import
import {createUserWithEmailAndPassword} from '@react-native-firebase/auth';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

const SignUp: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // 🔹 Validate Form Inputs
  const validateForm = (): boolean => {
    if (!mobileNumber || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required!');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Invalid email format!');
      return false;
    }

    if (!/^\d{10}$/.test(mobileNumber)) {
      Alert.alert('Error', 'Invalid mobile number! Enter a 10-digit number.');
      return false;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters!');
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return false;
    }

    return true;
  };

  // 🔹 Handle Signup Process
  const handleSignUp = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      await userCredential.user.sendEmailVerification();

      Alert.alert(
        'Success',
        'Account created successfully! A verification email has been sent.',
        [{text: 'OK', onPress: () => navigation.navigate('Login')}],
      );
    } catch (error: any) {
      console.log('Firebase Error:', error);
      let errorMessage = 'An error occurred during sign-up.';

      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'This email is already registered.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password should be at least 6 characters.';
          break;
        default:
          errorMessage = error.message;
      }

      Alert.alert('Error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" // or "light-content" depending on your UI
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <LinearGradient
          colors={['#FF232D', '#8A171C']}
          style={styles.headerContainer}>
          <Image source={images.transparentLogo} style={styles.logo} />
        </LinearGradient>

        <View style={styles.bodyContainer}>
          <Text style={styles.title}>Create New Account</Text>
          <Text style={styles.description}>Set up your email and password</Text>

          {/* Mobile Number */}
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="black"
            style={styles.input}
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />

          {/* Email */}
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          {/* Password */}
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="black"
              style={styles.passwordInput}
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <IconButton
              icon={passwordVisible ? 'eye' : 'eye-off'}
              size={20}
              iconColor="gray"
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          </View>

          {/* Confirm Password */}
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="black"
              style={styles.passwordInput}
              secureTextEntry={!confirmPasswordVisible}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <IconButton
              icon={confirmPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              iconColor="gray"
              onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            />
          </View>

          {/* Signup Button */}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSignUp}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.submitButtonText}>Submit</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {flexGrow: 1, backgroundColor: 'white'},
  headerContainer: {alignItems: 'center', paddingVertical: 40},
  logo: {width: '60%', height: 100, marginTop: 25},
  bodyContainer: {alignItems: 'center', padding: '1%'},
  title: {marginTop: 10, color: 'black', fontSize: 24, fontWeight: 'bold'},
  description: {color: 'gray', marginBottom: 30, textAlign: 'center'},
  input: {
    width: '90%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    color: 'black',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
  },
  passwordInput: {flex: 1, paddingVertical: 12, color: 'black'},
  submitButton: {
    width: '90%',
    backgroundColor: '#E12029',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {color: 'white', fontSize: 16, fontWeight: 'bold'},
});

export default SignUp;
