import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleText from '../Components/Output Components/TitleTextComponent';
import { globalStyle } from '../Styling/GlobalStyles';
import DisplayTasks from '../Components/Output Components/TaskDisplayComponent';
import CustomLabel from '../Components/Output Components/LabelComponent';
import CreateTaskButton from '../Components/Input Components/CreateTaskButtonComponent';
import CompletedTasksPage from './CompletedTasksPage';

export default function TodayPage({ fetchTasks, tasks }) {
  let date = new Date();
  date = date.toISOString().split('T')[0];

  return (
    <View style={globalStyle.pageContainer}>
      <TitleText titleName={'TODAY'} />
      <View style={{ flex: 1 }}>
        <CustomLabel text={'Tasks to Start Today:'} />
        <DisplayTasks
          tasks={tasks}
          date={date}
          fetchTasks={fetchTasks}
          displayType={'start'}
        />
      </View>
      <CustomLabel text={'Tasks due Today:'} />
      <View style={{ flex: 1 }}>
        <DisplayTasks
          tasks={tasks}
          date={date}
          fetchTasks={fetchTasks}
          displayType={'due'}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CreateTaskButton fetchTasks={fetchTasks} />
        <CompletedTasksPage
          fetchTasks={fetchTasks}
          tasks={tasks}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
});
