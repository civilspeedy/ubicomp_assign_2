import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, LayoutAnimation } from "react-native";
import { globalColours } from "../Styling/GlobalStyles";
import { impactAsync } from "expo-haptics";

export default function TaskComponent({ task }) {
    const [expanded, setexpanded] = useState(false); // https://reactnative.dev/docs/layoutanimation/

    return (
        <View style={styles.container}>
            <Pressable style={{ padding: 10 }}
                onPress={() => {
                    impactAsync();
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                    setexpanded(!expanded);
                }}>
                <View style={styles.pressableTextWrapper}>
                    <Text style={{ marginHorizontal: 10 }}>{task.title}</Text>
                    <Text style={{ marginHorizontal: 10 }}>Due: {task.due}</Text>
                </View>
            </Pressable>

            {expanded && (
                <View style={styles.extendedDisplay}>
                    <Text>Max Words: {task.maxWords}</Text>
                </View>
            )}
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
    },

    pressableTextWrapper: {
        flexDirection: 'row',
    },

    extendedDisplay: {

    },
})