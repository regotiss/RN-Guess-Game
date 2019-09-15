import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const generatedNumber = Math.floor(Math.random() * (max - min) + min);
  if (generatedNumber === exclude) {
    return generateNumber(min, max, exclude);
  }
  return generatedNumber;
};
const GameStartedScreen = props => {
  const { userChoice, endGame } = props;
  const [currentGuess, setCurrentGuess] = useState(
    generateNumber(1, 100, userChoice)
  );
  const [numberOfGuesses, setNumberOfGuesses] = useState(1);

  const minRef = useRef(1);
  const maxRef = useRef(100);

  const nextGuess = direction => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "upper" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!!", "You know that this is wrong", [
        { text: "SORRY", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      maxRef.current = currentGuess;
    } else {
      minRef.current = currentGuess;
    }
    const nextGuess = generateNumber(
      minRef.current,
      maxRef.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setNumberOfGuesses(numberOfGuesses + 1);
  };

  useEffect(() => {
    console.log("render--");
    console.log(userChoice, currentGuess, userChoice === currentGuess);

    if (userChoice === currentGuess) {
      endGame(numberOfGuesses);
    }
  }, [userChoice, currentGuess, endGame]);

  return (
    <View style={styles.screen}>
      <Text>Computer's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => nextGuess("lower")} />
        <Button title="UPPER" onPress={() => nextGuess("upper")} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    width: "80%"
  }
});

export default GameStartedScreen;
