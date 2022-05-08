import { Pressable, StyleSheet, Text, View } from 'react-native';
import Container from '../components/Container';
import H2 from '../components/UI/H2';
import RegularText from '../components/UI/RegularText';

function Dashboard() {
  return (
    <Container>
      <Text style={styles.date}>Saturday, Mar 20 2022</Text>
      <H2>Welcome Philip!</H2>
      <RegularText>Have a nice day</RegularText>
      <View>
        <Text>Annoucement</Text>
        <Text>
          Perayaan Grand Opening, CepakApp memberikan diskon sebesar 80% kepada
          seluruh member
        </Text>
        <Pressable>
          <Text>More</Text>
        </Pressable>
      </View>
    </Container>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  date: {
    color: '#474747',
    textAlign: 'center',
    marginBottom: 25,
  },
});
