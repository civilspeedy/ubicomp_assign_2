import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, LayoutAnimation } from "react-native";
import { globalColours, smoothExpansionAnimation } from "../Styling/GlobalStyles";
import { impactAsync } from "expo-haptics";

export default function TaskComponent({ task, due }) {
    const [expanded, setexpanded] = useState(false); // https://reactnative.dev/docs/layoutanimation/
    console.log('in component', task);
    return (
        <View>
            <Pressable style={styles.container}
                onPress={() => {
                    impactAsync();
                    smoothExpansionAnimation();
                    setexpanded(!expanded);
                }}>
                <View style={styles.pressableTextWrapper}>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                    <Text style={styles.taskStatText}>Due: {task.due}</Text>
                </View>
            </Pressable>

            {expanded && (
                <View style={styles.extendedDisplay}>
                    <Text style={styles.taskStatText}>Max Words: {task.maxWords}</Text>
                    <Text style={styles.taskStatText}>Subject: {task.subject}</Text>
                    <Text style={styles.taskStatText}>Task Type: {task.type}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColours.backgroundSecondary,
        padding: 10,
        borderRadius: 20,
        alignItems: 'flex-start',
        marginHorizontal: 20,
        marginVertical: 5
    },
    taskTitle: {
        color: globalColours.secondary,
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center'
    },
    taskStatText: {
        fontSize: 15,
        alignSelf: 'center',

    },
    extendedDisplay: {
        backgroundColor: globalColours.tertiary,
        borderRadius: 20,
        marginHorizontal: 20,
        padding: 5,

    },
})