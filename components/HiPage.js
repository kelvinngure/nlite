import React from "react"
import { Text, View, TouchableOpacity, Image } from "react-native"
import styles from "../styles"


const HiPage = ({navigation}) => {

    const navigateNext = () => {
        navigation.navigate("Paragraph")
    } 

    return(
        <View style = {styles.hiPage}>
            <Text style = {styles.hiWord}>Hi!</Text>
            <View style = {styles.imageContainer}>
                <Image source = { require("../assets/lion.jpg") } />
            </View>
            <TouchableOpacity style = {styles.startButton} onPress = {() => navigateNext()}><Text style = {styles.startButtonWord}>Start</Text></TouchableOpacity>
        </View>
    )
}

export default HiPage