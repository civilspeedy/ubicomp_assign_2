/**
 * @file hosts the Create Task Page component
 * @module CreateTaskPage
 */

import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { globalColours } from '../GlobalStyles';
import DateSlector from '../Components/Input/DateSelector';
import TitleText from '../Components/Text/TitleTextComponent';
import Picker from '../Components/Input/DropDownPicker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TaskTypeEntry from '../Components/InputBasedOnTaskType';
import CustomTextInput from '../Components/Input/CustomTextInput';
import { addTask } from '../Logic/Database/DatabaseManipulation';
import { formateDateAsString } from '../Logic/DateFormater';
import { impactAsync } from 'expo-haptics';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

/**
 * Page allowing for data entry for tasks
 * @param {function} fetchTasks - function that call for all tasks to be fetched from database
 * @param {function}
 * @returns
 */
export default function CreateTaskPage({ fetchTasks, setOpen }) {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [maxWords, setMaxWords] = useState('');
  const [due, setDue] = useState('');
  const [start, setStart] = useState('');
  const [pages, setPages] = useState('');
  const [slides, setSlides] = useState('');
  const [subject, setSubject] = useState('');
  const taskTypes = ['Essay', 'Report', 'Presentation', 'Chore', 'General', 'Meeting', 'Project'];

  return (
    <View style={styles.view}>
      <TitleText titleName={'CREATE A TASK'} />
      <GestureHandlerRootView>
        <ScrollView>
          <CustomTextInput
            value={title}
            setValue={setTitle}
            placeholder={'Give your task a name!'}
          />

          <Picker
            pickerLabel={'What type of Task is it?'}
            items={taskTypes}
            setValue={setType}
          />

          <View style={{ marginBottom: 5 }}>
            <DateSlector
              date={due}
              setDate={setDue}
              placeholder={'Select The Due Date'}
            />
          </View>

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
            setSlides={setSlides}
          />

          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.closeButton}
              onPress={() => setOpen(false)}
            >
              <MaterialCommunityIcons
                name='cancel'
                size={70}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                impactAsync();
                if (type != 'chore') {
                  formattedStartDate = formateDateAsString(start);
                  formattedDueDate = formateDateAsString(due);
                }

                if (title == '') {
                  Alert.alert('Your task must have a title!');
                } else {
                  let formattedStartDate = start;
                  let formattedDueDate = due;
                  addTask({
                    _title: title,
                    _type: type,
                    _maxSlides: slides,
                    _maxPages: pages,
                    _maxWords: maxWords,
                    _maxSlides: slides,
                    _startDate: formattedStartDate,
                    _dueDate: formattedDueDate,
                    _subject: subject,
                    done: false,
                  });
                  fetchTasks();
                  setOpen(false);
                }
              }}
              style={styles.button}
            >
              <MaterialCommunityIcons
                name='check'
                size={70}
                color={'black'}
                selectionColor={'blue'}
              />
            </Pressable>
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: globalColours.backgroundPrimary,
    flex: 1,
  },
  button: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColours.tertiary,
    borderRadius: 20,
    marginHorizontal: 20,
    height: 70,
    width: 70,
  },
  closeButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
  },
  buttonContainer: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
    height: '25%',
  },
});
