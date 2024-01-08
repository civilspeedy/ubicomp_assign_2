import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleText from '../Components/Output Components/TitleTextComponent';
import { globalStyle } from '../Styling/GlobalStyles';
import DisplayTasks from '../Components/Output Components/TaskDisplayComponent';
import CustomLabel from '../Components/Output Components/LabelComponent';
import CreateTaskButton from '../Components/Input Components/CreateTaskButtonComponent';
import CompletedTasksPage from './CompletedTasksPage';
import AllTasksPage from './AllTasksPage';
import { useFocusEffect } from '@react-navigation/native';

export default function TodayPage({ fetchTasks, tasks, setPage }) {
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
      <View style={{ flex: 1 }}>
        <CustomLabel text={'Tasks to Start Today:'} />
        <DisplayTasks tasks={tasks} date={date} fetchTasks={fetchTasks} displayType={'start'} />
      </View>
      <CustomLabel text={'Tasks due Today:'} />
      <View style={{ flex: 1 }}>
        <DisplayTasks tasks={tasks} date={date} fetchTasks={fetchTasks} displayType={'due'} />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonIsolator}>
          <CustomLabel text={'New'} />
          <CreateTaskButton fetchTasks={fetchTasks} />
        </View>

        <View style={styles.buttonIsolator}>
          <CustomLabel text={'All'} />
          <AllTasksPage fetchTasks={fetchTasks} tasks={tasks} />
        </View>

        <View style={styles.buttonIsolator}>
          <CustomLabel text={'Done'} />
          <CompletedTasksPage fetchTasks={fetchTasks} tasks={tasks} />
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
});
