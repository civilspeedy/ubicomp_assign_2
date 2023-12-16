import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TitleText from "../Components/TitleTextComponent";
import { globalColours, globalStyle } from "../Styling/GlobalStyles";
import { AntDesign } from "@expo/vector-icons";

import TaskComponent from "../Components/TasksComponent";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";


export default function TodayPage() {
    const dummyTask = {
        title: 'Essay',
        due: '2023-03-12',
        maxWords: 1000,
        wordCount: 0,
        subject: 'ubi comp',
        type: 'essay',
    }

    const [points, setPoints] = useState(0);
    const [tasks, setTasks] = useState(null);
    const [taskHeader, setHeader] = useState('');


    useEffect(() => {
        if (tasks == null) {
            setHeader('No Tasks For Today Yet');
        } else {
            setHeader('Tasks for Today:');
        }
    }, [tasks]);

    return (
        <View style={globalStyle.pageContainer}>
            <TitleText titleName={'TODAY'} />

            <View>
                <AntDesign name='star' size={20} color={'gold'} />
            </View>

            <View style={styles.tasksHeader}>
                <Text style={styles.headerText}>{taskHeader}</Text>
            </View>

            <GestureHandlerRootView style={styles.taskContainer}>
                <ScrollView>
                    <TaskComponent task={dummyTask} />
                    <TaskComponent task={dummyTask} />
                    <TaskComponent task={dummyTask} />
                    <TaskComponent task={dummyTask} />
                    <TaskComponent task={dummyTask} />
                    <TaskComponent task={dummyTask} />
                    <TaskComponent task={dummyTask} />
                </ScrollView>
            </GestureHandlerRootView>


        </View>
    );
};

const styles = StyleSheet.create({
    tasksHeader: {
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: globalColours.secondary
    },
});