import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Start from "./components/Start"

export default function App() {
  return (
    <NavigationContainer>
      <Start/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({

});
