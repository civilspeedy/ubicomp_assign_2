import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import { globalColours } from "../../Styling/GlobalStyles";
import CreateTaskPage from "../../Pages/CreateTaskPage";
import { useState } from "react";

export default function CreateTaskButton({ fetchTasks }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <Modal
                visible={isOpen}
                transparent={true}
                animationType="slide"
                style={{ flex: 1, backgroundColor: globalColours.backgroundSecondary }}
                onRequestClose={() => setOpen(!isOpen)}
            >
                <CreateTaskPage fetchTasks={fetchTasks} setOpen={setOpen} />
            </Modal>
            <View style={styles.container}>
                <Pressable style={styles.button} onPress={() => setOpen(!isOpen)}>
                    <MaterialCommunityIcons name={'plus'} size={70} />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: globalColours.backgroundSecondary,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 20,
    },
    container: {
        width: '20%',
        alignSelf: 'center'
    },
});