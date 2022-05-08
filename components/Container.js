import { StyleSheet, View } from 'react-native';

function Container({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default Container;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});
