import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TitleText from "../Components/TitleTextComponent";


export default function TodayPage() {
    return (
        <View style={{ flex: 1 }}>
            <TitleText titleName={"TODAY"} />
        </View>
    );
};

const styles = StyleSheet.create({
});