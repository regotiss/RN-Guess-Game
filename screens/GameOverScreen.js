import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Label from "../components/Label";
import TextHeader from "../components/TextHeader";

const GameOverScreen = (props) => {
  const {numberOfGuesses, userChoice} = props;
  return (
    <View style={styles.screen}>
      <TextHeader>Game Over</TextHeader>
      <Label>Number of Guesses: {numberOfGuesses}</Label>
      <Label>Number Choosen</Label>
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
