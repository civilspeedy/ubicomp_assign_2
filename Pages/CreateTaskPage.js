import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { globalColours } from "../Styling/GlobalStyles";
import DateSlector from "../Components/Input Components/DateSelectorComponent";
import TitleText from "../Components/Output Components/TitleTextComponent";
import Picker from "../Components/Input Components/PickerComponent";
import { AntDesign } from "@expo/vector-icons";
import TaskTypeEntry from "../Components/TaskTypeEntriesComponent";
import CustomTextInput from "../Components/Input Components/CustomTextInputComponent";
import { addTask } from "../Logic/Database/DatabaseManipulation";
import { formateDateAsString } from "../Logic/DateFormater";

export default function CreateTaskPage() {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [maxWords, setMaxWords] = useState('');
    const [due, setDue] = useState('');
    const [start, setStart] = useState('');
    const [pages, setPages] = useState('');
    const [slides, setSlides] = useState('');
    const [subject, setSubject] = useState('');
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
                setSubject={setSubject}
                startDate={start}
                setStartDate={setStart}
                slides={slides}
                setSlides={setSlides} />

            <Pressable onPress={() => {
                let formattedStartDate = start;
                let formattedDueDate = due;

                if (type != 'chore') {
                    formattedStartDate = formateDateAsString(start);
                    formattedDueDate = formateDateAsString(due)
                };
                addTask({
                    _title: title, _type: type, _maxSlides: slides, _maxPages: pages,
                    _maxWords: maxWords, _maxSlides: slides, _startDate: formattedStartDate,
                    _dueDate: formattedDueDate, _subject: subject, done: false,
                })

            }}>
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