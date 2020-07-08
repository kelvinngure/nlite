import React, { useContext } from "react"
import { View, TouchableOpacity, Text, Picker } from "react-native"
import styles from "../styles"
import TestContext from "../TestContext"


const Choose = () => {

    const {dispatch} = useContext(TestContext)

    return(
        <View style = {styles.choose}>
            <TestContext.Consumer>
                {state => state ?  <TouchableOpacity onPress= {() => dispatch({type:"pick", payload:1 })}><Text>no state</Text></TouchableOpacity> :console.log(state) 

                }
           
            </TestContext.Consumer>
        </View>
    )
}

export default Choose

// <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 1</Text></TouchableOpacity>
// <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 2</Text></TouchableOpacity>
// <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 3</Text></TouchableOpacity>
// <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 4</Text></TouchableOpacity>
// <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 5</Text></TouchableOpacity>
// <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 6</Text></TouchableOpacity>
// <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 7</Text></TouchableOpacity>
// <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 8</Text></TouchableOpacity>
// <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 9</Text></TouchableOpacity>
// <TouchableOpacity style = {styles.choose_button}><Text style = {styles.buttonText}>Assessment 10</Text></TouchableOpacity>