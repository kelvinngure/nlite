import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import styles from "../styles"
import TestContext from "../TestContext"

const LetterDisplay = (props) => {
   return (
    <View>
        <TouchableOpacity style = {styles.leftLetterBox}><Text style = {styles.letterText}>{props.letters[0]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.rightLetterBox}><Text style = {styles.letterText}>{props.letters[1]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.leftLetterBox}><Text style = {styles.letterText}>{props.letters[2]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.rightLetterBox}><Text style = {styles.letterText}>{props.letters[3]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.leftLetterBox}><Text style = {styles.letterText}>{props.letters[4]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.rightLetterBox}><Text style = {styles.letterText}>{props.letters[5]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.leftLetterBox}><Text style = {styles.letterText}>{props.letters[6]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.rightLetterBox}><Text style = {styles.letterText}>{props.letters[7]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.leftLetterBox}><Text style = {styles.letterText}>{props.letters[8]}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.rightLetterBox}><Text style = {styles.letterText}>{props.letters[9]}</Text></TouchableOpacity>
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
            {
                context => context ? <LetterDisplay letters = {context.state.assessment.letters} />
                :
                console.log("No context provided")
            }
        </TestContext.Consumer>
    )
}

export default Letter