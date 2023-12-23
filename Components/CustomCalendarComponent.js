import { StyleSheet, Text, View } from "react-native";
import { AgendaList, Calendar, CalendarProvider, ExpandableCalendar } from "react-native-calendars";
import TaskComponent from "./TaskComponent";
import { getTasks } from "../Logic/Database/DatabaseManipulation";
import { useEffect, useState } from "react";

export default function CustomCanendar() {
    const [tasks, setTasks] = useState([]);
    const [date, setDate] = useState(new Date());

    const fetchTasks = async () => {
        try {
            const fetchedTasks = await getTasks();
            setTasks(fetchedTasks);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const displayTasks = () => {
        const tasksOnDate = [];
        console.log('called')

        for (let i = 0; i < tasks.length; i++) {
            console.log(tasks[i].due, date);
            if (tasks[i].due == date || tasks[i].start_date == date) {
                tasksOnDate.push(tasks[i]);
            }
        };

        console.log(tasksOnDate)
        return (
            <View>
                {tasksOnDate.map((task, index) => {
                    console.log('tasks on date:', tasksOnDate);
                    <TaskComponent task={task} key={index} />
                })}
            </View>
        )
    };


    return (
        <View style={styles.container}>
            <Calendar onDayPress={(day) => setDate(day.dateString) /**needs formatting */} />

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
        flex: 1
    },
    provider: {
        flex: 1
    }
});