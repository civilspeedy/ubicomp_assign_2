import React from "react";
import { View } from "react-native";
import TitleText from "../Components/Output Components/TitleTextComponent";
import { globalStyle } from "../Styling/GlobalStyles";
import CustomCanendar from "../Components/CustomCalendarComponent";


export default function CalendarPage({ fetchTasks, tasks }) {
    return (
        <View style={globalStyle.pageContainer}>
            <TitleText titleName={"CALENDAR"} />

            <CustomCanendar fetchTasks={fetchTasks} tasks={tasks} />
        </View>
    )
};
