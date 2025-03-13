import React, {useState, useEffect} from 'react';
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
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
  User,
} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/userSlice';

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId:
    '306945705859-vlu5ovq1i6tsvlmk31so3eghhaub85bg.apps.googleusercontent.com',
  offlineAccess: false,
});

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // 🔹 State Variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(true); // Start with loading true to check auth state

  // 🔹 Check Authentication State on Component Mount
  useEffect(() => {
    // Set up auth state observer
    const unsubscribe = auth().onAuthStateChanged(user => {
      setLoading(false);

      if (user) {
        // User is signed in, update Redux store
        dispatch(
          setUser({
            name: user.displayName || 'Guest',
            email: user.email || '',
            profilePicture: user.photoURL || '',
          }),
        );

        // Navigate to Home screen
        navigation.navigate('Home');
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, [dispatch, navigation]);

  // 🔹 Handle Email/Password Login
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Login Successful!', [
        {text: 'OK', onPress: () => navigation.navigate('Home')},
      ]);
    } catch (error: any) {
      console.log('Firebase Login Error:', error);
      let errorMessage = 'An error occurred during login.';

      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No user found with this email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password. Please try again.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email format.';
          break;
        default:
          errorMessage = error.message;
      }

      Alert.alert('Login Failed', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      // Ensure Google Play services are available
      await GoogleSignin.hasPlayServices();

      // Sign in and get user info
      const userInfo = await GoogleSignin.signIn();

      // Extract user data safely
      const {idToken} = await GoogleSignin.getTokens();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign in with Firebase
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );

      // Get user details from Firebase auth
      const user = userCredential.user;

      // Dispatch user information to Redux store including photoURL
      dispatch(
        setUser({
          name: user.displayName || 'Guest',
          email: user.email || '',
          profilePicture: user.photoURL || '',
        }),
      );

      // Navigate to Home on success
      navigation.navigate('Home');
    } catch (error: any) {
      console.log('Google Sign-In Error:', error);
      let errorMessage = 'An error occurred during Google sign-in';

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        return;
      } else if (error.code === statusCodes.IN_PROGRESS) {
        errorMessage = 'Sign-in is already in progress';
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        errorMessage = 'Play services not available or outdated';
      } else {
        errorMessage = error.message;
      }

      Alert.alert('Google Login Failed', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // If initially loading authentication state, show a loading indicator
  if (loading && !email && !password) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#E12029" />
        <Text style={styles.loadingText}>Checking login status...</Text>
      </View>
    );
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="dark-content" // or "light-content" depending on your UI
        />
        <LinearGradient
          colors={['#FF232D', '#8A171C']}
          style={styles.headerContainer}>
          <Image source={images.transparentLogo} style={styles.logo} />
        </LinearGradient>

        <View style={styles.bodyContainer}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.description}>
            Log in into your account using email or social networks
          </Text>

          {/* 🔹 Google Login Button */}
          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleGoogleLogin}
            disabled={loading}>
            <IconButton icon="google" size={24} iconColor="red" />
            <Text style={styles.socialButtonText}>Log in with Google</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or continue with email</Text>
            <View style={styles.line} />
          </View>

          {/* 🔹 Email Input */}
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="black"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* 🔹 Password Input */}
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

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* 🔹 Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.loginButtonText}>Log In</Text>
            )}
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Didn't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.registerLink}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingTop: StatusBar.currentHeight,
  },
  logo: {
    marginTop: 25,
    width: '60%',
    height: 100,
  },
  bodyContainer: {
    alignItems: 'center',
    padding: '1%',
  },
  title: {
    marginTop: 10,
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
    marginBottom: 30,
    textAlign: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    padding: '1%',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  socialButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    color: 'gray',
    marginHorizontal: 10,
  },
  input: {
    marginTop: 10,
    width: '90%',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    color: 'black',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    color: 'black',
  },
  forgotPassword: {
    width: '90%',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#E12029',
    fontWeight: '600',
  },
  loginButton: {
    width: '90%',
    backgroundColor: '#E12029',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: 'black',
  },
  registerLink: {
    color: '#E12029',
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loadingText: {
    marginTop: 10,
    color: 'black',
    fontSize: 16,
  },
});

export default LoginScreen;
