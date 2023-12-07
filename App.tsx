import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
} from 'react-native';
import QuestionCard from './components/QuestionCard';
import {questions} from './data/questions';

function App(): JSX.Element {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.navbar}>
        <Image
          style={styles.navbarImage}
          source={{
            uri: 'https://mintheinkha-lathtaukbaydin.netlify.app/images/mintheinkha_logo.png',
          }}
        />
        <Text style={styles.title}>Min Thein Kha </Text>
      </View>
      <Text style={styles.searchInputLable}>Search Questions</Text>
      <TextInput style={styles.searchInput} />

      {questions.map(question => (
        <QuestionCard
          key={question.questionNo}
          questionNo={question.questionNo}
          questionName={question.questionName}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F1F7FA',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#67B2D0',
    borderWidth: 1,
    borderColor: '#4399BD',
    padding: 3,
  },

  navbarImage: {
    width: 45,
    height: 45,
    marginHorizontal: 3,
    marginBottom: 3,
    borderRadius: 20,
  },
  title: {
    color: '#0B161A',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
    marginHorizontal: 6,
  },

  searchInputLable: {
    color: '#0B161A',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 8,
  },

  searchInput: {
    borderWidth: 1,
    borderColor: '#4399BD',
    padding: 8,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    color: '#0B161A',
  },
});
export default App;
