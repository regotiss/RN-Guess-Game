import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameStartedScreen from "./screens/GameStartedScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};
export default function App() {
  const [userChoice, setUserChoice] = useState();
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={err => {
          console.log(err);
        }}
      />
    );
  }
  const startGame = selectedNumber => {
    setUserChoice(selectedNumber);
    setNumberOfGuesses(0);
  };

  const endGame = numberOfGuesses => {
    console.log(numberOfGuesses);
    setNumberOfGuesses(numberOfGuesses);
  };

  let component = <StartGameScreen startGame={startGame} />;
  component = (
    <GameOverScreen userChoice={1} numberOfGuesses={1} />
  );
  if (userChoice) {
    component = <GameStartedScreen userChoice={userChoice} endGame={endGame} />;
  }
  if (numberOfGuesses) {
    component = (
      <GameOverScreen
        userChoice={userChoice}
        numberOfGuesses={numberOfGuesses}
      />
    );
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
