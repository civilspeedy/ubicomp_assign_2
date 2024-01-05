import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function MoreButton({ task }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <View>
            <Modal
                visible={isOpen}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setOpen(!isOpen)}>
                <Text>Test</Text>
            </Modal>
            <Pressable style={styles.moreButton} onPress={() => setOpen(true)}>
                <MaterialCommunityIcons name='dots-horizontal' size={70} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    moreButton: {
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 10,
        flex: 1
    },
});