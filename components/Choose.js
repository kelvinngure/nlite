import React, { useContext } from "react"
import { View, TouchableOpacity, Text, Picker } from "react-native"
import styles from "../styles"
import TestContext from "../TestContext"


const Choose = ({navigation}) => {

    const {dispatch} = useContext(TestContext)


    const dispatchThenNav = (assessmentNumber) => {
        dispatch({type: "pick", payload: assessmentNumber})
        startAssessment()
    }

    const startAssessment = () => {
        navigation.navigate("HiPage")
    }
    return(
        <View style = {styles.choose}>
            <TouchableOpacity style = {styles.choose_button} onPress={() => dispatchThenNav(1)}><Text style = {styles.buttonText}>Assessment 1</Text></TouchableOpacity>
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

{/* <TestContext.Consumer>
                {state => state ?  <TouchableOpacity onPress= {() => dispatch({type:"pick", payload:1 })}><Text>no state</Text></TouchableOpacity> :console.log(state) 

                }
           
            </TestContext.Consumer> */}