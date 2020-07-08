import React from "react"
import { Text, View, TouchableOpacity } from "react-native"


const HiPage = ({navigation}) => {

    const navigateNext = () => {
        navigation.navigate("Paragraph")
    } 

    return(
        <View>
            <Text>Hi</Text>
            <TouchableOpacity onPress = {() => navigateNext()}><Text>Start</Text></TouchableOpacity>
        </View>
    )
}

export default HiPage