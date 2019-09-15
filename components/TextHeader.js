import React from "react";
import { Text, StyleSheet } from "react-native";

const TextHeader = props => {
  return <Text style={styles.title}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    paddingVertical: 20,
    fontFamily: "open-sans-bold"
  }
});
export default TextHeader;
