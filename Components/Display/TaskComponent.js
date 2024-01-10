/**
 * @file contains task component
 * @module TaskComponent
 */

import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Alert, Text } from 'react-native';
import { globalColours, smoothExpansionAnimation } from '../../GlobalStyles';
import { impactAsync } from 'expo-haptics';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  addPoints,
  deleteTask,
  setTaskDone,
  updatePoints,
} from '../../Logic/Database/DatabaseManipulation';
import EditModal from '../EditTaskModal';
import { taskDoneToast } from '../../Logic/Cheerleader';

/**
 * A component for interacting with all functionality relating to a task
 * @param {function} fetchTasks - function that call for all tasks to be fetched from database
 * @param {Array} tasks - an array containing all tasks
 * @param {function} setPage - function that is passes an number value corisponding to current active page
 * @param {Number} points - the current points the user has
 * @param {function} fetchPoints - a function to that updates points via fetching from the database
 * @returns {GestureDetector}
 */
export default function TaskComponent({ task, fetchTasks, tasks, points, fetchPoints }) {
  const [isExtended, setExtended] = useState(false);
  // https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/long-press-gesture
  let hasStartDate = task.start_date != '';
  let hasDueDate = task.due != '';
  let hasWordCount = task.word_count != '';
  let hasSlideCount = task.slide_count != '';
  let hasPageCount = task.page_count != '';
  const isDone = task.done == 1;

  /**
   * Is called when a long press is detected. Inverts extended's value.
   */
  const whenLongPress = Gesture.LongPress().onEnd(() => {
    smoothExpansionAnimation();
    impactAsync();
    setExtended(!isExtended);
  });

  /**
   * Called on pressing the delete button, will warn the user and then call SQL query to delete task.
   */
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

  /**
   * Called when pressing done button. Will updated task's done value in database and add points.
   */
  const doneTask = () => {
    console.log('p:', points);
    setTaskDone(task, true);

    if (points == 0) {
      addPoints(1);
    }
    if (points != 0) {
      const newPoints = points + 1;
      updatePoints(newPoints);
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
