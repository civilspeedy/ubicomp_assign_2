import { ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TaskComponent from "../TaskComponent";
import { formateDateForSQL } from "../../Logic/DateFormater";
import { smoothExpansionAnimation } from "../../Styling/GlobalStyles";

export default function DisplayTasks({ tasks, date, fetchTasks }) {
    const tasksOnDate = [];
    console.log('new date >>>>>>', date);
    for (let i = 0; i < tasks.length; i++) {
        const newDate = formateDateForSQL(date);

        if (tasks[i].done == 0) {
            if (tasks[i].due == newDate || tasks[i].start_date == newDate) {
                tasksOnDate.push(tasks[i]);
            }
        };

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