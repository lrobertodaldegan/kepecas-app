import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/Welcome/WelcomeScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import ResetSenhaScreen from './src/screens/ResetSenha/ResetSenhaScreen';
import Step1Screen from './src/screens/Step1/Step1Screen';
import Step2Screen from './src/screens/Step2/Step2Screen';
import Step3Screen from './src/screens/Step3/Step3Screen';
import HomeScreen from './src/screens/Home/HomeScreen';
import SearchScreen from './src/screens/Search/SearchScreen';
import FeedScreen from './src/screens/Feed/FeedScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';

const ScreensOptions = {
  headerShown: false,
  headerTintColor: '#fff',
}

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="welcome" component={WelcomeScreen} options={ScreensOptions} />
        <Stack.Screen name="login" component={LoginScreen} options={ScreensOptions} />
        <Stack.Screen name="reset" component={ResetSenhaScreen} options={ScreensOptions} />
        <Stack.Screen name="step1" component={Step1Screen} options={ScreensOptions} />
        <Stack.Screen name="step2" component={Step2Screen} options={ScreensOptions} />
        <Stack.Screen name="step3" component={Step3Screen} options={ScreensOptions} />
        <Stack.Screen name="home" component={HomeScreen} options={ScreensOptions} />
        <Stack.Screen name="search" component={SearchScreen} options={ScreensOptions} />
        <Stack.Screen name="feed" component={FeedScreen} options={ScreensOptions} />
        <Stack.Screen name="profile" component={ProfileScreen} options={ScreensOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
