import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";
import TextHeader from "../components/TextHeader";
import { $secondary } from "../constants/colors";
import Label from "../components/Label";

const GameOverScreen = props => {
  const { numberOfGuesses, userChoice, resetGame } = props;
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
      <Label style={styles.resultText}>
        Robot took
        <Label style={styles.resultValue}> {numberOfGuesses}</Label> rounds to
        guess your number
        <Label style={styles.resultValue}> {userChoice}</Label>
      </Label>
      <Button title="RESET GAME" onPress={resetGame} />
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
    marginVertical: 20
  },
  resultValue: {
    fontWeight: "bold",
    fontSize: 20,
    color: $secondary
  }
});
export default GameOverScreen;
