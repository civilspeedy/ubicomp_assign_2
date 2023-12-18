import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalColours } from "../Styling/GlobalStyles";
import { BlurView } from "@react-native-community/blur"


export default function CurrentTask({ task }) {
    return (
        <View>
            <Pressable style={styles.container}>
                <Text style={styles.taskTitle}>{task.title}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColours.backgroundSecondary,
        padding: 20,
        borderRadius: 20,
    },
    taskTitle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
});