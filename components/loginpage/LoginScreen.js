import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../custominput/CustomInput';
import React, { useState } from 'react';
import CustomButton from '../custombutton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // Manage password visibility
  const navigation = useNavigation();

  const onLoginPressed = () => {
    if (validateForm()) {
      navigation.navigate('Home');
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Login</Text>

      <CustomInput 
        placeholder="Email" 
        value={email} 
        setValue={setEmail}
        secureTextEntry={false} // No toggle for email input
      />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

      <CustomInput 
        placeholder="Password" 
        value={password} 
        setValue={setPassword}
        secureTextEntry={!showPassword} // Toggle visibility based on state
        showPassword={showPassword} // Pass the showPassword state
        setShowPassword={setShowPassword} // Pass the function to toggle visibility
      />
      {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

      <CustomButton 
        text={"Login"} 
        onPress={onLoginPressed}
        type="PRIMARY"
      />
      <CustomButton 
        text={"Forgot password?"} 
        onPress={() => { /* Implement forgot password functionality */ }}
        type="TERTIARY"
      />
      <CustomButton 
        text={"Don't have an account? Create one"} 
        onPress={() => navigation.navigate('SignIn')}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  }
});

export default LoginScreen;
