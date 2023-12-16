import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function TitleText({ titleName }) {
    return (
        <View style={styles.topView}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>{titleName}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    titleView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 16,
        backgroundColor: 'blue'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 40,
        margin: 10,
        color: '#00C3FF',
    },
    topView: {
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
    },
})