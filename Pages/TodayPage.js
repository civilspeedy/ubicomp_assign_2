import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TitleText from "../Components/Output Components/TitleTextComponent";
import { globalStyle } from "../Styling/GlobalStyles"

import PointsAvailable from "../Components/Output Components/PointsAvailableComponent";
import DisplayTasks from "../Components/Output Components/TaskDisplayComponent";
import CustomLabel from "../Components/Output Components/LabelComponent";
import { formateDateForSQL } from "../Logic/DateFormater";


export default function TodayPage({ fetchTasks, tasks }) {

    let date = new Date();
    date = date.toISOString().split('T')[0];

    console.log('date in today page', date);

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
