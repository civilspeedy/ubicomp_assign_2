import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { globalColours } from "../Styling/GlobalStyles";
import DateSlector from "../Components/DateSelectorComponent";
import TitleText from "../Components/TitleTextComponent";
import { Picker } from "@react-native-picker/picker";

export default function CreateTaskPage() {
    const [isOpen, setOpen] = useState(false);
    const [title, setTitle] = useState(null);
    const [type, setType] = useState('What type of task is it?');
    const [maxWords, setMaxWords] = useState(null);
    const [due, setDue] = useState(null);
    const [subject, setSubject] = useState(null);


    return (
        <View style={styles.view}>
            <TitleText titleName={"CREATE A TASK"} />
            <TextInput style={styles.input}
                onChangeText={setTitle}
                value={title}
                placeholder="Give your task a name!" />

            <DateSlector date={0} />

            <Picker style={styles.picker}
                selectedValue={type}
                onValueChange={(itemValue) => { setType(itemValue) }}>
                <Picker.Item label="Essay" value={'Essay'} />
                <Picker.Item label="Presentation" value={'Presentation'} style={{ color: 'black' }} />
            </Picker>

            <TextInput style={styles.input}
                keyboardType='numeric'
                value={maxWords}
                placeholder="What's the Max Word Count?" />
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
        backgroundColor: globalColours.backgroundPrimary,
        flex: 1
    },
    input: {
        borderWidth: 4,
        borderRadius: 20,
        padding: 10,
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: 'white',
    },
    picker: {
        borderWidth: 4,
        backgroundColor: 'white',
        padding: 20,
    },
});