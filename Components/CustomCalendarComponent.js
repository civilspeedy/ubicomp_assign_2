import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import TaskComponent from "./TaskComponent";
import { getTasks } from "../Logic/Database/DatabaseManipulation";
import { useEffect, useState } from "react";
import { formateDateForSQL } from "../Logic/DateFormater";
import { globalColours, smoothExpansionAnimation } from "../Styling/GlobalStyles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

export default function CustomCanendar() {
    const [tasks, setTasks] = useState([]);
    const [date, setDate] = useState(null);

    const fetchTasks = async () => {
        try {
            const fetchedTasks = await getTasks();
            setTasks(fetchedTasks);
        } catch (e) {
            console.error(e);
        }
    };


    useEffect(() => {
        fetchTasks();
    }, []);

    const pressHandler = (day) => {
        setDate(day.dateString);
        fetchTasks();
    };

    const displayTasks = () => {
        const tasksOnDate = [];

        for (let i = 0; i < tasks.length; i++) {
            const newDate = formateDateForSQL(date);
            if (tasks[i].due == newDate || tasks[i].start_date == newDate) {
                tasksOnDate.push(tasks[i]);
            }
        };

        smoothExpansionAnimation();
        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    {tasksOnDate.map((task, index) => (
                        <TaskComponent task={task} fetchTasks={fetchTasks} key={index} />
                    ))}
                </ScrollView>
            </GestureHandlerRootView>
        )
    };


    return (
        <View style={styles.container}>
            <Calendar onDayPress={(day) => pressHandler(day)} style={styles.calendar} />
            <View style={styles.textContainer}>
                <Text>Long press a task for options</Text>
            </View>

            {displayTasks()}

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
    },
    textContainer: {
        alignItems: 'center'
    },
});