import { StyleSheet, Text } from 'react-native';

function H4({ children, style }) {
  return <Text style={[styles.headingText, style]}>{children}</Text>;
}

export default H4;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
