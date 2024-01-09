/**
 * @file contains the component for the calendar page
 * @module CalendarPage
 */

import React, { useCallback } from 'react';
import { View } from 'react-native';
import TitleText from '../Components/Text/TitleTextComponent';
import { globalStyle } from '../GlobalStyles';
import CustomCanendar from '../Components/CalendarWithTasks';
import { useFocusEffect } from '@react-navigation/native';

/**
 * A page for viewing what tasks that related to a specific date
 * @param {function} fetchTasks - function that call for all tasks to be fetched from database
 * @param {Array} tasks - an array containing all tasks
 * @param {function} setPage - function that is passes an number value corisponding to current active page
 * @return {View}
 */
export default function CalendarPage({ fetchTasks, tasks, setPage }) {
  useFocusEffect(
    useCallback(() => {
      console.log('Calendar page is being looked at');
      setPage(2);
    }, [])
  );
  return (
    <View style={globalStyle.pageContainer}>
      <TitleText titleName={'CALENDAR'} />

      <CustomCanendar
        fetchTasks={fetchTasks}
        tasks={tasks}
      />
    </View>
  );
}
