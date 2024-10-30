import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from '../components/startpage/StartPage';
import LoginScreen from '../components/loginpage/LoginScreen';
import SignInScreen from '../components/signinscreen/SignInScreen';
import HomeScreen from '../components/homescreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartPage"
        screenOptions={{ headerShown: false }}  // Hides header for all screens
      >
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
