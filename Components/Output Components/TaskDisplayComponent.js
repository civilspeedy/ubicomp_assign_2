import { ScrollView, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TaskComponent from "../TaskComponent";
import { formateDateForSQL } from "../../Logic/DateFormater";
import { smoothExpansionAnimation } from "../../Styling/GlobalStyles";
import CustomLabel from "./LabelComponent";

export default function DisplayTasks({ tasks, date, fetchTasks, displayType }) {
    let _date = '';
    const tasksOnDate = [];
    if (date != null) {
        _date = date.split(' ')[0];
    };

    for (let i = 0; i < tasks.length; i++) {

        console.log('date being compared :', _date, 'date of task: ', tasks[i].due);

        if (displayType == 'both') {
            if (tasks[i].done == 0) {
                if (tasks[i].due == _date || tasks[i].start_date == _date) {
                    tasksOnDate.push(tasks[i]);
                };
            };
        };

        if (displayType == 'due') {
            if (tasks[i].done == 0) {
                if (tasks[i].due == _date) {
                    tasksOnDate.push(tasks[i]);
                };
            };
        };

        if (displayType == 'start') {
            if (tasks[i].done == 0) {
                if (tasks[i].start_date == _date) {
                    tasksOnDate.push(tasks[i]);
                };
            };
        };

        if (displayType == 'done') {
            if (tasks[i].done == 1) {
                if (tasks[i].due == _date || tasks[i].start == _date) {
                    tasksOnDate.push(tasks[i]);
                };
            };
        };
    };
    smoothExpansionAnimation();
    if (tasksOnDate.length == 0) {
        return (
            <View>
                <CustomLabel text={'No Tasks'} />
            </View>
        );
    };
    if (tasksOnDate != []) {
        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    {tasksOnDate.map((task, index) => (
                        <TaskComponent task={task} fetchTasks={fetchTasks} key={index} />

                    ))}
                </ScrollView>
            </GestureHandlerRootView>
        );
    };
};