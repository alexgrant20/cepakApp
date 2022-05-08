import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

function WelcomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/splash-try.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.headingText}>CepakApp</Text>
      <Text style={styles.infoText}>Your shaving friend in daily need</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, styles.button1]}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.button2]}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button1: {
    backgroundColor: '#000000',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  button2: {
    backgroundColor: '#6E77F6',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  headingText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 24,
  },
});
