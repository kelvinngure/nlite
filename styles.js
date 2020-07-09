import React from "react"
import { StyleSheet, Dimensions } from "react-native"


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
    choose_button: { // assessment button
        flex: 1,
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#C6FBFF",
        marginBottom: 10,
        justifyContent: "flex-end",
        height: "10%",
        alignItems: "center"
    },
    startButton: {
        height: 50,
        width: "40%",
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 100,
        backgroundColor: "#C6FBFF",
        alignItems: "center",
        justifyContent: "center"
    },
    startButtonWord: {
        fontSize: 30,
    },
    hiWord: {
        marginTop: 30,
        fontSize: 40
    }
    hiPage: {
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
    }
})