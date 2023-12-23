import { StyleSheet, Text, View } from "react-native";
import { AgendaList, CalendarProvider, ExpandableCalendar } from "react-native-calendars";
import TaskComponent from "./TaskComponent";
import { getTasks } from "../Logic/Database/DatabaseManipulation";
import { useEffect, useState } from "react";





export default function CustomCanendar() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const fetchedTasks = await getTasks();
            setTasks(fetchedTasks);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log('in useEffect ', tasks)
        fetchTasks(); // needs to be formatted
    }, []);


    console.log('out of useEffect ', tasks)

    return (
        <View style={styles.container}>
            {tasks.map((task, index) => {
                console.log(tasks);
                return <TaskComponent task={task} key={index} />
            })}
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