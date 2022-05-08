import { StyleSheet, Text } from 'react-native';

function H2({ children }) {
  return <Text style={styles.headingText}>{children}</Text>;
}

export default H2;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
