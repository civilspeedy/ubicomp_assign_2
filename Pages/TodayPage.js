import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TitleText from "../Components/Output Components/TitleTextComponent";
import { globalColours, globalStyle } from "../Styling/GlobalStyles"

import TaskComponent from "../Components/TaskComponent";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { formatDate } from "../Logic/DateFormater";
import PointsAvailable from "../Components/Output Components/PointsAvailableComponent";


export default function TodayPage() {

    const [points, setPoints] = useState(0);
    const [tasks, setTasks] = useState([]);
    const [taskHeader, setHeader] = useState('');

    useEffect(() => {
        if (tasks.length == 0) {
            setHeader('No Tasks For Today');
        } else {
            setHeader('Tasks for Today:');
        }
    }, [tasks]);

    return (
        <View style={globalStyle.pageContainer}>
            <TitleText titleName={'TODAY'} />

            <PointsAvailable points={points} />

            <View style={styles.tasksHeader}>
                <Text style={styles.headerText}>{taskHeader}</Text>
            </View>

            <GestureHandlerRootView style={styles.taskContainer}>
                <ScrollView>
                    {tasks.map((task, index) => {
                        <TaskComponent key={index} task={task} />
                    })}
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
        fontSize: 30,
        color: globalColours.secondary
    },
});