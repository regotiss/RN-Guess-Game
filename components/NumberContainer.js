import React from "react"
import {Text, View, StyleSheet} from "react-native"
import { $primary, $secondary } from "../constants/colors";

const NumberContainer = (props) => (
    <View style={styles.container}>
        <Text style={styles.number}>{props.children}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: $primary,
        color: $secondary,
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    number: {
        fontSize: 20
    }
});
export default NumberContainer;