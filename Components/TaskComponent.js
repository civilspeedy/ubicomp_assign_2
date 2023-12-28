import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, LayoutAnimation, Alert } from "react-native";
import { globalColours, smoothExpansionAnimation } from "../Styling/GlobalStyles";
import { GestureHandlerRootView, LongPressGestureHandler, State } from "react-native-gesture-handler";
import { impactAsync } from "expo-haptics";


export default function TaskComponent({ task }) {
    const [isExtended, setExtended] = useState(false);
    // https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/long-press-gesture
    const onLongPress = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            impactAsync();

        } else if (event.nativeEvent.state === State.END) {
            smoothExpansionAnimation();
            setExtended(!isExtended);
        } else if (event.nativeEvent.state === State.CANCELLED) {
            Alert.alert("Long Press for menu")
        }
    };

    return (
        <View style={styles.container}>
            <LongPressGestureHandler
                onGestureEvent={onLongPress}
                onHandlerStateChange={onLongPress}>
                <View style={styles.pressableTextWrapper}>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                    <Text style={styles.taskStatText}>Due: {task.due}</Text>
                </View>
            </LongPressGestureHandler>
            {isExtended && (
                <Pressable>
                    <Text>test</Text>
                </Pressable>
            )}
        </View>
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