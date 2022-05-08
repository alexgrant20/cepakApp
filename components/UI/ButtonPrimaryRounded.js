import { Pressable, StyleSheet, Text, View } from 'react-native';

function ButtonPrimaryRounded({ children, style }) {
  return (
    <View style={[styles.button, style]}>
      <Pressable android_ripple={{ color: '#333' }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default ButtonPrimaryRounded;

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 25,
    overflow: 'hidden',
    // padding: 4,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
  },
});
