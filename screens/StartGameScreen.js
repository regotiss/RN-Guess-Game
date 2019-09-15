import React, { useState } from "react";
import {
  View,
  StyleSheet,
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
import MainButton from "../components/MainButton";

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
        <Label>Your Selected Number</Label>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton
          title="START GAME"
          style={{ width: 150 }}
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
            <MainButton
              title="Reset"
              onPress={reset}
              style={{ backgroundColor: $secondary }}
            />
            <MainButton title="Confirm" onPress={confirm} />
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
    width: "90%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 30
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
