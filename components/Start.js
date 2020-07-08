import React, {useState} from "react"
import { createStackNavigator } from '@react-navigation/stack';
import {View} from "react-native"
import Choose from "./Choose"
import HiPage from "./HiPage"
import Paragraph from "./Paragraph"
import styles from "../styles"

const Stack = createStackNavigator();

const Start = () => {
  return (
    <View style = {styles.fullview}>
        <Stack.Navigator>
            <Stack.Screen name="Choose" component={Choose} />
            <Stack.Screen name= "HiPage" component = {HiPage}/>
            <Stack.Screen name= "Paragraph" component = {Paragraph}/>
        </Stack.Navigator>
    </View>
  );
}

export default Start