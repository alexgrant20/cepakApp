import { StyleSheet, View } from 'react-native';

function Container({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

export default Container;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});
