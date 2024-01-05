import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, LayoutAnimation, Alert } from "react-native";
import { globalColours, smoothExpansionAnimation } from "../Styling/GlobalStyles";
import { impactAsync } from "expo-haptics";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteTask, setTaskDone } from "../Logic/Database/DatabaseManipulation";
import EditModal from "./EditModalComponent";
import MoreButton from "./Output Components/MoreButtonComponent";


export default function TaskComponent({ task, fetchTasks }) {
    const [isExtended, setExtended] = useState(false);
    // https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/long-press-gesture

    const whenLongPress = Gesture.LongPress().onEnd((e, success) => {
        smoothExpansionAnimation();
        impactAsync();
        setExtended(!isExtended)
    });

    const promptDeleteTask = () => {
        Alert.alert('Delete Task?',
            'Are you sure you want to delete this Task?',
            [{ text: 'No', },
            {
                text: 'yes', onPress: () => {
                    deleteTask(task.title);
                    fetchTasks();
                }
            }
            ])
    };

    const doneTask = () => {
        setTaskDone(task, true);
        fetchTasks();
    };

    return (
        <View style={styles.container}>
            <GestureDetector
                gesture={whenLongPress}
                shouldCancelWhenOutside={true}
                onPressOut={() => impactAsync()}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.pressableTextWrapper}>
                        <Text style={styles.taskTitle}>{task.title}</Text>
                        <Text style={styles.taskStatText}>{task.due}</Text>
                    </View>
                    {!isExtended && (
                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <MoreButton task={task} />

                            <Pressable style={styles.doneButton} onPress={doneTask}>
                                <MaterialCommunityIcons
                                    name='check'
                                    size={70} />
                            </Pressable>
                        </View>
                    )}

                </View>
            </GestureDetector >
            {isExtended && (
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <EditModal task={task} fetchTasks={fetchTasks} />

                    <Pressable style={styles.deleteButton} onPress={promptDeleteTask}>
                        <MaterialCommunityIcons
                            name="delete-outline"
                            size={70}
                            style={{ alignSelf: 'center' }} />
                    </Pressable>
                </View>
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
    pressableTextWrapper: {
        backgroundColor: globalColours.backgroundSecondary,
        padding: 10,
        borderRadius: 20,
        alignItems: 'flex-start',
    },
    container: {
        backgroundColor: globalColours.backgroundSecondary,
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 5,
        flexDirection: 'row',
        borderRadius: 20,
    },
    deleteButton: {
        backgroundColor: 'red',
        flex: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    doneButton: {
        backgroundColor: globalColours.tertiary,
        flex: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
})