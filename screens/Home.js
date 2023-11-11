/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../components/Home/Header';
import Stories from '../components/Home/Stories';
import UserList from '../components/Home/UserList';

export default function Home({navigation, route}) {
  return (
    <SafeAreaView>
      <Header navigation={navigation} route={route}/>
      <UserList navigation={navigation}/>
    </SafeAreaView>
  );
}
