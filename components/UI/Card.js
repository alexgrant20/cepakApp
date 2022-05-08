import { StyleSheet, Text, View } from 'react-native';

function Card({ children, styleCard, styleShadow }) {
  return (
    <View style={[styles.shadow, styleShadow]}>
      <View style={[styles.card, styleCard]}>{children}</View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
  },
  shadow: {
    borderRadius: 10,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginVertical: 5,
  },
});
