import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
} from 'react-native';
import BasicInput from '../components/UI/BasicInput';
import ButtonPrimary from '../components/UI/ButtonPrimary';
import H1 from '../components/UI/H1';

function SignIn() {
  return (
    <View style={styles.rootContainer}>
      <H1>Sign In</H1>
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <View style={styles.inputContainer}>
        <BasicInput placeholder="Email, phone & username" />
        <BasicInput placeholder="Password" addOn={{ secureTextEntry: true }} />
      </View>
      <Text style={styles.forgetPassword}>Forget Password ?</Text>
      <ButtonPrimary
        style={{ borderColor: '#000008', backgroundColor: '#000000' }}
      >
        Sign In
      </ButtonPrimary>
      <Text style={styles.redirectText}>
        Don't have an account ?{' '}
        <Text style={styles.higlightText}>Sign Up </Text>
      </Text>
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 28,
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 10,
  },
  forgetPassword: {
    textAlign: 'right',
    fontSize: 15,
    marginBottom: 15,
  },

  redirectText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 25,
    color: '#555454',
  },
  higlightText: {
    fontWeight: 'bold',
    color: '#000000',
  },
});
