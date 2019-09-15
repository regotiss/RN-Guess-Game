import React from "react";
import { View, Image, StyleSheet } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Label from "../components/Label";
import TextHeader from "../components/TextHeader";
import { $primary } from "../constants/colors";

const GameOverScreen = props => {
  const { numberOfGuesses, userChoice } = props;
  return (
    <View style={styles.screen}>
      <TextHeader>Game Over</TextHeader>
      <Image
        source={{
          uri:
            "https://www.tripsavvy.com/thmb/5hPWyUzUQr8zFULduUxItRXg7Uo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/k2-eight-thousanders-569024383df78cafda7e2022.jpg"
        }}
        style={styles.image}
      />
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
