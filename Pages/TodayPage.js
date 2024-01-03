import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TitleText from "../Components/Output Components/TitleTextComponent";
import { globalStyle } from "../Styling/GlobalStyles"

import PointsAvailable from "../Components/Output Components/PointsAvailableComponent";
import DisplayTasks from "../Components/Output Components/TaskDisplayComponent";


export default function TodayPage({ fetchTasks, tasks }) {
    const [points, setPoints] = useState(0);
    const [dueToday, setDueToday] = useState([]);
    const [startToday, setStartToday] = useState([]);

    let date = new Date();
    date = date.toISOString().split('T')[0];
    console.log(date);

    return (
        <View style={globalStyle.pageContainer}>
            <TitleText titleName={'TODAY'} />

            <PointsAvailable points={points} />

            <DisplayTasks tasks={tasks} date={date} fetchTasks={fetchTasks} />

        </View>
    );
};
