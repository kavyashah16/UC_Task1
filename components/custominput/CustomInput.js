import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import Toggle from '../toggle/Toggle';
import Feather from '@expo/vector-icons/Feather'; // Ensure Feather is imported

const CustomInput = ({ value, setValue, placeholder, secureTextEntry, showPassword, setShowPassword }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
      {/* Only show the Toggle if it's a password input */}
      {secureTextEntry && (
        <Toggle 
          isVisible={showPassword}
          onToggle={() => setShowPassword(!showPassword)}
          iconVisible={<Feather name="eye" size={24} color="black" />} 
          iconHidden={<Feather name="eye-off" size={24} color="black" />} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row', // Align the input and toggle horizontally
    alignItems: 'center', // Center vertically
  },
  input: {
    fontSize: 18,
    height: 50,
    flex: 1, // Allow the input to take the available space
  },
});

export default CustomInput;
