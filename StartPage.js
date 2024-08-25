import { View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import Logo1 from '../../assets/image/Logo1.png';

const StartPage = () => {
    const navigation = useNavigation();
    const {height} =useWindowDimensions();

    const onLoginPressed = () => {
        //console.warn("Login");
        navigation.navigate('Login')
    }

    const onSignInPressed = () => {
        //console.warn("Login");
        navigation.navigate('SignIn')
    }    

  return (
    <View style={styles.root}>
        <Image source={Logo1} style={[styles.logo, {height: height*0.3}]} resizeMode="contain"/>
        

      <CustomButton 
      text={"Login"} 
      onPress={onLoginPressed}
      type="PRIMARY"
      />

      <CustomButton 
      text={"SignIn"} 
      onPress={onSignInPressed}
      type="PRIMARY"
      />
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        padding: 20,
        backgroundColor:'#fff',
        justifyContent:'center',
        paddingHorizontal:100,
    },
    logo:{
        width:'100%',
        maxWidth:300,
        maxHeight:200,
    },
    
})
export default StartPage