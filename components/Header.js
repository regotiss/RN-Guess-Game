import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { $primary } from '../constants/colors';

const Header = (props) => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: $primary,
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        paddingTop: 36,
    },
    headerTitle: {
        fontSize: 18
    }
});

export default Header;