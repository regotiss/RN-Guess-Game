import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import Card from "../components/Card";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Guess Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Enter your number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Confirm" />
          <Button title="Reset" />
        </View>
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
  title: {
    fontSize: 20,
    paddingVertical: 20
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 30
  }
});
export default StartGameScreen;
