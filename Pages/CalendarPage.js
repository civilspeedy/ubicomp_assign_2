import React from "react";
import { StyleSheet, View } from "react-native";
import TitleText from "../Components/TitleTextComponent";
import { globalStyle } from "../Styling/GlobalStyles";
import { Calendar } from "react-native-calendars";

export default function CalendarPage() {
    return (
        <View style={globalStyle.pageContainer}>
            <TitleText titleName={"CALENDAR"} />

            <View style={styles.calendarContainer}>
                <Calendar />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    calendarContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    }
});