import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import Card from "../components/Card";
import { $primary, $secondary } from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Guess Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Enter your number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          keyboardType="number-pad"
          maxLength={2}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Confirm" color={$secondary} />
          </View>
          <View style={styles.button}>
            <Button title="Reset" color={$primary} />
          </View>
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
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 30
  },
  button: {
    width: 100
  },
  input: {
    width: 60,
    textAlign: "center"
  }
});
export default StartGameScreen;
