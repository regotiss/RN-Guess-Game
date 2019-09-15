import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import Card from "../components/Card";
import { $primary, $secondary } from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import TextHeader from "../components/TextHeader";
import Label from "../components/Label";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const onInputChange = inputText => {
    const updatedText = inputText.replace(/[^0-9]/g, "");
    setEnteredValue(updatedText);
  };

  const reset = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirm = () => {
    const enteredNumber = Number.parseInt(enteredValue);
    if (
      Number.isNaN(enteredNumber) ||
      enteredNumber <= 0 ||
      enteredNumber > 99
    ) {
      Alert.alert("Invalid Number", "Please enter number between 1 to 99", [
        { text: "OK", style: "destructive", onPress: reset }
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(enteredNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };
  let confirmedMsg;
  if (confirmed) {
    confirmedMsg = (
      <Card style={styles.summaryContainer}>
        <Text>Your Selected Number</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="START GAME"
          color={$primary}
          onPress={() => props.startGame(selectedNumber)}
        />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <TextHeader>Start Guess Game</TextHeader>
        <Card style={styles.inputContainer}>
          <Label>Enter your number</Label>
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
              <Button title="Reset" color={$secondary} onPress={reset} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" color={$primary} onPress={confirm} />
            </View>
          </View>
        </Card>
        {confirmedMsg}
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
  },
  summaryContainer: {
    marginTop: 20,
    width: "80%",
    alignItems: "center"
  }
});
export default StartGameScreen;
