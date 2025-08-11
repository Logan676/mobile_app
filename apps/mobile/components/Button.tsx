import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    borderRadius: 9999,
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
