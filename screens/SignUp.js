import { StyleSheet, Text, View } from 'react-native';
import BasicInput from '../components/UI/BasicInput';
import ButtonPrimary from '../components/UI/ButtonPrimary';
import H1 from '../components/UI/H1';

function SignUp() {
  return (
    <View style={styles.rootContainer}>
      <H1>Sign Up</H1>
      <Text style={styles.infoText}>
        Let's get you <Text style={styles.highlightText}>started</Text>
      </Text>
      <View style={styles.inputContainer}>
        <BasicInput placeholder="Name" />
        <BasicInput placeholder="Phone" />
        <BasicInput placeholder="Email" />
        <BasicInput placeholder="Password" addOn={{ secureTextEntry: true }} />
      </View>
      <ButtonPrimary
        style={{ backgroundColor: '#6E77F6', borderColor: '#6E77F6' }}
      >
        Sign Up
      </ButtonPrimary>
      <Text style={styles.redirectText}>
        Already have an account?{' '}
        <Text style={styles.redirectHiglight}>Sign In</Text>
      </Text>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 28,
    marginBottom: 40,
  },
  highlightText: {
    color: '#6E77F6',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  redirectText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
  redirectHiglight: {
    fontWeight: 'bold',
  },
});
