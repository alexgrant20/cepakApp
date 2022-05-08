import { Pressable, StyleSheet, Text } from 'react-native';

function ButtonPrimary({ children, style }) {
  return (
    <Pressable
      style={[styles.button, style]}
      android_ripple={{ color: '#333' }}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

export default ButtonPrimary;

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});
