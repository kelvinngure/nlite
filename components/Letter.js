import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import styles from "../styles"
import TestContext from "../TestContext"

const Display = (prop) => {
    return (
        <View>
            <TouchableOpacity style = {styles.leftLetterBox}><Text style = {styles.letterText}>{}</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.nextButton}><Text style = {styles.nextText}>Next</Text></TouchableOpacity>
        </View>
    )
}

const Letter = (props) => {
    const [score, setScore] = useState(0)

    const navigateNext = () => {
        navigation.navigate("Paragraph")
    } 

    return(
        <TestContext.Consumer>
            
        </TestContext.Consumer>
    )
}

export default Letter