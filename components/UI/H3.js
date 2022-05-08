import { StyleSheet, Text } from 'react-native';

function H3({ children, style }) {
  return <Text style={[styles.headingText, style]}>{children}</Text>;
}

export default H3;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
