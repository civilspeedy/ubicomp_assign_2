import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, LayoutAnimation, Alert } from "react-native";
import { globalColours, smoothExpansionAnimation } from "../Styling/GlobalStyles";
import { impactAsync } from "expo-haptics";
import { GestureDetector, Gesture } from "react-native-gesture-handler";


export default function TaskComponent({ task }) {
    const [isExtended, setExtended] = useState(false);
    // https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/long-press-gesture

    const whenLongPress = Gesture.LongPress().onEnd((e, success) => {
        impactAsync();
        smoothExpansionAnimation();
        setExtended(!isExtended)
    });


    return (
        <View style={styles.container}>
            <GestureDetector
                gesture={whenLongPress}
                shouldCancelWhenOutside={true}
                onPressOut={() => impactAsync()}>
                <View style={styles.pressableTextWrapper}>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                    <Text style={styles.taskStatText}>Due: {task.due}</Text>
                </View>
            </GestureDetector>
            {
                isExtended && ( //needs filling
                    <Pressable>
                        <Text>test</Text>
                    </Pressable>
                )
            }
        </View >
    );
};

const styles = StyleSheet.create({
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
    pressableTextWrapper: {
        flex: 1,
        backgroundColor: globalColours.backgroundSecondary,
        padding: 10,
        borderRadius: 20,
        alignItems: 'flex-start',
        marginHorizontal: 20,
        marginVertical: 5,
    }
})