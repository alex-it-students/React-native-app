
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    Button,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import React
  from "react";


export default function App() {

    const [goal, setGoal] = React.useState(
        [
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
        ]
    );
    const [newGoal, setNewGoal] = React.useState("");

  // fonction qui va render la ligne
  const renderItem = ({ index, item }) => (
      <View style={{ flexDirection:'row' }}>
      <Text>{item} </Text>
          <TouchableOpacity onPress={()=> removeGoal(index)}>
              <Text>X</Text>
          </TouchableOpacity>
      </View>
  );

  // fonction qui prend en charge l'input
    const textChange = (text) => {
        setNewGoal(text);
    };

    // fonction qui va ajouter la tâche
    const addGoal = () => {
        setGoal([...goal, newGoal]);
        setNewGoal("");
    }

    //fonction qui va effacer la tâche
    const removeGoal = (index) => {
        setGoal((prevState) => {
            const newState = [...prevState];
            newState.splice(index, 1);
            return newState;
        });
    };

  return (
      <>
          <StatusBar style="auto"></StatusBar>
          <View style={styles.container}>
              <Text style={styles.title}>App.js</Text>
              <FlatList
                  data={goal}
                  renderItem={renderItem}
              />

          </View>
          <View style={{ flexDirection:'row' }}>
              <TextInput
                  style={styles.input}
                  onChangeText={textChange}
                  value={newGoal}
                  placeholder="Add a Task"
              />
              <Button style={styles.button} title="Submit" onPress={addGoal}/>
          </View>
      </>



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
