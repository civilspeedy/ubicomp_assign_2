import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { getTasks } from "../Logic/Database/DatabaseManipulation";
import { useEffect, useState } from "react";
import { globalColours } from "../Styling/GlobalStyles";
import DisplayTasks from "./Output Components/taskDisplayComponent";

export default function CustomCanendar() {
    const [tasks, setTasks] = useState([]);
    const [date, setDate] = useState(null);

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

            <DisplayTasks tasks={tasks} date={date} fetchTasks={fetchTasks} />

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