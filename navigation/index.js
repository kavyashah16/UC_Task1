// navigation.js
import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from '../components/startpage/StartPage';
import LoginScreen from '../components/loginpage/LoginScreen';
import SignInScreen from '../components/signinscreen/SignInScreen';
import TabNavigator from './Tab';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="StartPage"
      screenOptions={{ headerShown: false }} 
    >
      <Stack.Screen name="StartPage" component={StartPage} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
