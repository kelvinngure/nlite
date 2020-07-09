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
            <TouchableOpacity style = {styles.chooseButton} onPress={() => dispatchThenNav(1)}><Text style = {styles.buttonText}>Assessment 1</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.chooseButton} onPress={() => dispatchThenNav(2)}><Text style = {styles.buttonText}>Assessment 2</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.chooseButton} onPress={() => dispatchThenNav(3)}><Text style = {styles.buttonText}>Assessment 3</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.chooseButton} onPress={() => dispatchThenNav(4)}><Text style = {styles.buttonText}>Assessment 4</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.chooseButton} onPress={() => dispatchThenNav(5)}><Text style = {styles.buttonText}>Assessment 5</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.chooseButton} onPress={() => dispatchThenNav(6)}><Text style = {styles.buttonText}>Assessment 6</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.chooseButton} onPress={() => dispatchThenNav(7)}><Text style = {styles.buttonText}>Assessment 7</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.chooseButton} onPress={() => dispatchThenNav(8)}><Text style = {styles.buttonText}>Assessment 8</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.chooseButton} onPress={() => dispatchThenNav(9)}><Text style = {styles.buttonText}>Assessment 9</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.chooseButton} onPress={() => dispatchThenNav(10)}><Text style = {styles.buttonText}>Assessment 10</Text></TouchableOpacity>
        </View>
    )
}

export default Choose

{/* <TestContext.Consumer>
                {state => state ?  <TouchableOpacity onPress= {() => dispatch({type:"pick", payload:1 })}><Text>no state</Text></TouchableOpacity> :console.log(state) 

                }
           
            </TestContext.Consumer> */}