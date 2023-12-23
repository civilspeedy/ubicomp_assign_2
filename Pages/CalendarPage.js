import React from "react";
import { StyleSheet, View } from "react-native";
import TitleText from "../Components/TitleTextComponent";
import { globalColours, globalStyle } from "../Styling/GlobalStyles";
import CustomCanendar from "../Components/CustomCalendarComponent";


export default function CalendarPage() {
    return (
        <View style={globalStyle.pageContainer}>
            <TitleText titleName={"CALENDAR"} />

            <CustomCanendar />
        </View>
    )
};

const styles = StyleSheet.create({
});