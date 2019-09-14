import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Keyboard, TouchableWithoutFeedback } from "react-native";
import Card from "../components/Card";
import { $primary, $secondary } from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const onInputChange = inputText => {
    const updatedText = inputText.replace(/[^0-9]/g, "");
    setEnteredValue(updatedText);
  };

  const reset = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const confirm = () => {
    const enteredNumber = Number.parseInt(enteredNumber);
    if(enteredNumber == NaN || enteredNumber <= 0 || enteredNumber > 99) {
        return;
    }
    setConfirmed(true);
    setSelectedNumber(enteredValue);
  };
  let confirmedMsg;
  if(confirmed) {
      confirmedMsg = <Text>Choosen Number: {selectedNumber}</Text>
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            onChangeText={onInputChange}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Confirm" color={$secondary} onPress={confirm}/>
            </View>
            <View style={styles.button}>
              <Button title="Reset" color={$primary} onPress={reset}/>
            </View>
          </View>
          {confirmedMsg}
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
