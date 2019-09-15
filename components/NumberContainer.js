import React from "react";
import { View, StyleSheet } from "react-native";
import { $primary, $secondary } from "../constants/colors";
import Label from "./Label";

const NumberContainer = props => (
  <View style={{...styles.container, ...props.style}}>
    <Label style={styles.number}>{props.children}</Label>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: $primary,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10
  },
  number: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});
export default NumberContainer;
