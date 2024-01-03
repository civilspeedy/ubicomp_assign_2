import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { getTasks } from "../Logic/Database/DatabaseManipulation";
import { useEffect, useState } from "react";
import { globalColours } from "../Styling/GlobalStyles";
import DisplayTasks from "./Output Components/TaskDisplayComponent";

export default function CustomCanendar({ fetchTasks, tasks }) {
    const [date, setDate] = useState(null);

    const pressHandler = (day) => {
        setDate(day.dateString);
        fetchTasks();
    };

    return (
        <View style={styles.container}>
            <Calendar onDayPress={(day) => pressHandler(day)} style={styles.calendar} />
            <View style={styles.textContainer}>
                <Text>Long press a task for options</Text>
            </View>

            <DisplayTasks tasks={tasks} date={date} fetchTasks={fetchTasks} displayType={'both'} />

        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
    calendar: {
        padding: 10,
        backgroundColor: globalColours.backgroundSecondary,
        margin: 10,
        borderRadius: 20,
    },
    textContainer: {
        alignItems: 'center'
    },
});