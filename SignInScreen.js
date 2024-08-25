import { View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput'
import React, {useState} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Logoo from '../../assets/image/Logoo.png';

const SignInScreen = () => {
    const {height} =useWindowDimensions();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigation = useNavigation();


    const onRegisterPressed = () => {
        //console.warn("Login");
        navigation.navigate('Home')
    };

    const onHaveanaccountPressed = () => {
        //console.warn("Create new account");
        navigation.navigate('Login')
    };

  return (
    <View style={styles.root}>
        <Text style={styles.title}>
            Sign Up
        </Text>

        <Image source={Logoo} style={[styles.logo, {height: height*0.3}]} resizeMode="contain"/>

      <CustomInput 
      placeholder="Username"
      value={userName}
      setValue={setUserName}
      secureTextEntry={false}
      />
      
      <CustomInput 
      placeholder="Email" 
      value={email} 
      setValue={setEmail}
      secureTextEntry={false} 
      toogle={false}
      />

      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword}
      secureTextEntry={true}
      toogle={true} 
      />

      <CustomInput 
      placeholder="Confirm Password" 
      value={passwordRepeat} 
      setValue={setPasswordRepeat}
      secureTextEntry={true} 
      />

      <CustomButton 
      text={"Register"} 
      onPress={onRegisterPressed}
      type="PRIMARY"
      />
      
      <CustomButton 
      text={"Have an account? Login"} 
      onPress={onHaveanaccountPressed}
      type="TERTIARY"
      />

    </View>
  )
}


const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding: 20,
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center'
    },
    title:{
        fontSize:36,
        fontWeight:'bold',
        color:'#000',
        margin:10,
    },
    logo:{
        width:'100%',
        maxWidth:300,
        maxHeight:200,
    }

})
export default SignInScreen