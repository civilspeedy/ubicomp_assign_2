/**
 * @file file containing the component used for editing tasks
 * @module EditTaskModal
 */

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import DateSlector from './Input/DateSelector';
import NumberInput from './Input/NumberInput';
import CustomTextInput from './Input/CustomTextInput';
import CustomLabel from './Text/Label';
import { globalColours } from '../GlobalStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { updateTask } from '../Logic/Database/DatabaseManipulation';

/**
 * Modal used to edit task data
 * @param {object} task - an array containing all tasks
 * @param {function} fetchTasks - function that call for all tasks to be fetched from database
 * @returns {View} - a view wrapping a modal and pressable
 */
export default function EditModal({ task, fetchTasks }) {
  const [isOpen, setOpen] = useState(false);

  const [title, setTitle] = useState(task.tile);
  const [maxWords, setMaxWords] = useState(String(task.word_count));
  const [due, setDue] = useState(task.due);
  const [startDate, setStart] = useState(task.start_date);
  const [maxPages, setPages] = useState(String(task.page_count));
  const [slides, setSlides] = useState(String(task.slides_count));
  const [subject, setSubject] = useState(task.subject);

  /**
   * Returns relevant data entry methods based on the type of task
   * @returns {View}
   */
  const editBasedOnType = () => {
    const type = task.format;
    if (type == 'Essay' || type == 'Report' || type == 'Project') {
      return (
        <View>
          <CustomLabel text={'Edit Max Word Count:'} />
          <NumberInput
            value={maxWords}
            setValue={setMaxWords}
            placeholder={String(task.word_count)}
          />

          <CustomLabel text={'Edit Max Pages:'} />
          <NumberInput
            value={maxPages}
            setValue={setPages}
            placeholder={String(task.page_count)}
          />

          <CustomLabel text={'Edit Subject'} />
          <CustomTextInput
            value={subject}
            setValue={setSubject}
            placeholder={task.subject}
          />

          <CustomLabel text={'Edit Due Date'} />
          <DateSlector
            setDate={setDue}
            date={due}
          />
        </View>
      );
    }
    if (type == 'Presentation') {
      console.log(task.slide_count);
      return (
        <View>
          <CustomLabel text={'Edit Slide Count:'} />

          <NumberInput
            value={slides}
            setValue={setSlides}
            placeholder={`${task.slide_count}`}
          />

          <CustomLabel text={'Edit Due Date'} />
          <DateSlector
            setDate={setDue}
            date={due}
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        visible={isOpen}
        onRequestClose={() => setOpen(!isOpen)}
        style={{ flex: 1 }}
        transparent={true}
      >
        <ScrollView style={styles.modal}>
          <CustomLabel text={'Edit Title:'} />
          <CustomTextInput
            setValue={setTitle}
            value={title}
            placeholder={task.title}
          />

          <CustomLabel text={'Edit Start Date:'} />
          <DateSlector
            date={startDate}
            setDate={setStart}
          />

          {editBasedOnType()}

          <View style={styles.bottomButtons}>
            <Pressable
              style={styles.cancel}
              onPress={() => setOpen(false)}
            >
              <Text>Cancel and Close</Text>
            </Pressable>

            <Pressable
              style={styles.confirmEdit}
              onPress={() => {
                updateTask(
                  {
                    _pageCount: maxPages,
                    _slideCount: slides,
                    _wordCount: maxWords,
                    _startDate: startDate,
                    _dueDate: due,
                    _subject: subject,
                    done: false,
                    _title: title,
                  },
                  task.title
                );
                fetchTasks();
                setOpen(false);
              }}
            >
              <Text>Confrim Changes</Text>
            </Pressable>
          </View>
        </ScrollView>
      </Modal>

      <Pressable
        style={styles.editButton}
        onPress={() => setOpen(true)}
      >
        <MaterialCommunityIcons
          name='lead-pencil'
          size={70}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  editButton: {
    backgroundColor: 'orange',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 70,
    height: 70,
  },
  modal: {
    backgroundColor: 'white',
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
  },
  bottomButtons: {
    flex: 1,
    flexDirection: 'row',
  },
  confirmEdit: {
    flex: 1,
    backgroundColor: globalColours.tertiary,
    borderRadius: 20,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancel: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
