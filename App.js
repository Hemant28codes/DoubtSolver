/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import UserDoubt from './screens/UserDoubt';
import DoubtDesc from './screens/DoubtDesc';
import User from './screens/User';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
          headerShown: false,
        }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} ></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="UserDoubt" component={UserDoubt}></Stack.Screen>
        <Stack.Screen name="DoubtDesc" component={DoubtDesc}></Stack.Screen>
        <Stack.Screen name="User" component={User}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}