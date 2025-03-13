import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './src/pages/Home'; // Ensure path is correct
import PlayScreen from './src/pages/Play';
import AboutScreens from './src/pages/AboutScreens';
import ContactScreens from './src/pages/ContactScreens';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import SplashScreen from './src/pages/SplashScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import UpcomingPlays from './src/components/Plays/UpcomingPlays';
import TheaterHalls from './src/pages/TheaterHalls';
import Group from './src/pages/Group';
import Purborango from './src/pages/TheaterGroup/PurbarangaInfo';
import Purborongo from './src/pages/TheaterGroup/PurbarangaInfo';
import PurbarangaInfo from './src/pages/TheaterGroup/PurbarangaInfo';
import SamstabInfo from './src/pages/TheaterGroup/SamstabInfo';
import SangharamInfo from './src/pages/TheaterGroup/SangharamInfo';
import SwapnilInfo from './src/pages/TheaterGroup/SwapnilInfo';
import MuktanganVenue from './src/pages/Theater/MuktanganVenue';
import AcademyVenue from './src/pages/Theater/AcademyVenue';
import Birla from './src/pages/Theater/Birla';
import SadanVenue from './src/pages/Theater/SadanVenue';
import PlayDetails from './src/components/Plays/PlayDetails';
import AFCSeating from './src/pages/SeatMatrix/AFCSeating';

const Stack = createNativeStackNavigator<RootStackParamList>(); // Apply type

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Plays: undefined;
  About: undefined;
  Contact: undefined;
  Login: undefined;
  SignUp: undefined;
  Halls: undefined;
  Groups: undefined;
  Purborongo: undefined;
  Samstab: undefined;
  Swapnil: undefined;
  Sanghram: undefined;
  Muktangan: undefined;
  Academy: undefined;
  Birla: undefined;
  Sadan: undefined;
  // PlayDetails: {playId: number};
  PlayDetails: undefined;
  AFCSeating: undefined;
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
              <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Plays"
                component={UpcomingPlays}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="About"
                component={AboutScreens}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Contact"
                component={ContactScreens}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Halls"
                component={TheaterHalls}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Groups"
                component={Group}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Purborongo"
                component={PurbarangaInfo}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Samstab"
                component={SamstabInfo}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Sanghram"
                component={SangharamInfo}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Swapnil"
                component={SwapnilInfo}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Muktangan"
                component={MuktanganVenue}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Academy"
                component={AcademyVenue}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Birla"
                component={Birla}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Sadan"
                component={SadanVenue}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="PlayDetails"
                component={PlayDetails}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="AFCSeating"
                component={AFCSeating}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
};

export default App;
