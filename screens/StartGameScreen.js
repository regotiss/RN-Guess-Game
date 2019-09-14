import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Guess Game</Text>
      <View style={styles.inputContainer}>
        <Text>Enter your number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Confirm" />
          <Button title="Reset" />
        </View>
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
  title: {
    fontSize: 20,
    paddingVertical: 20
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 30
  }
});
export default StartGameScreen;
