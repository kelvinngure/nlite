import React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import styles from "../styles"

const Choose = () => {
    return(
        <View style = {styles.choose}>
            <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 1</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 2</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 3</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 4</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 5</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 6</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 7</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 8</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 9</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 10</Text></TouchableOpacity>
        </View>
    )
}

export default Choose