import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { globalColours } from "../../Styling/GlobalStyles";
import CustomLabel from "./LabelComponent";
import DisplayBasedOnType from "./DisplayBasedOnType";

export default function MoreButton({ task }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <Modal
                visible={isOpen}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setOpen(!isOpen)}>
                <View style={styles.insideModal}>

                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{task.title}</Text>
                    </View>

                    <View style={styles.formatContainer}>
                        <Text style={{ fontSize: 30 }}>{task.format}</Text>
                    </View>

                    <DisplayBasedOnType task={task} />
                </View>
            </Modal>
            <Pressable style={styles.pressableTextWrapper} onPress={() => setOpen(true)}>
                        <Text style={styles.taskTitle}>{task.title}</Text>
                        <Text style={styles.taskStatText}>{task.due}</Text>
                    </Pressable>
        </View >
    );
};

const styles = StyleSheet.create({
    moreButton: {
        backgroundColor: 'orange',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 70,
        height: 70
    },
    insideModal: {
        backgroundColor: globalColours.backgroundSecondary,
    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    titleContainer: {
        alignSelf: 'center',
        backgroundColor: globalColours.tertiary,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    formatContainer: {
        alignSelf: 'center',
        backgroundColor: globalColours.tertiary,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    taskTitle: {
        color: globalColours.secondary,
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center'
    },
    taskStatText: {
        fontSize: 15,
        alignSelf: 'center',
    },
    pressableTextWrapper: {
        backgroundColor: globalColours.backgroundSecondary,
        padding: 10,
        borderRadius: 20,
        alignItems: 'flex-start',
    },
}
);