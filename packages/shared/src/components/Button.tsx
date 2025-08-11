import React from 'react';
import {TouchableOpacity, Text, StyleSheet, GestureResponderEvent} from 'react-native';

interface ButtonProps {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
}

export default function Button({label, onPress}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 9999,
    backgroundColor: '#2563eb',
    alignItems: 'center',
  },
  label: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
});
