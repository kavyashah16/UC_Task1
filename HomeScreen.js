import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.root}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#fff',
  },
  root:{
    fontSize:24,
    color:'#000',
    alignSelf:'center',
  }

})
export default HomeScreen