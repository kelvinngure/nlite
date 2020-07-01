import React, {useState} from "react"
import { createStackNavigator } from '@react-navigation/stack';
import {View} from "react-native"
import Choose from "./Choose"
import styles from "../styles"

const Stack = createStackNavigator();

const Start = () => {


  return (
    <View style = {styles.fullview}>
        <Stack.Navigator>
            <Stack.Screen name="Choose" component={Choose} />
        </Stack.Navigator>
    </View>
  );
}

export default Start