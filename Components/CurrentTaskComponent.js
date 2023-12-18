import { Pressable, StyleSheet, Text } from "react-native";
import { globalColours } from "../Styling/GlobalStyles";

export default function CurrentTask({ task }) {
    return (
        <Pressable style={styles.container}>
            <Text>{task.title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalColours.backgroundSecondary,
        padding: 20,
        borderRadius: 20,
    },
});