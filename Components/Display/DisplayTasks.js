/**
 * @file contains the Display Tasks component
 * @module DisplayTasks
 */
import { ScrollView, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TaskComponent from './TaskComponent';
import { smoothExpansionAnimation } from '../../GlobalStyles';
import CustomLabel from '../Text/Label';

/**
 * A display of tasks relating to a given date, whether they are done or all in databse.
 * @param {function} fetchTasks - function that call for all tasks to be fetched from database
 * @param {string} date - a date string relating to the date you would like to see tasks from
 * @param {Array} tasks - an array containing all tasks
 * @param {string} displayType - a string representing the type of task display want to be returned
 * @param {Number} points - the current points the user has
 * @param {function} fetchPoints - a function to that updates points via fetching from the database
 * @returns {GestureHandlerRootView}
 */
export default function DisplayTasks({
  tasks,
  date,
  fetchTasks,
  displayType,
  points,
  fetchPoints,
}) {
  let _date = '';
  const tasksOnDate = [];

  if (date != null) {
    _date = date.split(' ')[0];

    for (let i = 0; i < tasks.length; i++) {
      if (displayType == 'both') {
        if (tasks[i].done == 0) {
          if (tasks[i].due == _date || tasks[i].start_date == _date) {
            tasksOnDate.push(tasks[i]);
          }
        }
      }

      if (displayType == 'due') {
        if (tasks[i].done == 0) {
          if (tasks[i].due == _date) {
            tasksOnDate.push(tasks[i]);
          }
        }
      }

      if (displayType == 'start') {
        if (tasks[i].done == 0) {
          if (tasks[i].start_date == _date) {
            tasksOnDate.push(tasks[i]);
          }
        }
      }
    }
  }

  for (let i = 0; i < tasks.length; i++) {
    if (displayType == 'done') {
      if (tasks[i].done == 1) {
        tasksOnDate.push(tasks[i]);
      }
    }

    if (displayType == 'all') {
      if (tasks[i].done == 0) {
        tasksOnDate.push(tasks[i]);
      }
    }
  }

  smoothExpansionAnimation();

  if (tasksOnDate.length == 0) {
    return (
      <View>
        <CustomLabel text={'No Tasks'} />
      </View>
    );
  }
  if (tasksOnDate != []) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {tasksOnDate.map((task, index) => (
            <TaskComponent
              task={task}
              fetchTasks={fetchTasks}
              key={index}
              tasks={tasks}
              points={points}
              fetchPoints={fetchPoints}
            />
          ))}
        </ScrollView>
      </GestureHandlerRootView>
    );
  }
}
