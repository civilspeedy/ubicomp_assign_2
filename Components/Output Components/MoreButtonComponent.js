import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { globalColours } from "../../Styling/GlobalStyles";
import CustomLabel from "./LabelComponent";

export default function MoreButton({ task }) {
    const [isOpen, setOpen] = useState(false);
    console.log(task.format);

    const displayBasedOnType = () => {
        if (task.format == 'Project' || task.format == 'Report' || task.form == 'Essay') {
            return (
                <View style={styles.infoContainer}>
                    <CustomLabel text={'Start Date: '} />
                    <Text>{task.start_date}</Text>
                </View>
            );
        };
        if (task.format == 'Presentation') {
            return (
                <View>
                    <CustomLabel text={'Start Date: '} />
                </View>
            );
        } else {
            return (
                <View>
                </View>
            );
        };
    };

    return (
        <View>
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

                    {displayBasedOnType}
                </View>
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
    insideModal: {
        flex: 1,
        backgroundColor: globalColours.backgroundSecondary
    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    titleContainer: {
        alignSelf: 'center',
        backgroundColor: globalColours.tertiary,
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    formatContainer: {
        alignSelf: 'center',
        backgroundColor: globalColours.tertiary,
        padding: 4,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    infoContainer: {
        alignSelf: 'center',
        backgroundColor: globalColours.tertiary,
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
});