import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

export default function App() {
  if (1 + 1 != 2) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        {/* <WelcomeScreen /> */}
        <SignIn />
        {/* <SignUp /> */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
