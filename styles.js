import React from "react"
import { StyleSheet, Dimensions } from "react-native"
import Colors from "./constants/Colors"

export default StyleSheet.create({
    fullview: { // pages template
        flex: 1
    },
    choose: { // view for choose.js
        flex: 1,
        paddingTop: 5,
        paddingHorizontal: 16
    }, 
    buttonText: {
        flex: 1,
        textAlign: "center",
        fontSize: 22
    },
    chooseButton: { // assessment button
        flex: 1,
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: Colors.appBlue,
        marginBottom: 10,
        justifyContent: "flex-end",
        height: "10%",
        alignItems: "center"
    },
    startButton: { //"Start" button
        height: 50,
        width: "40%",
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 100,
        backgroundColor: Colors.appBlue,
        alignItems: "center",
        justifyContent: "center"
    },
    startButtonWord: { //Styling for "Start" on button
        fontSize: 30,
    },
    hiWord: { //Hi! at beginning of assessment
        marginTop: 30,
        fontSize: 40
    },
    hiPage: { //
        alignItems: "center",
        flex: 1
    },
    imageContainer: {
        //resizeMode: "center",
        marginTop: 100,
        height: 400,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        marginTop: 20,
        marginBottom: 30,
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 5,
        width: "100%",
        height: "40%",
        flex: 1, 
        alignItems: "center"
    },
    box_content: {
        fontSize: 12,
        alignItems: "center",
        color: "#000000"
    },
    paragraphChoose: {
        flex:1,
        paddingHorizontal: 16,
        
    },
    paragraphChosen: {
        flex:1,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 5,
        width: "100%",
        height: "40%",
        flex: 1, 
        justifyContent: "center",
        alignItems: "center"
    }



})