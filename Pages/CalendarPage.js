import React, { useCallback } from 'react';
import { View } from 'react-native';
import TitleText from '../Components/Output Components/TitleTextComponent';
import { globalStyle } from '../Styling/GlobalStyles';
import CustomCanendar from '../Components/CustomCalendarComponent';
import { useFocusEffect } from '@react-navigation/native';

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

      <CustomCanendar fetchTasks={fetchTasks} tasks={tasks} />
    </View>
  );
}
