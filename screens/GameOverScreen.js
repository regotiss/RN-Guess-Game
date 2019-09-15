import React from "react";
import { View, Image, StyleSheet } from "react-native";
import TextHeader from "../components/TextHeader";
import { $secondary } from "../constants/colors";
import Label from "../components/Label";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  const { numberOfGuesses, userChoice, resetGame } = props;
  return (
    <View style={styles.screen}>
      <TextHeader>Game Over</TextHeader>
      <Image source={require("../assets/success.png")} style={styles.image} />
      <TextHeader style={styles.resultText}>
        Robot took
        <Label style={styles.resultValue}> {numberOfGuesses}</Label> rounds to
        guess your number
        <Label style={styles.resultValue}> {userChoice}</Label>
      </TextHeader>
      <MainButton
        title="RESET GAME"
        onPress={resetGame}
        style={{ width: 150 }}
      />
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
    borderColor: "black",
    borderWidth: 2
  },
  resultText: {
    textAlign: "center"
  },
  resultValue: {
    color: $secondary,
    fontSize: 25
  }
});
export default GameOverScreen;
