import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const CustomButton = ({onPress, text, type}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  )
}


const styles =StyleSheet.create({
    container:{        
        width:'100%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
    },
    
    container_PRIMARY:{
        backgroundColor:'#f75959',
    },

    container_TERTIARY:{
    },

    text:{
        fontWeight:'bold',
        color:'white',
        
    },

    text_TERTIARY:{
        color:'gray',
    },
})
export default CustomButton