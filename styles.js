import React from "react"
import { StyleSheet } from "react-native"


export default StyleSheet.create({
    fullview: { // pages template
        flex: 1,
    },
    choose: { // view for choose.js
        flex: 1,
        paddingTop: 5,
        paddingHorizontal: 16,
    }, 
    buttonText: {
        flex: 1,
        textAlign: "center",
        fontSize: 22,
    },
    choose_button: { // assessment button
        flex: 1,
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#C6FBFF",
        marginBottom: 10,
        justifyContent: "center",
        height: "10%",
        alignItems: "center"
    }
})