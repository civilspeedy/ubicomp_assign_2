import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { globalColours } from "../Styling/GlobalStyles";
import DateTimePicker from "react-native-ui-datepicker";

export default function DateSlector({ date }) {
    const [isOpen, setOpen] = useState(false);
    const [selectedDate, setDate] = useState(null);


    // https://github.com/farhoudshapouran/react-native-ui-datepicker
    return (
        <View>
            <Modal style={styles.modal}
                animationType="slide"
                visible={isOpen}
                transparent={true}
                onRequestClose={() => { setOpen(!isOpen) }}>
                <View style={styles.calendarContainer}>
                    <DateTimePicker
                        value={selectedDate}
                        onValueChange={(justSelected) => { setDate(justSelected) }}
                        selectedItemColor={globalColours.secondary}
                        headerButtonStyle={styles.calendarNextPageButtons}
                        headerButtonColor="white" />

                    <Pressable onPress={() => { setOpen(false) }} style={styles.closeButton}><Text style={{ color: 'white' }}>Close</Text></Pressable>
                </View>


            </Modal>

            <Pressable onPress={() => { setOpen(true) }} style={styles.button}>
                <Text style={{ color: 'white' }}>Select Date</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: globalColours.tertiary,
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginHorizontal: 20,
    },
    modal: {
        flex: 1,
    },
    calendarContainer: {
        backgroundColor: globalColours.backgroundSecondary,
        margin: 10,
        padding: 20,
        borderRadius: 20,
    },
    calendarNextPageButtons: {
        backgroundColor: globalColours.secondary,
        borderRadius: 20,
        padding: 10,
    },
    closeButton: {
        alignSelf: 'center',
        backgroundColor: globalColours.secondary,
        padding: 20,
        borderRadius: 20,
        margin: 10,
    },
});