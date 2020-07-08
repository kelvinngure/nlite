import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"


const Paragraph = () => {
    const [score, setScore] = useState(0)

    return(
        <View>
            <Text>Hi</Text>
            <TouchableOpacity><Text>NEXT</Text></TouchableOpacity>
        </View>
    )
}

export default Paragraph