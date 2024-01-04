import React from "react";
import { View } from "react-native";
import TitleText from "../Components/Output Components/TitleTextComponent";
import { globalStyle } from "../Styling/GlobalStyles"
import DisplayTasks from "../Components/Output Components/TaskDisplayComponent";
import CustomLabel from "../Components/Output Components/LabelComponent";


export default function TodayPage({ fetchTasks, tasks }) {

    let date = new Date();
    date = date.toISOString().split('T')[0];

    return (
        <View style={globalStyle.pageContainer}>
            <TitleText titleName={'TODAY'} />

            <CustomLabel text={'Tasks Due Today:'} />
            <DisplayTasks tasks={tasks} date={date} fetchTasks={fetchTasks} displayType={'due'} />


            <CustomLabel text={'Tasks to Start Today:'} />
            <DisplayTasks tasks={tasks} date={date} fetchTasks={fetchTasks} displayType={'start'} />

        </View>
    );
};
