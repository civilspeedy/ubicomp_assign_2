import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { globalColours } from "../Styling/GlobalStyles";
import DisplayTasks from "./Output Components/TaskDisplayComponent";
import { formateDateYearFirst } from "../Logic/DateFormater";
import DateTimePicker from "react-native-ui-datepicker";

export default function CustomCanendar({ fetchTasks, tasks }) {
    const [date, setDate] = useState(null);
    const [marked, setMarked] = useState([]);

    //not sure how to do with dateTimerPicker
    const markDates = () => {
        let dates = [];
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].done == 0) {
                if (tasks[i].due != '00-00-00') {
                    dates.push(formateDateYearFirst(tasks[i].due));
                };
                if (tasks[i].start_date != '00-00-00') {
                    dates.push(tasks[i].start_date);
                };
            };
        };
        setMarked(dates);
    };


    const pressHandler = (day) => {
        setDate(day);
        markDates();
        fetchTasks();
    };

    useEffect(() => {
        markDates();
    }, [tasks]);

    return (
        <View style={styles.container}>
            <View style={styles.calendarContainer}>
                <DateTimePicker
                    value={date}
                    mode="date"
                    onValueChange={(justSelected) => pressHandler(justSelected)}
                    selectedItemColor={globalColours.secondary}
                    headerButtonStyle={styles.calendarNextPageButtons}
                    headerButtonColor="black"
                    headerTextStyle={{ fontSize: 20, fontWeight: 'bold' }} />
            </View>



            <View style={styles.textContainer}>
                <Text>Long press a task for options</Text>
            </View>

            <DisplayTasks
                tasks={tasks}
                date={date}
                fetchTasks={fetchTasks}
                displayType={'both'} />

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
        borderRadius: 20,
        overflow: 'hidden',
        marginHorizontal: 10,
    },
    textContainer: {
        alignItems: 'center'
    },
    calendarContainer: {
        backgroundColor: globalColours.backgroundSecondary,
        margin: 10,
        padding: 20,
        borderRadius: 20,
    },
});