import React from "react";
import { StyleSheet, View } from "react-native";
import TitleText from "../Components/TitleTextComponent";
import { globalColours, globalStyle } from "../Styling/GlobalStyles";
import { Calendar } from "react-native-calendars";

export default function CalendarPage() {
    return (
        <View style={globalStyle.pageContainer}>
            <TitleText titleName={"CALENDAR"} />

            <View style={styles.calendarContainer}>
                <Calendar style={styles.calendar} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    calendarContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
    calendar: {
        backgroundColor: globalColours.backgroundSecondary,
        margin: 20,
        padding: 20,
        borderRadius: 20,
    }
});