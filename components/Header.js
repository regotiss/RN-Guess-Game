import React from "react";
import { View, StyleSheet } from "react-native";
import { $primary } from "../constants/colors";
import Label from "./Label";

const Header = props => (
  <View style={styles.header}>
    <Label style={styles.headerTitle}>{props.title}</Label>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: $primary,
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    paddingTop: 36
  },
  headerTitle: {
    fontSize: 18
  }
});

export default Header;
