/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import UserHeader from '../components/UserDoubt/UserHeader';
import { Divider } from 'react-native-elements';
import Doubts from '../components/UserDoubt/Doubts';

export default function UserDoubt({route, navigation}) {
  //const name = route.params.name;
  return (
    <SafeAreaView >
      <UserHeader route={route}/>
      <Divider width={1}/>
      <Doubts navigation={navigation}/>
    </SafeAreaView>
  );
}
