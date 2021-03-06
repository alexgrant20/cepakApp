import { Pressable, StyleSheet, Text, View } from 'react-native';

function ButtonPrimaryRounded({ children, style }) {
  return (
    <View style={[styles.button, style]}>
      <Pressable
        style={styles.buttonContainer}
        android_ripple={{ color: '#333' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default ButtonPrimaryRounded;

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 5,
    overflow: 'hidden',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  buttonContainer: {
    padding: 4,
  },
});
