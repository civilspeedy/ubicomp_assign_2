import React from "react";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function Today(){
    return(
        <GestureHandlerRootView>
            <View></View>
            <Text>Today</Text>
        </GestureHandlerRootView>
    );
}