import React, { useState } from 'react';
import { Text, View } from 'react-native';
import TitleText from '../Components/Output Components/TitleTextComponent';
import { globalStyle } from '../Styling/GlobalStyles';
import DisplayTasks from '../Components/Output Components/TaskDisplayComponent';
import CustomLabel from '../Components/Output Components/LabelComponent';
import CreateTaskButton from '../Components/Input Components/CreateTaskButtonComponent';

export default function TodayPage({ fetchTasks, tasks }) {
  let date = new Date();
  date = date.toISOString().split('T')[0];

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

      <View style={{ flex: 1 }}>
        <CreateTaskButton fetchTasks={fetchTasks} />
      </View>
    </View>
  );
}
