import React from "react";
import { View, Image, StyleSheet } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Label from "../components/Label";
import TextHeader from "../components/TextHeader";
import { $primary } from "../constants/colors";

const GameOverScreen = (props) => {
  const {numberOfGuesses, userChoice} = props;
  return (
    <View style={styles.screen}>
      <TextHeader>Game Over</TextHeader>
      <Image source={require("../assets/success.png")} style={styles.image}/>
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
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: $primary,
    borderWidth: 2
  }
});
export default GameOverScreen;
