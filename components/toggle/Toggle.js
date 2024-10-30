import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Toggle = ({ isVisible, onToggle, iconVisible, iconHidden }) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.toggleContainer}>
      {isVisible ? iconVisible : iconHidden}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    padding: 10,
  },
});

export default Toggle;
