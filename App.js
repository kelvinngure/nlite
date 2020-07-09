import 'react-native-gesture-handler';
import React, { useReducer} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';
import Start from "./components/Start"
import assessments from "./constants/Assessments"
import TestContext from "./TestContext"

const initialState = {
  assessment: null,
}

function reducer (state, action){
  switch(action.type){
    case "pick":
      const data = action.payload // data of the assessment number
      return {
        ...state,
        assessment: {...assessments[data-1]}
      }
    case "close":
      return {
        ...state,
        assessment: null
      }
  }
} 


export default function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <NavigationContainer>
      <TestContext.Provider value = {{state, dispatch}}>
        <Start/>
      </TestContext.Provider>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({

});
