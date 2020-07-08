import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"


const Paragraph = () => {
    const [score, setScore] = useState(0)

    const navigateNext = () => {
        navigation.navigate("Paragraph")
    } 

    return(
        <View>
            <Text>Hi</Text>
            <TouchableOpacity onPress = {() => navigateNext()}><Text>NEXT</Text></TouchableOpacity>
        </View>
    )
}

export default Paragraph