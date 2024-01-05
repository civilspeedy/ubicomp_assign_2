import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalColours, smoothExpansionAnimation } from "../../Styling/GlobalStyles";
import DateTimePicker from "react-native-ui-datepicker";
import { formateDateAsString } from "../../Logic/DateFormater";

export default function DateSlector({ date, setDate, placeholder }) {
    const [isOpen, setOpen] = useState(false);
    const [title, setTitle] = useState(placeholder);

    // https://github.com/farhoudshapouran/react-native-ui-datepicker
    return (
        <View>
            <Pressable onPress={() => {
                smoothExpansionAnimation();
                setOpen(!isOpen);

            }}
                style={styles.button}>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>{title}</Text>
            </Pressable>

            {isOpen && (
                <View style={styles.calendarContainer}>
                    <DateTimePicker
                        value={date}
                        mode='date'
                        onValueChange={(justSelected) => {
                            if (justSelected != null) {
                                date = justSelected.split(' ')[0];
                                console.log(formateDateAsString(date));
                                setDate(date);
                                setTitle(formateDateAsString(justSelected));
                            };

                        }}
                        selectedItemColor={globalColours.secondary}
                        headerButtonStyle={styles.calendarNextPageButtons}
                        headerButtonColor="white" />
                </View>
            )}
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