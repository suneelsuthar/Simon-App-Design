import React from "react";
import { View, TouchableOpacity, Text, StyleSheet,TextInput } from 'react-native'
import theme from "../../../theme";

const Input = ({value,onChangeText,placeholder}) => {
    return (
        <TextInput value={value} placeholder={placeholder} style={styles._input} onChangeText={(e)=>onChangeText && onChangeText(e)} />
    )
}




const styles = StyleSheet.create({
    _input: {
        backgroundColor:theme.greyLight,
        height:59,
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8,
        marginVertical:14,
        fontFamily:theme.medium,
        padding:10,
        fontSize:16,
        elevation:1
    },
   
})

export default Input