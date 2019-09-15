import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { $primary } from "../constants/colors";

const MainButton = props => {
  const { children, onPress, style } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.button, ...style }}>
        <Text style={styles.buttonTitle}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: $primary,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 30,
    width: 100
  },
  buttonTitle: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 15
  }
});
export default MainButton;
