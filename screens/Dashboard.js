import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Container from '../components/Container';
import ButtonPrimaryRounded from '../components/UI/ButtonPrimaryRounded';
import Card from '../components/UI/Card';
import H2 from '../components/UI/H2';
import H3 from '../components/UI/H3';
import H4 from '../components/UI/H4';
import RegularText from '../components/UI/RegularText';

function Dashboard() {
  return (
    <ScrollView>
      <Container style={styles.rootContainer}>
        <Text style={styles.date}>Saturday, Mar 20 2022</Text>
        <H2>Welcome Philip!</H2>
        <RegularText>Have a nice day</RegularText>
        <Card styleCard={{ backgroundColor: '#ffffff' }}>
          <H3>Annoucement</H3>
          <RegularText>
            Perayaan Grand Opening, CepakApp memberikan diskon sebesar 80%
            kepada seluruh member
          </RegularText>
          <ButtonPrimaryRounded
            style={{
              borderColor: '#ffffff',
              backgroundColor: '#6E77F6',
              marginTop: 10,
            }}
          >
            More
          </ButtonPrimaryRounded>
        </Card>
        <H4 style={styles.mt}>My History</H4>
        <View style={styles.mt}>
          <Card styleCard={[styles.history, styles.success]}>
            <View>
              <Text style={styles.historyBoldText}>Shave</Text>
              <Text style={styles.historyNormalText}>02 January 2022</Text>
            </View>
            <View>
              <Text style={styles.historyBoldText}>Success</Text>
            </View>
          </Card>
          <Card styleCard={styles.history}>
            <View>
              <Text style={styles.historyBoldText}>Shave</Text>
              <Text style={styles.historyNormalText}>02 January 2022</Text>
            </View>
            <View>
              <Text style={styles.historyBoldText}>Pending</Text>
              <Text style={styles.historyNormalText}>Payment ends 1h</Text>
            </View>
          </Card>
          <Card styleCard={[styles.history, styles.success]}>
            <View>
              <Text style={styles.historyBoldText}>Shave</Text>
              <Text style={styles.historyNormalText}>02 January 2022</Text>
            </View>
            <View>
              <Text style={styles.historyBoldText}>Active</Text>
              <Text style={styles.historyNormalText}>Paid</Text>
            </View>
          </Card>
        </View>
        <View>
          <View style={styles.historyOrderContainer}>
            <View>
              <H4 style={styles.mt}>History Order</H4>
              <RegularText>Recent Order</RegularText>
            </View>
            <ButtonPrimaryRounded
              style={{
                borderColor: '#ffffff',
                backgroundColor: '#6E77F6',
                marginTop: 10,
              }}
            >
              See All
            </ButtonPrimaryRounded>
          </View>
          <View style={styles.HoItems}>
            <View style={styles.HoItem}>
              <Image />
              <Text>0.15km</Text>
              <Text>Asgar Bogor</Text>
              <View>
                <Image />
                <Text>4.0</Text>
              </View>
            </View>
          </View>
        </View>
      </Container>
    </ScrollView>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 10,
  },
  date: {
    color: '#474747',
    textAlign: 'center',
    marginBottom: 25,
  },
  history: {
    backgroundColor: '#BBBBBB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  historyBoldText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  historyNormalText: {
    fontSize: 10,
    color: '#ffffff',
  },
  success: {
    backgroundColor: '#5DB075',
  },
  mt: {
    marginVertical: 10,
  },
  historyOrderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HoItems: {
    flexDirection: 'row',
  },
  HoItem: {
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
