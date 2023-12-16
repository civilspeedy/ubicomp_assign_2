import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalColours } from "../Styling/GlobalStyles";

export default function TaskComponent({ task }) {
    return (
        <View style={styles.container}>
            <Text style={{ marginHorizontal: 10 }}>{task.title}</Text>
            <Text style={{ marginHorizontal: 10 }}>Due: {task.due}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColours.backgroundSecondary,
        padding: 20,
        borderRadius: 20,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        flexDirection: 'row',
    },

})