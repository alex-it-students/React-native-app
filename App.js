import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import React
  from "react";


export default function App() {
  const sampleGoals = [
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ];

  const renderItem = ({ item }) => (
      <Text>{item}</Text>)

  const [text, onChangeText] = React.useState('');

  return (


    <View style={styles.container}>
      <Text style={styles.title}>App.js</Text>
      <FlatList
          data={sampleGoals}
          renderItem={renderItem}
          keyExtractor={(item) => item}
      />
      <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="add a task"
      />
      <Button
          style={styles.button}
          title="Submit"
      />

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
      color: 'red',
      fontWeight: 'bold',
      paddingTop: 100,
      paddingBottom: 50
  },
  button:{
      alignSelf: "stretch"
  }
});
