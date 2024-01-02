import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TitleText from "../Components/Output Components/TitleTextComponent";
import { globalStyle } from "../Styling/GlobalStyles"

import PointsAvailable from "../Components/Output Components/PointsAvailableComponent";
import { getTasks } from "../Logic/Database/DatabaseManipulation";
import DisplayTasks from "../Components/Output Components/taskDisplayComponent";
import { formateDateForSQL } from "../Logic/DateFormater";


export default function TodayPage() {
    const [points, setPoints] = useState(0);
    const [tasks, setTasks] = useState([]);
    const [dueToday, setDueToday] = useState([]);
    const [startToday, setStartToday] = useState([]);

    const fetchTasks = async () => {
        try {
            const fetchedTasks = await getTasks();
            setTasks(fetchedTasks);
        } catch (e) {
            console.error(e);
        };
    };

    useEffect(() => {
        fetchTasks();

    }, []);


    const today = new Date();

    // Get day, month, and year
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Note: Month is zero-based
    const year = String(today.getFullYear()).slice(2); // Use slice(2) to get the last two digits of the year

    // Format the date as dd-mm-yy
    const date = `${day}-${month}-${year}`;

    console.log('date:', date);

    return (
        <View style={globalStyle.pageContainer}>
            <TitleText titleName={'TODAY'} />

            <PointsAvailable points={points} />

            <DisplayTasks tasks={tasks} date={date} fetchTasks={fetchTasks} />
        </View>
    );
};

const styles = StyleSheet.create({
});