import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, LayoutAnimation } from "react-native";
import { globalColours, smoothExpansionAnimation } from "../Styling/GlobalStyles";
import { GestureHandlerRootView, LongPressGestureHandler, State } from "react-native-gesture-handler";
import { impactAsync } from "expo-haptics";


export default function TaskComponent({ task }) {
    const [longPressed, isLongPressed] = useState(false);
    // https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/long-press-gesture
    const onLongPress = (event) => {
        if (event.nativeEvent.state === State.BEGAN) {
            impactAsync();
        } else if (event.nativeEvent.state === State.END) {
            console.log('long press!')
        }
    };




    return (
        <GestureHandlerRootView>
            <LongPressGestureHandler
                onGestureEvent={onLongPress}
                onHandlerStateChange={onLongPress}>
                <View style={styles.pressableTextWrapper}>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                    <Text style={styles.taskStatText}>Due: {task.due}</Text>
                </View>
            </LongPressGestureHandler>
        </GestureHandlerRootView>
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