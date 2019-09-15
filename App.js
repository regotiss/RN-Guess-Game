import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameStartedScreen from "./screens/GameStartedScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userChoice, setUserChoice] = useState();
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  const startGame = selectedNumber => {
    setUserChoice(selectedNumber);
    setNumberOfGuesses(0);
  };

  const endGame = numberOfGuesses => {
    console.log(numberOfGuesses);
    setNumberOfGuesses(numberOfGuesses);
  };

  let component = <StartGameScreen startGame={startGame} />;
  if (userChoice) {
    component = <GameStartedScreen userChoice={userChoice} endGame={endGame} />;
  }
  if(numberOfGuesses) {
    component = <GameOverScreen />
  } 
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {component}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
