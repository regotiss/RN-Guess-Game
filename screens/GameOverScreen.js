import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NumberContainer from "../components/NumberContainer";

const GameOverScreen = (props) => {
  const {numberOfGuesses, userChoice} = props;
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Number of Guesses: {numberOfGuesses}</Text>
      <Text>Number Choosen</Text>
      <NumberContainer>{userChoice}</NumberContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default GameOverScreen;
