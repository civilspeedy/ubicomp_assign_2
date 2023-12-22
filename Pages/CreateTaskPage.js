import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { globalColours, globalStyle } from "../Styling/GlobalStyles";
import DateSlector from "../Components/DateSelectorComponent";
import TitleText from "../Components/TitleTextComponent";
import Picker from "../Components/PickerComponent";
import { AntDesign } from "@expo/vector-icons";
import TaskTypeEntry from "../Components/TaskTypeEntriesComponent";
import CustomTextInput from "../Components/CustomTextInputComponent";
import { addTask } from "../Logic/Database/DatabaseManipulation";

export default function CreateTaskPage() {
    const [title, setTitle] = useState(null);
    const [type, setType] = useState(null);
    const [maxWords, setMaxWords] = useState(null);
    const [due, setDue] = useState(null); // needs input made
    const [start, setStart] = useState(null); // needs input made
    const [pages, setPages] = useState(null);
    const [slides, setSlides] = useState(null);
    const [subject, setSubject] = useState(null);
    const taskTypes = ['Essay', 'Report', 'Presentation', 'Chore', 'General', 'Meeting', 'Project'];

    // maybe have a tickbox on the side that show when you complete each task entry

    return (
        <View style={styles.view}>
            <TitleText titleName={"CREATE A TASK"} />

            <CustomTextInput value={title} setValue={setTitle} placeholder={"Give your task a name!"} />
            <Picker pickerLabel={'What type of Task is it?'} items={taskTypes} setValue={setType} />
            <DateSlector date={due} setDate={setDue} />


            <TaskTypeEntry
                type={type}
                inputStyle={styles.input}
                maxWords={maxWords}
                setMaxWords={setMaxWords}
                maxPages={pages}
                setMaxPages={setPages}
                subject={subject}
                setSubject={setSubject} />

            <Pressable onPress={addTask({ title: title, type: type, maxSlides: slides, startDate: start, dueDate: due, subject: subject })}>
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
});