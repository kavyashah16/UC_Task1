import { View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput'
import React, {useState} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/image/Logo.png';

const LoginScreen = () => {
  const {height} =useWindowDimensions();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ })
    const navigation = useNavigation();

    const onLoginPressed = () => {
        //console.warn("Login");
        navigation.navigate('Home')
    };

    const onForgotPasswordPressed = () => {
        //console.warn("Forgot Password");
    };

    const onCreateOnePressed = () => {
        //console.warn("Create new account");
        navigation.navigate('SignIn')
    };

    const validateForm = () => {
      let errors = {};
      
      if (!email) errors.email = "Email is required";
      if (!password) errors.password = "Password is required";
      
      setError(errors);

      return Object.keys(errors).length === 0;
    };



  return (
    <View style={styles.root}>
      <Text style={styles.title}>
            Login
        </Text>
      <Image source={Logo} style={[styles.logo, {height: height*0.3}]} resizeMode="contain" />

      <CustomInput 
      placeholder="Email" 
      value={email} 
      setValue={setEmail}
      secureTextEntry={false} 
      />

      {
        errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null
      }

      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword}
      secureTextEntry={true} 
      />

      {
        errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
      }

      <CustomButton 
      text={"Login"} 
      onPress={onLoginPressed}
      type="PRIMARY"
      />

      <CustomButton 
      text={"Forgot password?"} 
      onPress={onForgotPasswordPressed}
      type="TERTIARY"
      />

      <CustomButton 
      text={"Don't have an account? Create one"} 
      onPress={onCreateOnePressed}
      type="TERTIARY"
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
    },
    title:{
      fontSize:36,
      fontWeight:'bold',
      color:'#000',
      margin:10,
    },
    logo:{
      width:'70%',
      maxWidth:300,
      maxHeight:200,
    },

    errorText:{
      color: "red",
      marginBottom: 10,
    }
})
export default LoginScreen