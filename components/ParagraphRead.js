import React from 'react'
import { Text, View, TouchableOpacity } from "react-native"
import styles from "../styles"
import TestContext from "../TestContext"

const ParagraphRead = ({navigation}) => {
    const showParagraph = (props) => {
        return(
            state => <Choice p1 = {state.state.assessment.paragraphs[0]} p2={state.state.assessment.paragraphs[1]}/> ? //Don't understand how to navigate when paragraph box compoenent is pressed
                        : 
                        console.log("no state")
    } 
}
