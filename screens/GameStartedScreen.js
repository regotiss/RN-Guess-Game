import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import { $secondary, $primary } from "../constants/colors";
import TextHeader from "../components/TextHeader";
import { Ionicons } from "@expo/vector-icons";
import Label from "../components/Label";

const generateNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const generatedNumber = Math.floor(Math.random() * (max - min) + min);
  if (generatedNumber === exclude) {
    return generateNumber(min, max, exclude);
  }
  return generatedNumber;
};

const renderItem = (item, number) => (
  <View key={item} style={styles.listItem}>
    <Label>#{number}</Label>
    <Label>{item}</Label>
  </View>
);

const GameStartedScreen = props => {
  const { userChoice, endGame } = props;
  const guess = generateNumber(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(guess);
  const [pastGuesses, setPastGuesses] = useState([guess]);

  const minRef = useRef(1);
  const maxRef = useRef(100);

  const nextGuess = direction => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!!", "You know that this is wrong", [
        { text: "SORRY", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      maxRef.current = currentGuess;
    } else {
      minRef.current = currentGuess + 1;
    }
    const nextGuess = generateNumber(
      minRef.current,
      maxRef.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setPastGuesses(pastGuesses => [nextGuess, ...pastGuesses]);
  };

  useEffect(() => {
    if (userChoice === currentGuess) {
      endGame(pastGuesses.length);
    }
  }, [userChoice, currentGuess, endGame]);

  return (
    <View style={styles.screen}>
      <TextHeader>Robot's Guess</TextHeader>
      <NumberContainer style={{ backgroundColor: $secondary }}>
        {currentGuess}
      </NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => nextGuess("lower")}>
          <Ionicons name="md-remove" size={22} color="white" />
        </MainButton>
        <MainButton onPress={() => nextGuess("greater")}>
          <Ionicons name="md-add" size={22} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderItem(guess, pastGuesses.length - index)
          )}
        </ScrollView>
      </View>
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
  },
  listContainer: {
    flex: 1,
    width: "80%"
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  listItem: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    borderColor: $primary,
    borderWidth: 1,
    padding: 20,
    marginVertical: 10
  }
});

export default GameStartedScreen;
