import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from "./src/types/navigation";
import Home from "./src/components/Pages/Home";
import Description from "./src/components/Pages/Description";

export default function App() {

  const { Screen, Navigator } = createStackNavigator<RootStackParamList>();

  return (
    <>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
          <Screen name="Home" component={Home} />
          <Screen name="Description" component={Description} />
        </Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}