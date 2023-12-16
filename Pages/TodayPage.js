import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TitleText from "../Components/TitleTextComponent";
import { globalColours, globalStyle } from "../Styling/GlobalStyles";


export default function TodayPage() {
    return (
        <View style={globalStyle.pageContainer}>
            <TitleText titleName={"TODAY"} />
        </View>
    );
};

const styles = StyleSheet.create({
});