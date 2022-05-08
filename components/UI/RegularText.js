import { StyleSheet, Text } from 'react-native';

function RegularText({ children }) {
  return <Text style={styles.headingText}>{children}</Text>;
}

export default RegularText;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
