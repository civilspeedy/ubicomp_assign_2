/**
 * @file contains the Today page
 * @module TodayPage
 */

import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleText from '../Components/Text/TitleTextComponent';
import { globalStyle } from '../GlobalStyles';
import DisplayTasks from '../Components/Display/DisplayTasks';
import CustomLabel from '../Components/Text/Label';
import CreateTaskButton from '../Components/Input/CreateTaskButton';
import CompletedTasksPage from './CompletedTasksPage';
import AllTasksPage from './AllTasksPage';
import { useFocusEffect } from '@react-navigation/native';

/**A page for displaying tasks that either start or are due on the current day, as well as buttons
 * for adding new tasks, viewing all task and viewing all completed tasks.
 * @param {function} fetchTasks - function that call for all tasks to be fetched from database
 * @param {Array} tasks - an array containing all tasks
 * @param {function} setPage - function that is passes an number value corisponding to current active page
 * @param {Number} points - the current points the user has
 * @param {function} fetchPoints - a function to that updates points via fetching from the database
 * @returns {View}
 * */
export default function TodayPage({ fetchTasks, tasks, setPage, points, fetchPoints }) {
  let date = new Date();
  date = date.toISOString().split('T')[0];

  useFocusEffect(
    useCallback(() => {
      console.log('today page is being looked at');
      setPage(1);
    }, [])
  );

  return (
    <View style={globalStyle.pageContainer}>
      <TitleText titleName={'TODAY'} />

      <Text style={styles.pointsText}>
        Points: <Text style={styles.pointsNumber}>{points}</Text>
      </Text>
      <View style={{ flex: 1 }}>
        <CustomLabel text={'Tasks to Start Today:'} />
        <DisplayTasks
          tasks={tasks}
          date={date}
          fetchTasks={fetchTasks}
          displayType={'start'}
          points={points}
          fetchPoints={fetchPoints}
        />
      </View>
      <CustomLabel text={'Tasks due Today:'} />
      <View style={{ flex: 1 }}>
        <DisplayTasks
          tasks={tasks}
          date={date}
          fetchTasks={fetchTasks}
          displayType={'due'}
          points={points}
          fetchPoints={fetchPoints}
        />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonIsolator}>
          <CustomLabel text={'New'} />
          <CreateTaskButton fetchTasks={fetchTasks} />
        </View>

        <View style={styles.buttonIsolator}>
          <CustomLabel text={'All'} />
          <AllTasksPage
            fetchTasks={fetchTasks}
            tasks={tasks}
            fetchPoints={fetchPoints}
            points={points}
          />
        </View>

        <View style={styles.buttonIsolator}>
          <CustomLabel text={'Done'} />
          <CompletedTasksPage
            fetchTasks={fetchTasks}
            tasks={tasks}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  buttonIsolator: {
    flex: 1,
    alignItems: 'center',
  },
  pointsText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  pointsNumber: {
    color: 'orange',
  },
});
