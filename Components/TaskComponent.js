import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Alert, Text } from 'react-native';
import { globalColours, smoothExpansionAnimation } from '../Styling/GlobalStyles';
import { impactAsync } from 'expo-haptics';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  addPoints,
  deleteTask,
  setTaskDone,
  updatePoints,
} from '../Logic/Database/DatabaseManipulation';
import EditModal from './EditModalComponent';
import { taskDoneToast } from '../Logic/Cheerleader';

export default function TaskComponent({ task, fetchTasks, tasks, points, fetchPoints }) {
  const [isExtended, setExtended] = useState(false);
  // https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/long-press-gesture
  let hasStartDate = task.start_date != '';
  let hasDueDate = task.due != '';
  let hasWordCount = task.word_count != '';
  let hasSlideCount = task.slide_count != '';
  let hasPageCount = task.page_count != '';

  const whenLongPress = Gesture.LongPress().onEnd((e, success) => {
    smoothExpansionAnimation();
    impactAsync();
    setExtended(!isExtended);
  });

  const isDone = task.done == 1;
  const promptDeleteTask = () => {
    Alert.alert('Delete Task?', 'Are you sure you want to delete this Task?', [
      { text: 'No' },
      {
        text: 'yes',
        onPress: () => {
          deleteTask(task.title);
          fetchTasks();
        },
      },
    ]);
  };

  const doneTask = () => {
    console.log('p:', points);
    setTaskDone(task, true);

    if (points == 0) {
      addPoints(10);
    }
    if (points != 0) {
      updatePoints(points + 10);
    }

    fetchPoints();
    fetchTasks();
    taskDoneToast(tasks);
  };

  return (
    <GestureDetector
      gesture={whenLongPress}
      shouldCancelWhenOutside={true}
      onPressOut={() => impactAsync()}
    >
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          {!isExtended && (
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={styles.textWrapper}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                {hasDueDate ? (
                  <Text style={styles.taskStatText}>Due: {task.due}</Text>
                ) : (
                  <View></View>
                )}
              </View>
              {isDone ? (
                <View></View>
              ) : (
                <Pressable
                  style={styles.doneButton}
                  onPress={doneTask}
                >
                  <MaterialCommunityIcons
                    name='check'
                    size={70}
                  />
                </Pressable>
              )}
            </View>
          )}
          {isExtended && (
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={styles.details}>
                <Text style={styles.detailsText}>{task.format}</Text>

                {hasStartDate ? (
                  <View>
                    <Text>Start Date: {task.start_date}</Text>
                  </View>
                ) : (
                  <View></View>
                )}

                {hasWordCount ? (
                  <View>
                    <Text>Max Words: {task.word_count}</Text>
                  </View>
                ) : (
                  <View></View>
                )}

                {hasPageCount ? (
                  <View>
                    <Text>Max Pages: {task.page_count}</Text>
                  </View>
                ) : (
                  <View></View>
                )}

                {hasSlideCount ? (
                  <View>
                    <Text>Slides: {task.slide_count}</Text>
                  </View>
                ) : (
                  <View></View>
                )}
              </View>

              <EditModal
                task={task}
                fetchTasks={fetchTasks}
              />

              <Pressable
                style={styles.deleteButton}
                onPress={promptDeleteTask}
              >
                <MaterialCommunityIcons
                  name='delete-outline'
                  size={70}
                  style={{ alignSelf: 'center' }}
                />
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColours.backgroundSecondary,
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 5,
    flexDirection: 'row',
    borderRadius: 20,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 70,
    height: 70,
  },
  doneButton: {
    backgroundColor: globalColours.tertiary,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
    width: 70,
    height: 70,
  },
  taskTitle: {
    color: globalColours.secondary,
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
  },
  taskStatText: {
    fontSize: 15,
    alignSelf: 'center',
  },
  textWrapper: {
    padding: 10,
    flex: 1,
    borderRadius: 20,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  titleContainer: {
    alignSelf: 'center',
    backgroundColor: globalColours.tertiary,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  formatContainer: {
    alignSelf: 'center',
    backgroundColor: globalColours.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  details: {
    flex: 1,
    padding: 10,
  },
  detailsText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
