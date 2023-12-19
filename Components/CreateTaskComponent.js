import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { globalColours } from "../Styling/GlobalStyles";

export default function CreateTask() {
    const [isOpen, setOpen] = useState(false);
    const [title, setTitle] = useState(null);
    const [type, setType] = useState(null);
    const [maxWords, setMaxWords] = useState(0);
    const [due, setDue] = useState(null);
    const [subject, setSubject] = useState(null);


    return (
        <View style={styles.createTaskCotainer}>
            <Modal style={styles.modal}
                animationType="slide"
                transparent={true}
                visible={isOpen}
                onRequestClose={() => { setOpen(!isOpen) }}>
                <View style={styles.view}>
                    <Text>Modal Open!</Text>
                </View>
            </Modal>

            <Pressable onPress={() => setOpen(true)} style={styles.pressable}>
                <Text>Press me!</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    createTaskCotainer: {
    },
    modal: {
    },
    pressable: {
        padding: 10,
        backgroundColor: globalColours.tertiary
    },
    view: {
        backgroundColor: globalColours.backgroundSecondary,
        padding: 20,
        borderRadius: 20,
    },
});