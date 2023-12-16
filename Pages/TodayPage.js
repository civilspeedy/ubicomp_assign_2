import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TitleText from "../Components/TitleTextComponent";
import { globalColours, globalStyle } from "../Styling/GlobalStyles";
import { AntDesign } from "@expo/vector-icons";

import TaskComponent from "../Components/TasksComponent";


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

    return (
        <View style={globalStyle.pageContainer}>
            <TitleText titleName={"TODAY"} />

            <View>
                <AntDesign name='star' size={20} color={'gold'} />
            </View>

            <View style={styles.tasksHeader}>
                <Text style={styles.headerText}>Today's Task:</Text>
            </View>

            <TaskComponent task={dummyTask} />
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