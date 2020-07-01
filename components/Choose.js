import React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import styles from "../styles"

const Choose = () => {
    return(
        <View style = {styles.fullview}>
            <TouchableOpacity style = {styles.choose_button}><Text>Assessment 1</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text>Assessment 2</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text>Assessment 3</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text>Assessment 4</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text>Assessment 5</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text>Assessment 6</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text>Assessment 7</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text>Assessment 8</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text>Assessment 9</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text>Assessment 10</Text></TouchableOpacity>
        </View>
    )
}

export default Choose