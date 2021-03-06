import { StyleSheet, Text } from 'react-native';

function H1({ children, style }) {
  return <Text style={[styles.headingText, style]}>{children}</Text>;
}

export default H1;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 37,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
