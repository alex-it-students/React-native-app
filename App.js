import {
    FlatList,
    ImageBackground,
    StatusBar,
    View
} from 'react-native';
import React
    , {
    useEffect, useState
} from "react";
import GoalList
    from "./Components/GoalList";
import AddBar
    from "./Components/AddBar";
import TitleApp
    from "./Components/TitleApp";

const sampleGoals =         [
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

const image = {uri: 'https://e0.pxfuel.com/wallpapers/684/261/desktop-wallpaper-material-design-114-color-iphone-cool-for-phones-galaxy-material-ui.jpg'};

export default function App() {

    const [goal, setGoal] = useState([]);
    const [newGoal, setNewGoal] = useState('');

    useEffect(() => {
        setGoal(sampleGoals);
    }, []);


  // fonction qui prend en charge l'input
    const addNewGoal = (text) => {
        setNewGoal(text);
    };

    // fonction qui va ajouter la tâche
    const addGoal = () => {
        setGoal([newGoal, ...goal]);
        setNewGoal("");
    }

    //fonction qui va effacer la tâche
    const editGoal = (index, editedGoal) => {
        setGoal((prevState) => {
            const newState = [...prevState];
            newState[index] = editedGoal;
            return newState;
        });
    };

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
          <ImageBackground source={image} resizeMode="cover">
              <View style={{height:'100%'}}>
              <TitleApp></TitleApp>
              <FlatList
                  style={{ paddingTop:'15%'}}
                  data={goal}
                  renderItem={({ index, item }) => (<GoalList key={index} item={item} index={index} removeGoal={removeGoal} editGoal={editGoal}/>
                  )}
              />
                  <AddBar addGoal={addGoal} addNewGoal={addNewGoal}/>
          </View>

          </ImageBackground>
      </>
  );
}


