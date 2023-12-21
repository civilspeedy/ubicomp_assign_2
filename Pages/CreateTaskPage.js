import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { globalColours } from "../Styling/GlobalStyles";
import DateSlector from "../Components/DateSelectorComponent";
import TitleText from "../Components/TitleTextComponent";
import Picker from "../Components/PickerComponent";
import { AntDesign } from "@expo/vector-icons";

export default function CreateTaskPage() {
    const [title, setTitle] = useState(null);
    const [type, setType] = useState(null);
    const [maxWords, setMaxWords] = useState(null);
    const [due, setDue] = useState(null);
    const [subject, setSubject] = useState(null);
    const taskTypes = ['Essay', 'Report', 'Presentation', 'Chore', 'General', 'Meeting'];

    // maybe have a tickbox on the side that show when you complete each task entry

    return (
        <View style={styles.view}>
            <TitleText titleName={"CREATE A TASK"} />
            <TextInput style={styles.input}
                onChangeText={setTitle}
                value={title}
                placeholder="Give your task a name!" />

            <Picker pickerLabel={'What type of Task is it?'} items={taskTypes} setValue={setType} />

            <DateSlector date={0} />

            <TextInput style={styles.input}
                keyboardType='numeric'
                value={maxWords}
                placeholder="What's the Max Word Count?" />

            <Pressable>
                <AntDesign name='checkcircle' size={50} color={'lightgreen'} />
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
        backgroundColor: globalColours.backgroundPrimary,
        flex: 1
    },
    input: {
        borderWidth: 4,
        borderRadius: 20,
        padding: 10,
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 5,
        backgroundColor: 'white',
    },
});